import axios from "axios";
import { getAllBooks, getBooksByTitle } from "./index";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const getBooks = () => (dispatch) => {
  axios(`${localhost}/books`)
    .then((res) => dispatch(getAllBooks(res.data)))
    .catch((e) => console.log(e));
};

export const getByTitle = (title) => (dispatch) => {
  axios(`${localhost}/books/title?title=${title}`)
    .then((res) => dispatch(getBooksByTitle(res.data)))
    .catch((e) => console.log(e));
};

export const postBook = (book) => () => {
  axios
    .post(`${localhost}/books`, book)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
