import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../store/slices/books/booksActions';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/slices/cart';


function Cards() {

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  const allBooks = useSelector(state => state.books);
  const dispatch = useDispatch();

  const addItem = (book) => {
    dispatch(addToCart(book))
  };


  return (
    <div className='mt-10 homeCards'>
      {
        allBooks.books && allBooks.books.map((book, i) => (
          <div key={i} className="card card-compact max-w-xs rounded-md mx-4 bg-base-100 shadow-xl col-span-1">
            <Link to={`/book/${book.id}`}>
              <figure><img className='w-fit' src={book.imagelink} alt={book.title} /></figure>
            </Link>
            <div className="card-body">
              <h2 className="card-body">{book.title}</h2>
              <div className="badge badge-secondary">{isNaN(parseFloat(book.price)) ? `${book.price}` : `$ ${book.price}`}</div>
              <div className="card-actions justify-end">
                <label htmlFor="my-modal-4" className="btn" onClick={() => { addItem(book) }}>
                  +<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </label>
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">Your product has been added to your cart</h3>
                    <p className="py-4">Would you like to continue shopping or go to the shopping cart?</p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-4" className="btn">Continue Shipping</label>
                      <label htmlFor="my-modal-4" className="btn"><Link to='/cart'>Go to cart</Link></label>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cards;

/*

*/