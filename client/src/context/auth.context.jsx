import React, { useState, useEffect } from 'react'
import authService from '@/services/auth.service'

const AuthContext = React.createContext()

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)

  const storeToken = (token) => {
    localStorage.setItem('authToken', token)
  }

  const storeUserData = (user) => {
    setUserData(user)
  }

  const useUserDataContext = () => {
    return userData
  }

  const authenticateUser = async () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken')

    // If the token exists in the localStorage
    if (storedToken) {
      // Send a request to the server using axios
      /* 
        axios.get(
          `${process.env.REACT_APP_SERVER_URL}/auth/verify`,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        )
        .then((response) => {})
        */

      // Or using a service
      try {
        const { data } = await authService.verify()
        const user = data
        setIsLoggedIn(true)
        setIsLoading(false)
        setUser(user)
      } catch (error) {
        setIsLoggedIn(false)
        setIsLoading(false)
        setUser(null)
      }
    } else {
      // If the token is not available
      setIsLoggedIn(false)
      setIsLoading(false)
      setUser(null)
    }
  }

  const removeToken = () => {
    localStorage.removeItem('authToken')
  }

  const logOutUser = () => {
    // Upon logout, remove the token from the localStorage
    removeToken()
    authenticateUser()
  }

  useEffect(() => {
    // Run this code once the AuthProviderWrapper component in the App loads for the first time.
    // This effect runs when the application and the AuthProviderWrapper component load for the first time.
    authenticateUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext }
