import axios from "axios";
import Swal from "sweetalert2";
import { allUsers, postUser, registerUser } from ".";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const login = (user) => (dispatch) => {
  axios
    .post(`${urlBack}/user/login`, user)
    .then((res) => {
      console.log("data", res.data);
      console.log("user", user);
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
    .get(`${urlBack}/user`)
    .then((res) => dispatch(allUsers(res.data)))
    .catch((e) => console.log(e));
};

export const register = (user) => (dispatch) => {
  const { name, email, password, image = null } = user;
  const data = {
    name,
    email,
    password,
    image,
  };
  axios
    .post(`${urlBack}/user`, data)
    .then((res) => dispatch(registerUser(res.data)))
    .catch((e) => console.log(e));
};

export const deleteUsers = (id) => () => {
  axios
    .delete(`${urlBack}/user/${id}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};

export const restoreUsers = (id) => () => {
  axios
    .put(`${urlBack}/user/restore/${id}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};

export const putUser = (id, changes) => () => {
  axios
    .put(`${urlBack}/user/${id}`, changes)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};

export const getUserByEmail = (email) => () => {
  axios
    .get(`${urlBack}/user/email/${email}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
