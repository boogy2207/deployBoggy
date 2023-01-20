import axios from "axios";
import Swal from "sweetalert2";
import { allUsers, postUser, registerUser } from ".";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const login = (user) => (dispatch) => {
  console.log(user);
  axios
    .post(`${urlBack}/user/login`, user)
    .then((res) => {
      console.log(res.data);
      return dispatch(postUser(res.data));
    })
    .catch((e) => {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: e.response.data,
      });
    });
};

export const getAllUsers = () => (dispatch) => {
  axios
    .get(`${localhost}/user`)
    .then((res) => dispatch(allUsers(res.data)))
    .catch((e) => console.log(e));
};

export const register = (user) => (dispatch) => {
  const { name, email, password } = user;
  const data = {
    name,
    email,
    password,
  };
  axios
    .post(`${urlBack}/user`, data)
    .then((res) => dispatch(registerUser(res.data)))
    .catch((e) => console.log(e));
};

export const deleteUsers = (id) => () => {
  axios
    .get(`${localhost}/user/${id}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};