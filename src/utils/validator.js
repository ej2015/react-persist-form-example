import SimpleReactValidator from 'simple-react-validator'
import passwordRegex from './passwordRegex'

const SRV = new SimpleReactValidator({
    validators: {
      password: {
        message: 'Password should be at least 8-character long, and contain at least two of the following: upper ase, lower case, numeric, and special characters',
        rule: (val, params, validator) => passwordRegex.test(val)
      }
    }
  })

export default SRV
