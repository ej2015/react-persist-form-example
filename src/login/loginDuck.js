import { createAction, handleAction } from 'redux-actions'

export const LOGIN = {
  LOGIN: 'LOGIN'
}

export const login = createAction(LOGIN.LOGIN)

const initialState = {
  loginStatus: false,
  error: null
}

const reducer = handleAction( LOGIN.LOGIN, {
  next(state, action) { return { ...state, loginStatus: true, error: null }},
  throw(state, action) { return { ...state, loginStatus: false, error: action.payload.message }}
}, initialState)

export default reducer