import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemFromCart, deleteBookFromCart } from "../../store/slices/cart";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import Payment from "../Payment"

function Cart() {

    const cart = useSelector(state => state.cart.cart);
    const subTotal = useSelector(state => state.cart.subTotal);
    const dispatch = useDispatch();

    const handleClick = (book, from) => {
        if (book.quantity === 1 && from === 'remove') return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can not remove the last item from the cart!',
            footer: '<p>Try delete whit the X button</p>'
        });
        from === 'add' ? dispatch(addToCart(book)) : from === 'remove' ? dispatch(removeItemFromCart(book)) : dispatch(deleteBookFromCart(book));
    }

    return (
        <>
            {
                cart.length > 0 ? (
                    <div className="flex w-full items-center justify-center">
                        <div className="cartDiv ">
                            {cart.map((book) => {
                                return (
                                    <div key={book.id}>
                                        <div className="card m-5 card-side bg-base-100 shadow-xl">
                                            <button className="btn-xs mt-3 ml-2 mr-2 " onClick={() => handleClick(book, 'delete')}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    className="text-secondary h-5" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            <figure className="bg-transparent border-transparent hover:bg-transparent hover:border-transparent"><img src={book.imagelink} alt={book.title} /></figure>

                                            <div className="card-body">
                                                <button className="btn btn-primary ">{book.title}</button>
                                                <h2 className="card-title">$ {book.price} c/u</h2>
                                                <p>Author: {book.authors}</p>

                                                <div className="card-actions flex justify-end">
                                                    <button className="btn btn-primary btn-xs sm:btn-sm" onClick={() => handleClick(book, 'remove')}>-</button>
                                                    <button className="btn no-animation cursor-default btn-active btn-xs sm:btn-sm">{book.quantity}</button>
                                                    <button className="btn btn-primary btn-xs sm:btn-sm" onClick={() => handleClick(book, 'add')}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div>
                                <div className="w-full flex justify-center mb-5">
                                    <div className="cartTotalDivNone card p-9 bg-base-100 shadow-xl flex align-center items-center text-center ">
                                        <h2 className="card-title">Resume</h2>
                                        <table className="table w-full mt-4">
                                            <tbody>
                                                <tr>
                                                    <th className="text-start">SUBTOTAL </th>
                                                    <td className="text-end">${subTotal}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-start">TOTAL </th>
                                                    <td className="text-end">${subTotal}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="card-actions flex-col items-center mt-5">
                                            <Link to="/checkout"><button className="btn btn-primary btn-wide">Buy Now</button></Link>
                                            <Link to="/"><button className="btn btn-primary btn-wide">Add more Books</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cartTotalDiv card p-9 bg-base-100 shadow-xl flex align-center items-center text-center flex-col">
                                <h2 className="card-title">Resume</h2>
                                <table className="table w-full mt-4">
                                    <tbody>
                                        <tr>
                                            <th className="text-start">SUBTOTAL </th>
                                            <td className="text-end">${subTotal}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">TOTAL </th>
                                            <td className="text-end">${subTotal}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="card-actions flex-col items-center mt-5">
                                    <Link to="/checkout"><button className="btn btn-primary btn-wide">Buy Now</button></Link>
                                    <Link to="/"><button className="btn btn-primary btn-wide">Add more Books</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-20 mx-20 card w-10/12 bg-base-100 shadow-xl flex justify-center items-center">
                        <div className="card-body">
                            <h2 className="card-title">Oops...!</h2>
                            <p>It looks like your cart is a bit <strong>empty</strong></p>
                            <div className="card-actions justify-end">
                                <Link to='/'><button className="btn btn-primary">shall we fill it up a bit? 😉</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};
export default Cart;