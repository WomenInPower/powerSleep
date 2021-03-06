import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {displayName} = props

  return (
    <div>
      <p>
        Disclaimer: Due to the nature of this project being a Hackathon
        challenge for studying purpose, this app is NOT verified by Google. If
        you decide to proceed by granting our app the access to your data,
        please note that we only use the data to calculate the sleep shift
        schedule and will not share it with third parties.
      </p>
      <h1>
        <a href="/auth/google">{displayName} with Google</a>
      </h1>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  }
}

const Login = connect(mapLogin)(AuthForm)
export default Login
