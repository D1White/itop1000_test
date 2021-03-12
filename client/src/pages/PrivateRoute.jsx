import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
//   const token = useSelector(({ user }) => user.user);
const token = localStorage.getItem('token');


  return (
    <Route
      {...rest}
      render={props => token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )}
    />
  )
}

export default PrivateRoute
