import { createAction, handleAction } from 'redux-actions'

export const LOGIN = {
  LOGIN: 'LOGIN'
}

export const login = createAction(LOGIN.LOGIN)

const initialState = {
  loginStatus: false
}

const reducer = handleAction( LOGIN.LOGIN, {
  next(state, action) { return { ...state, loginStatus: true }},
  throw(state, action) { return { ...state, loginStatus: false }}
}, initialState)

export default reducer