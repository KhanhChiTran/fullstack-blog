import { userTypes } from "./userTypes"

export const INITIAL_STATE = {
  currentUser: false,
}

export const userReducers = (state, action) => {
  switch (action.type) {
    case userTypes.USER_SIGNIN:
      return {
        ...state,
        currentUser: true,
      }

    case userTypes.USER_SIGNUP:
      return {
        ...state,
        currentUser: true,
      }

    default:
      return state
  }
}
