import axios from "axios";
import Swal from "sweetalert2";
import { allUsers, postUser, registerUser } from ".";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const login = (user) => (dispatch) => {
  axios
    .post(`${localhost}/user/login`, user)
    .then((res) => {
      return dispatch(postUser(res.data));
    })
    .catch((e) => {
      console.log(e.response.data.error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: e.response.data.error,
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
    .post(`${localhost}/user`, data)
    .then((res) => dispatch(registerUser(res.data)))
    .catch((e) => console.log(e));
};

export const deleteUsers = (id) => () => {
  axios
    .delete(`${localhost}/user/${id}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};

export const restoreUsers = (id) => () => {
  axios
    .put(`${localhost}/user/restore/${id}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};

export const putUser = (id, changes) => () => {
  axios
    .put(`${localhost}/user/${id}`, changes)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
