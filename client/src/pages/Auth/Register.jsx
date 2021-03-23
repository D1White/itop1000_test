import { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'

import './auth.scss'
import { Input, Checkbox } from '../../components'
import { register } from '../../redux/actions/user'

const Register = () => {
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    isAdmin: false,
  })
  const [warnings, setWarnings] = useState({
    username: false,
    email: false,
    password: false,
  })
  const [redirect, setRedirect] = useState(false)

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
      email: !fields.email.length || warnings.email,
      password: !fields.password.length || warnings.password,
    }

    setWarnings(empty)

    return !(empty.username || empty.password || empty.email)
  }

  const Register = () => {
    if (checkRequiredField()) {
      register(fields)
      setRedirect(true)
    }
  }

  if (redirect) {
    return <Redirect to="/login" />
  }

  return (
    <div className="auth">
      <h1 className="auth__header">Create your account</h1>
      <div className="auth__inputs">
        <Input
          title="Username"
          width={400}
          error={warnings.username}
          setValue={setFields}
          name="username"
        />
        <Input title="Email" width={400} error={warnings.email} setValue={setFields} name="email" />
        <Input
          title="Password"
          width={400}
          error={warnings.password}
          setValue={setFields}
          name="password"
          type="password"
        />
        <Checkbox setChecked={setFields} checked={fields.isAdmin} text="isAdmin" name="isAdmin" />
      </div>
      <button type="button" className="auth__button" onClick={Register}>
        Sign Up
      </button>
      <Link to="/login" className="auth__link">
        already have an account
      </Link>
    </div>
  )
}

export default Register
