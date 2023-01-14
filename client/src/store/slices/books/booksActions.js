import axios from 'axios'
import { getAllBooks, getBooksByTitle } from './index'

export const getBooks = () => (dispatch) => {

    axios("http://localhost:3002/books")
    .then(res => dispatch(getAllBooks(res.data)))
    .catch(e => console.log(e))
}

export const getByTitle = (title) => (dispatch) => {
    axios(`http://localhost:3002/books/title?title=${title}`)
       .then((res) => dispatch(getBooksByTitle(res.data)))
       .catch((e) => console.log(e));
 };
