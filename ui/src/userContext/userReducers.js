import { userTypes } from "./userTypes"

export const INITIAL_STATE = {
  currentUser: false,
  userInfo: null,
}

export const userReducers = (state, action) => {
  switch (action.type) {
    case userTypes.USER_SIGNIN:
      return {
        ...state,
        currentUser: true,
        userInfo: { ...action.userInfo },
      }

    case userTypes.USER_SIGNUP:
      return {
        ...state,
        currentUser: true,
      }

    case userTypes.USER_LOGOUT: {
      return {
        ...state,
        currentUser: false,
        userInfo: null,
      }
    }

    default:
      return state
  }
}
