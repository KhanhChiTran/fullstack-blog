import { useState, useEffect, useReducer, createContext } from "react"
import { firebaseConfig } from "../firebase/config"
import { userReducers, INITIAL_STATE } from "./userReducers"
export const UserContext = createContext()

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={useReducer(userReducers, INITIAL_STATE)}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
