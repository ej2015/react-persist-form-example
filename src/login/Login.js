import React from 'react'
import Form from './LoginForm'
import { connect } from "react-redux"
import { login } from './loginDuck'
import formWrapperCreater from 'react-persist-form'
import validator from '../utils/validator'
import { Container } from 'semantic-ui-react'

const FormWrapper = formWrapperCreater({name: 'resetPasswordForm', Form: Form })

const initialFields = { email: '', password: '' }

const Login = ({ error, login }) => {
  const handleSubmit = data => {
    console.log(data)
    login()
  }

  return (
    <Container>
      <FormWrapper
        initialFields={initialFields}
        onSubmit={handleSubmit}
        validator={validator}
        error={error}
      />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.login.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //login: () => dispatch(login(new TypeError('not a number')))  //simulate an error
    login: () => dispatch(login())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
