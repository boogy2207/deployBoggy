import axios from "axios";
import { postUser } from ".";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const login = (user) => (dispatch) => {
  axios
    .post(`${localhost}/user/login`, user)
    .then((res) => dispatch(postUser(res.data)))
    .catch((e) => console.log(e));
};

export const getAllUsers = () => () => {
  axios
    .get(`${localhost}/user`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
