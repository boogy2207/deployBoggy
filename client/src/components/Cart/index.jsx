import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemFromCart, deleteBookFromCart } from "../../store/slices/cart";
import Swal from 'sweetalert2';
import { postStripe } from "../../store/slices/books/booksActions";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useEffect } from "react";

function Cart() {
    
    const cart = useSelector(state => state.cart.cart);
    const subTotal = useSelector(state => state.cart.subTotal);
    const dispatch = useDispatch();
    const stripe = useStripe()
    const elements = useElements()
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [send, setSend] = useState(false)
    const [err, setErr] = useState(false)

    const handleClick = (book, from) => {
        if (book.quantity === 1 && from === 'remove') return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can not remove the last item from the cart!',
            footer: '<p>Try delete whit the X button</p>'
        });
        from === 'add' ? dispatch(addToCart(book)) : from === 'remove' ? dispatch(removeItemFromCart(book)) : dispatch(deleteBookFromCart(book));
    }

    const handleStripe = async (e) => {
        e.preventDefault()
        setSend(true)
      const { error, paymentMethod } = await stripe.createPaymentMethod({ // eslint-disable-line
      type: 'card',
      card: elemets.getElement(CardElement)
    })
    console.log(paymentMethod)
    if (!error) {
      const { id } = paymentMethod
      dispatch(postStripe(id, totalAmount * 100, carrito, user.user.id))
    }
    }

    useEffect(() => {
        if (typeof buy === 'string') {
          setErr(true)
          setMessage('Algo salio mal!!')
          setTimeout(() => {
            setErr(false)
            setSend(false)
          }, 4000)
        } else if (Object.keys(buy).length) {
          // const publication = publications.find(p => carrito[0].id === p.id)
          // console.log(publication)
          // socket.emit('sendBuy', {
          //   senderName: user.username,
          //   receiverId: publication.userId,
          //   publicationTitle: publication.title
          // })
          crearCarr()
          setSuccess(true)
          setMessage('Pago confirmado!! gracias! Vuelva Pronto 😁')
          setTimeout(() => {
            history.push('/userPurchased')
          }, 5173)
        }
      }, [buy])

    return (
        <>
            {
                cart.length > 0 ? (
                    <div className="flex w-full">
                        <div className="cartDiv">
                            {cart.map((book) => {
                                return (
                                    <div key={book.id} className="card card-side bg-base-100 shadow-xl">
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
                                )
                            })}
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
                                    <button className="btn btn-primary btn-wide">Buy Now</button>
                                    <button className="btn btn-primary btn-wide">Add more Books</button>
                                </div>
                            </div>
                        </div>


                    </div>
                ) : <h1 className="flex justify-center items-center text-center text-5xl">Your cart is empty</h1>
            }
        </>
    );
};
export default Cart;