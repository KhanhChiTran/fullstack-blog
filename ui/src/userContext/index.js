import { useState, useEffect, useReducer, createContext } from "react"
import { firebaseConfig } from "../firebase/config"
import { userReducers, INITIAL_STATE } from "./userReducers"
export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducers, INITIAL_STATE)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}
