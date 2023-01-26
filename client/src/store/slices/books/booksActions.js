import axios from "axios";
import Swal from "sweetalert2";
import { getAllBooks, getBooksByTitle } from "./index";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const getBooks = () => (dispatch) => {
  axios(`${urlBack}/books`)
    .then((res) => dispatch(getAllBooks(res.data)))
    .catch((e) => console.log(e));
};

export const getByTitle = (title) => (dispatch) => {
  if (title.length === 0) {
    dispatch(getBooks());
  } else {
    axios(`${urlBack}/books/title?title=${title}`)
      .then((res) => dispatch(getBooksByTitle(res.data)))
      .catch((e) => console.log(e));
  }
};

export const postBook = (book) => async (dispatch) => {
  try {
    const res = await axios.post(`${urlBack}/books`, book);
    dispatch(getBooks());
    return Swal.fire({
      icon: "success",
      title: "Book added",
      text: `The book ${res.data.title} was added successfully`,
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      window.location.replace("/");
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = (id) => () => {
  axios
    .delete(`${urlBack}/books/${id}`)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
