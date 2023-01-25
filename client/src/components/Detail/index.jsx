import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { addToCart } from '../../store/slices/cart';
import style from './detail.module.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { yellow } from '@mui/material/colors';
import Footer from '../Footer';

export default function Detail() {

    const { id } = useParams();
    const allBooks = useSelector(state => state.books)

    const dispatch = useDispatch();
    
    let bookID = allBooks.books.filter(e => id === e.id)
    
    const addItem = (book) => {
            
            dispatch(addToCart(book))
            
            Swal.fire({
                icon: 'success',
                title: 'Your product has been added to your cart',
                text: 'Continue Shipping!',
            });
        
    };

    return (
        <>
            {
                bookID.length > 0 ? (
<>
                        <div className={style.img}>
                            <img src={bookID[0].imagelink} alt={bookID[0].id} />
                        </div>
                        <div className={style.price}>
                        <h1>{bookID[0].title}</h1>
                            <h3>{bookID[0].title}</h3>
                            <h2>{bookID[0].price === 'Free Book' ? bookID[0].price : `$${bookID[0].price}`}</h2>
                            <div className={style.start}>
                                <StarIcon sx={{ fontSize: 50, color: yellow[700] }} />
                                <StarIcon sx={{ fontSize: 50, color: yellow[700] }} />
                                <StarHalfIcon sx={{ fontSize: 50, color: yellow[700] }} />
                                <StarOutlineIcon sx={{ fontSize: 50, color: yellow[700] }} />
                                <StarOutlineIcon sx={{ fontSize: 50, color: yellow[700] }} />
                            </div>
                        </div>

                        <div className={style.buttons}>
                            <button className={style.button1} onClick={() => { addItem(bookID[0]) }}>Add to cart</button>
                            <button className={style.button2}>Buy it now</button>
                        </div>
                        <div className={style.divider}><h1>FEATURES</h1></div>

                        <div className={style.tableConteiner}>
                            <table>
                                    <tr>
                                        <th>Title of the book</th>
                                        <td>{bookID[0].title}</td>
                                    </tr>
                                    <tr>
                                        <th>Author</th>
                                        <td>{bookID[0].authors}</td>
                                    </tr>
                                    <tr>
                                        <th>Language</th>
                                        <td>{bookID[0].language}</td>
                                    </tr>
                                    <tr>
                                        <th>Number of pages</th>
                                        <td>{bookID[0].pagecount}</td>
                                    </tr>
                                    <tr>
                                        <th>Book genre</th>
                                           <td>{bookID[0].category}</td>
                                    </tr>
                            </table>
                        </div>

                        <div className={style.divider2}><h1>DESCRIPTION</h1></div>
                        
                        <div className={style.description}><h1>{`${bookID[0].description.slice(0, 459)}...`}</h1></div>
                        <div className={style.reviews}>
                            <h1>Customer reviews</h1>
                            <div className={style.comments}>
                                <h1>usuario</h1>
                                <h2>Excelente Libro!!!</h2>
                            </div>
                            <div className={style.comments}>
                                <h1>usuario</h1>
                                <h2>Excelente Libro!!!</h2>
                            </div>
                            <div className={style.comments}>
                                <h1>usuario</h1>
                                <h2>Excelente Libro!!!</h2>
                            </div>
                            
                        </div>
                        <button className={style.write}><h1>Write a review</h1></button>

                        <Footer/>

                        </>
                ) : <>Book not Found...</>
            }
        </>


    )
}
