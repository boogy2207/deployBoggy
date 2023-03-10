import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBooks } from '../../store/slices/books/booksActions';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/slices/cart';


function Cards() {

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  const allBooks = useSelector(state => state.books);

  const booksAvalaibles = allBooks && allBooks.books.filter(e => e.destroyTime === null)
  const search = allBooks && allBooks.books.filter(e => Object.values(e).length === 9)

  const dispatch = useDispatch();

  const addItem = (book) => {
    dispatch(addToCart(book))
  };

  //REFACTOR

  const [page, setPage] = useState(0);
  const [booksPaginated, setBooksPaginated] = useState([]);

  const handlePage = (i) => {
    if (page === 0 && i === '-') return;
    if (page === booksPaginated.length - 1 && i === '+') return;
    i === '-' ? setPage(page - 1) : setPage(page + 1);
  }

  useEffect(() => {
    let aux = [];
    let auxI = 8;
    if (search.length > 0) {
      for (let i = 0; i < search.length; i += auxI) {
        aux.push(search.slice(i, i + auxI));
      }
    } else {
      for (let i = 0; i < booksAvalaibles.length; i += auxI) {
        aux.push(booksAvalaibles.slice(i, i + auxI));
      }
    }
    setBooksPaginated(aux);
  }, [allBooks])

  useEffect(() => {
    if (booksPaginated.length < page) {
      setPage(booksPaginated.length - 1);
    }
  }, [booksPaginated])

  return (
    <>
      <div className="btn-group flex justify-center items-center my-5">
        <button className="btn btn-secondary" onClick={() => handlePage('-')}>«</button>
        <button className="btn">Page {page + 1}</button>
        <button className="btn btn-secondary" onClick={() => handlePage('+')}>»</button>
      </div>
      <div className='mt-15 homeCards'>
        {
          booksPaginated.length > 0 && booksPaginated[page]?.map((book, i) => (
            <div key={i} className="card card-compact rounded-md mx-4 shadow-xl cardWidth pt-5 px-5">
              <Link to={`/book/${book.id}`}>
                <figure><img className='w-fit' src={book.imagelink} alt={book.title} /></figure>
              </Link>
              <div className="card-body">
                <h2 className="card-body">{book.title}</h2>
                <div className="badge badge-secondary">{isNaN(parseFloat(book.price)) ? `${book.price}` : `$ ${book.price}`}</div>
                <div className="card-actions justify-end">
                  <label htmlFor="my-modal-4" className="btn" onClick={() => { addItem(book) }}>
                    + <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </label>
                  <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                  <label htmlFor="my-modal-4" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <h3 className="font-bold text-xl text-center">Your product has been added to your cart</h3>
                      <p className="py-4">Would you like to continue shopping or go to the shopping cart?</p>
                      <div className="modal-action">
                        <label htmlFor="my-modal-4" className="btn">Continue Shipping</label>
                        <Link to='/cart'><label htmlFor="my-modal-4" className="btn">Go to cart</label></Link>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="btn-group flex justify-center items-center my-5">
        <button className="btn btn-secondary" onClick={() => handlePage('-')}>«</button>
        <button className="btn">Page {page + 1}</button>
        <button className="btn btn-secondary" onClick={() => handlePage('+')}>»</button>
      </div>
    </>
  )
}

export default Cards;

/*

*/