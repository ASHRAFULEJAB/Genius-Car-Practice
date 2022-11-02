import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import app from '../../firebase/firebaseConfig'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  const authoInfo = {
    user,
    loading,
    signUp,
  }
  return (
    <AuthContext.Provider value={authoInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
