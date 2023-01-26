import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { addToCart } from '../../store/slices/cart';
import style from './detail.module.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { orange, yellow } from '@mui/material/colors';
import Footer from '../Footer';

export default function Detail() {

    const { id } = useParams();
    const allBooks = useSelector(state => state.books)

    const dispatch = useDispatch();

    let bookID = allBooks.books.filter(e => id === e.id)

    const [number, setNumber] = useState(0)
    const [hoverStar, setHoverStar] = useState(undefined)
    const [write, setWrite] = useState(false)


    const addItem = (book) => {
        dispatch(addToCart(book))
        Swal.fire({
            icon: 'success',
            title: 'Your product has been added to your cart',
            text: 'Continue Shipping!',
        });
    };

    const handleText = () => {
        switch (number || hoverStar) {
            case 0:
                return 'Evaluate';
            case 1:
                return 'Dissatifation';
            case 2:
                return 'Unsatisfied';
            case 3:
                return 'Normal';
            case 4:
                return 'Satisfied';
            case 5:
                return 'Very Satisfied';
            default:
                return 'Evaluate';
        }
    };

    const handlePlaceHolder = () => {
        switch (number || hoverStar) {
            case 0:
                return 'Comment here...';
            case 1:
                return 'What is your problem?';
            case 2:
                return 'What is your problem?';
            case 3:
                return 'Comment here...';
            case 4:
                return 'Why do you like the book?';
            case 5:
                return 'Why do you like the book?';
            default:
                return 'Comment here...';
        }
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
                                {Array(5)
                                    .fill()
                                    .map((_, index) =>
                                        number >= index + 1 || hoverStar >= index + 1 ? (
                                            <StarIcon sx={{ fontSize: 50, color: yellow[800] }}
                                            onClick={() => setNumber(index + 1)}
                                            onMouseOver ={() => setHoverStar(index + 1)}
                                            onMouseLeave ={() => setHoverStar(undefined)}
                                            />
                                        ) : (
                                            <StarOutlineIcon sx={{ fontSize: 50, color: yellow[800] }}
                                                onClick={() => setNumber(index + 1)}
                                                onMouseOver ={() => setHoverStar(index + 1)}
                                                onMouseLeave ={() => setHoverStar(undefined)}
                                            />

                                        )

                                    )}
                            </div>
                            <div>
                                <h1>{handleText()}</h1>
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
                        <div className={style.box}>
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
                            
                            <textarea placeholder={handlePlaceHolder()}></textarea>
                        </div>
                        <button className={style.write}><h1>Write a review</h1></button>
                        </div>
                        <div className={style.footer}>
                        <Footer />
                        </div>

                    </>
                ) : <>Book not Found...</>
            }
        </>


    )
}
