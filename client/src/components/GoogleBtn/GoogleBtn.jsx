import {useEffect, useState} from 'react'
import jwtdecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/auth/requestsUser';
import axios from 'axios';

/* const urlBack = "https://deployboggy-production.up.railway.app" */
const urlBack = "http://localhost:3002"

const GoogleBtn = () => {
    const cookies = new Cookies()
    const dispatch = useDispatch()
  
    function handleCallbackResponse (response) {
      const userObject = jwtdecode(response.credential)
        console.log(userObject)
        fetch(`${urlBack}/user/email/` + userObject.email)
      .then(res => res.json())
      .then(data => {
        if (!data) {
          fetch(`${urlBack}/user`, {
            method: 'POST',
            body: JSON.stringify({
              email: userObject.email,
              password: 'password',
              name: userObject.name,
              image: userObject.image
            }),
            headers: {
              'Content-type': 'application/json'
            },
            credentials: 'include'
          })

            .then((res) => res.json())
            .then((data) => {
              console.log(data)
            })
        }
        fetch(`${urlBack}/user/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: userObject.email,
            password: 'password'
          }),
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include'
        })

          .then((res) => res.json())
          .then((data) => {
           console.log(data)
          })
      }

      )
       
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