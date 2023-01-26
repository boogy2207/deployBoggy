import { useEffect, useState } from 'react'
import jwtdecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { login, register, getUserById } from '../../store/slices/auth/requestsUser';
import axios from 'axios';

const urlBack = "https://deployboggy-production.up.railway.app"
// const urlBack = "http://localhost:3002"

const GoogleBtn = () => {
  const dispatch = useDispatch()

  function handleCallbackResponse(response) {
    const userObject = jwtdecode(response.credential)
    axios(`${urlBack}/user/email/${userObject.email}`)
      .then(data => {
        if (!data.data) {
          dispatch(register({ email: userObject.email, password: "password", name: userObject.name, image: userObject.picture }))
          Swal.fire({
            icon: 'success',
            title: 'User registered successfully',
            text: "Please, confirm your email to continue",
            timer: 2500
          })
        } else {
          const isValid = getUserById(data.data.id);
          if (!isValid) {
            Swal.fire({
              icon: 'error',
              title: 'User not Validated',
              text: "Please, check your email to confirm your account",
              timer: 2500
            })
          } else {
            dispatch(login({ email: userObject.email, password: "password" }))
          }
        }
      }).catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Something went wrong!",
          timer: 2500
        })
      });
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

  return (
    <div
      className=''
      id='buttonChrome'
    />
  )
}

export default GoogleBtn