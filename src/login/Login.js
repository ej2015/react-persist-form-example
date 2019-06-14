import React from 'react'
import Form from './LoginForm'
import formWrapperCreater from 'react-persist-form'
import validator from '../utils/validator'
import { Container } from 'semantic-ui-react'

const FormWrapper = formWrapperCreater({name: 'resetPasswordForm', Form: Form })

const initialFields = { email: '', password: '' }

const Login = ({ error, login }) => {
  const handleSubmit = data => {
    console.log('do something with ', data)
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

export default Login
