import React from 'react'
import { Form } from 'semantic-ui-react'
import { startCase } from 'lodash'

const getLabel = name => startCase(name)

const inputBuilder = (type = '') => {
  return ({ handleChange, value, validator, name, required = true }) => (
    <Form.Field required={required}>
      <label>{getLabel(name)}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {validator}
    </Form.Field>
  )
}

export const InputEnvelope = inputBuilder()

export const TextInput = inputBuilder('text')
export const PasswordInput = inputBuilder('password')

