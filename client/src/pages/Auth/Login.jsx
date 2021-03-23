import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import './auth.scss'
import { Input } from '../../components'
import { login, setLoggedIn } from '../../redux/actions/user'

const Login = () => {
  const dispatch = useDispatch()

  const { loggedIn } = useSelector(({ user }) => user)

  const [fields, setFields] = useState({
    username: '',
    password: '',
  })
  const [warnings, setWarnings] = useState({
    username: false,
    password: false,
  })

  useEffect(() => {
    dispatch(setLoggedIn(false))
  }, [])

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
    if (fields.password) {
      if (fields.password.length > 2 && fields.password.length < 51) {
        setWarnings({ ...warnings, password: false })
      } else {
        setWarnings({ ...warnings, password: true })
      }
    }
  }, [fields.password])

  const checkRequiredField = () => {
    const empty = {
      username: !fields.username.length || warnings.username,
      password: !fields.password.length || warnings.password,
    }

    setWarnings(empty)

    return !(empty.username || empty.password)
  }

  const Login = () => {
    if (checkRequiredField()) {
      dispatch(login(fields))
    }
  }

  if (loggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="auth">
      <h1 className="auth__header">Authorization</h1>
      <div className="auth__inputs">
        <Input
          title="Username/email"
          width={400}
          error={warnings.username}
          setValue={setFields}
          name="username"
        />
        <Input
          title="Password"
          width={400}
          error={warnings.password}
          setValue={setFields}
          name="password"
          type="password"
        />
      </div>
      <button type="button" className="auth__button" onClick={Login}>
        Sign In
      </button>
      <Link to="/registration" className="auth__link">
        no account
      </Link>
    </div>
  )
}

export default Login
