import axios from "axios";
import Swal from "sweetalert2";
import { postUser, registerUser } from ".";

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
    .catch((e) =>
      Swal.fire({
        icon: "error",
        title: "Error",
        text: e.response.data,
      })
    );
  console.log(e.response.data);
};

export const getAllUsers = () => () => {
  axios
    .get(`${urlBack}/user`)
    .then((res) => console.log(res.data))
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
