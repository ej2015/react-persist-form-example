import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { TextInput, PasswordInput } from '../utils/form'

const LoginForm = ({ handleSubmit, handleChange, validator, data }) => (
  <Form onSubmit={handleSubmit}>
    <TextInput
      handleChange={handleChange}
      label='Email'
      name='email'
      value={data.email}
      validator={validator.message('email', data.email, 'required|email')}
    />

    <PasswordInput
      handleChange={handleChange}
      label="New Password"
      name="password"
      value={data.password}
      validator={validator.message('password', data.password, 'required|password')}
    />

    <Button type='submit'>Submit</Button>
  </Form>
)

export default LoginForm

