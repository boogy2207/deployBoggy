import axios from "axios";
import { useSelector } from "react-redux";
import { getAllReviews } from "./index";

const urlBack = "https://deployboggy-production.up.railway.app";
const localhost = "http://localhost:3002";

export const getReviews = () => (dispatch) => {
  axios(`${urlBack}/reviews`)
    .then((res) => dispatch(getAllReviews(res.data)))
    .catch((e) => console.log(e));
};

export const addReviews = (review,reviewDB) => () => {

        axios.post(`${urlBack}/reviews`, review)
          .then((res) => console.log(res.data))
          .catch((e) => console.log(e));

  };