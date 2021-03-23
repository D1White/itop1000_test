import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './popup.scss'
import { Input, RadioInput } from '../index'
import { updateUser } from '../../redux/actions/user'
import { updateRouteUser } from '../../redux/actions/routeUser'

const UserPopup = ({ popupVisible, userId, isMainUser }) => {
  const dispatch = useDispatch()

  const [fields, setFields] = useState({
    username: '',
    email: '',
    role: '',
  })
  const [warnings, setWarnings] = useState({
    username: false,
    email: false,
    role: false,
  })

  useEffect(() => {
    if (fields.username) {
      if (fields.username.length > 2 && fields.username.length < 51) {
        setWarnings({ ...warnings, username: false })
      } else {
        setWarnings({ ...warnings, username: true })
      }
    }
  }, [fields.username])

  useEffect(() => {
    const regexp = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm

    if (fields.email) {
      if (fields.email.length > 2 && fields.email.length < 51 && regexp.test(fields.email)) {
        setWarnings({ ...warnings, email: false })
      } else {
        setWarnings({ ...warnings, email: true })
      }
    }
  }, [fields.email])

  useEffect(() => {
    if (fields.role) {
      setWarnings({ ...warnings, role: false })
    }
  }, [fields.role])

  const checkRequiredField = () => {
    const empty = {
      username: !fields.username.length || warnings.username,
      email: !fields.email.length || warnings.email,
      role: !fields.role.length || warnings.role,
    }

    setWarnings(empty)

    return !(empty.username || empty.email || empty.role)
  }

  const submit = () => {
    if (checkRequiredField()) {
      if (isMainUser) {
        dispatch(
          updateUser(userId, {
            username: fields.username,
            email: fields.email,
            isAdmin: fields.role === 'admin',
          }),
        )
      } else {
        dispatch(
          updateRouteUser(userId, {
            username: fields.username,
            email: fields.email,
            isAdmin: fields.role === 'admin',
          }),
        )
      }

      popupVisible(false)
    }
  }

  const cancel = () => {
    popupVisible(false)
  }

  return (
    <div className="popup__bg">
      <div className="popup">
        <Input title="username" setValue={setFields} error={warnings.username} name="username" />
        <Input title="email" setValue={setFields} error={warnings.email} name="email" />
        <RadioInput
          title="role"
          setValue={setFields}
          values={['user', 'admin']}
          error={warnings.role}
          name="role"
        />
        <div className="popup__buttons">
          <button className="popup__button" onClick={submit} type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00014 16.1699L5.53014 12.6999C5.14014 12.3099 4.51014 12.3099 4.12014 12.6999C3.73014 13.0899 3.73014 13.7199 4.12014 14.1099L8.30014 18.2899C8.69014 18.6799 9.32014 18.6799 9.71014 18.2899L20.2901 7.70995C20.6801 7.31995 20.6801 6.68995 20.2901 6.29995C19.9001 5.90995 19.2701 5.90995 18.8801 6.29995L9.00014 16.1699Z"
                fill="#4E4B66"
              />
            </svg>
          </button>
          <button className="popup__button" onClick={cancel} type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3002 5.70997C17.9102 5.31997 17.2802 5.31997 16.8902 5.70997L12.0002 10.59L7.11022 5.69997C6.72022 5.30997 6.09021 5.30997 5.70021 5.69997C5.31021 6.08997 5.31021 6.71997 5.70021 7.10997L10.5902 12L5.70021 16.89C5.31021 17.28 5.31021 17.91 5.70021 18.3C6.09021 18.69 6.72022 18.69 7.11022 18.3L12.0002 13.41L16.8902 18.3C17.2802 18.69 17.9102 18.69 18.3002 18.3C18.6902 17.91 18.6902 17.28 18.3002 16.89L13.4102 12L18.3002 7.10997C18.6802 6.72997 18.6802 6.08997 18.3002 5.70997Z"
                fill="#4E4B66"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserPopup
