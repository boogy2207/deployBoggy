import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { addToCart } from '../../store/slices/cart';
import style from './detail.module.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { yellow } from '@mui/material/colors';

export default function Detail() {

    const { id } = useParams();
    const allBooks = useSelector(state => state.books)
    const dispatch = useDispatch();

    let bookID = allBooks.books.filter(e => id === e.id)


    const addItem = (book) => {
        dispatch(addToCart(book))
    };


    return (
        <>
            {
                bookID.length > 0 ? (

                    <div className={style.container}>
                        <div className={style.img}>
                            <img src={bookID[0].imagelink} alt={bookID[0].id}/>
                        </div>
                        <div className={style.price}>
                            <h1>{bookID[0].title}</h1>
                            <h2>$11,70</h2>
                            <div  className={style.start}>
                            <StarIcon sx={{ fontSize: 50, color: yellow[700] }}/>
                            <StarIcon sx={{ fontSize: 50, color: yellow[700] }}/>
                            <StarHalfIcon sx={{ fontSize: 50, color: yellow[700] }}/>
                            <StarOutlineIcon sx={{ fontSize: 50, color: yellow[700] }}/>
                            <StarOutlineIcon sx={{ fontSize: 50, color: yellow[700] }}/>
                            </div>
                        </div>
                        <div className={style.amount}>
                            <div className="card-actions flex justify-end">
                                <button className="btn btn-primary btn-xs sm:btn-sm" /*onClick={() => handleClick(book, 'remove')}*/>-</button>
                                <button className="btn no-animation cursor-default btn-active btn-xs sm:btn-sm">{/*book.quantity*/}</button>
                                <button className="btn btn-primary btn-xs sm:btn-sm" /*onClick={() => handleClick(book, 'add')}*/>+</button>
                            </div>

                        </div>
                        <div className={style.buttons}>
                            <button className={style.button1}>Add to cart</button>
                            <button className={style.button2}>Buy it now</button>
                        </div>
                    </div>
                ) : <>Book not Found...</>
            }
        </>


    )
}
