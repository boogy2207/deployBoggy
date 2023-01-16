import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { addToCart } from '../../store/slices/cart';

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
                    <div className="my-10 flex w-full items-center justify-center">
                        <div className="card w-9/12 bg-base-100 shadow-xl">
                            <figure className='flex flex-col'>
                                <img className='my-10' src={bookID[0].imagelink} alt={bookID[0].id} />
                                <div className="card-actions justify-end">
                                    <label htmlFor="my-modal-4" className="btn" onClick={() => { addItem(bookID[0]) }}>
                                        Add to cart
                                    </label>
                                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                                    <label htmlFor="my-modal-4" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-xl text-center">Your product has been added to your cart</h3>
                                            <p className="py-4">Would you like to continue shopping or go to the shopping cart?</p>
                                            <div className="modal-action">
                                                <Link to='/'><label htmlFor="my-modal-4" className="btn">Continue Shipping</label></Link>
                                                <Link to='/cart'><label htmlFor="my-modal-4" className="btn">Go to cart</label></Link>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{bookID[0].title}</h2>
                                <p><strong>Author/s:</strong> {bookID[0].authors}</p>
                                <p><strong>Category:</strong> {bookID[0].category}</p>
                                <p><strong>Language:</strong> {bookID[0].language}</p>
                                <p><strong>Pages:</strong> {bookID[0].pagecount}</p>
                                <p>{isNaN(parseFloat(bookID[0].price)) ? `${bookID[0].price}` : `$ ${bookID[0].price}`}</p>
                                <p>{bookID[0].description}</p>
                            </div>
                        </div>
                    </div >
                ) : <>Book not Found...</>
            }
        </>


    )
}
