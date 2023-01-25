import axios from "axios";
import { getAllBooks, getBooksByTitle } from "./index";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const getBooks = () => (dispatch) => {
  axios(`${urlBack}/books`)
    .then((res) => dispatch(getAllBooks(res.data)))
    .catch((e) => console.log(e));
};

export const getByTitle = (title) => (dispatch) => {
  axios(`${urlBack}/books/title?title=${title}`)
    .then((res) => dispatch(getBooksByTitle(res.data)))
    .catch((e) => console.log(e));
};

export const postStripe = (idStripe, totalAmount, cart, userId) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`http://localhost:3002/stripe`, {
        idStripe,
        totalAmount,
        cart,
        userId
      })
      console.log(res)
      return dispatch(getStripe(res.data))
    } catch (error) {
      console.log('Error action post Stripe')
      
    }
  }
}