import {useState} from 'react'
import { useAuth } from './useAuth'

export const useLogin = () => {
  const [iserror, setIserror] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {dispatch}=useAuth()

  const login = async (email, password) => {
    setIsLoading(true)
    setIserror(null)

    const response = await fetch('http://localhost:4040/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()
  
    console.log(json);
    if (!response.ok) {
      setIsLoading(false)
      setIserror(json.error)
      console.log(false);
    }

    if (response.ok) {
      // // save the user to local storage
      // localStorage.setItem('user', JSON.stringify(json))
console.log("true");
      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, iserror }



}
