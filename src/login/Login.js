import React from 'react'
import Form from './LoginForm'
import { connect } from "react-redux"
import { login } from './loginDuck'
import formWrapperCreater from 'react-persist-form'
import validator from '../utils/validator'
import { Container } from 'semantic-ui-react'

const FormWrapper = formWrapperCreater('resetPasswordForm')

const initialFields = { email: '', password: '' }

const Login = ({ login }) => {
  const handleSubmit = data => {
    console.log(data)
    login()
  }

  return (
    <Container>
      <FormWrapper
        Form={Form}
        initialFields={initialFields}
        handleSubmit={handleSubmit}
        validator={validator}
      />
    </Container>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: () => dispatch(login())
  }
}

export default connect(null, mapDispatchToProps)(Login)
