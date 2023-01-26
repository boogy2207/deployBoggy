import {useEffect, useState} from 'react'
import jwtdecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/auth/requestsUser';

const GoogleBtn = () => {
    const cookies = new Cookies()
    const dispatch = useDispatch()
  
    function handleCallbackResponse (response) {
      const userObject = jwtdecode(response.credential)
        console.log(userObject)
       
    }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: '967382346052-h722e070hlc5u7k77or7kqip9scgeob5.apps.googleusercontent.com',
        callback: handleCallbackResponse
      })
  
      google.accounts.id.renderButton(
        document.getElementById('buttonChrome'),
        { theme: 'outline', size: 'large' }
      )
    }, [])// eslint-disable-line
  
    const [err, setError] = useState(false)// eslint-disable-line
    const [success, setSuccess] = useState(false)// eslint-disable-line
  
    return (
      <div
        className=''
        id='buttonChrome'
      />
    )
}

export default GoogleBtn