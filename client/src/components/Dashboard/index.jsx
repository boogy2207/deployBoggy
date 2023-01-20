import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/slices/auth/requestsUser';
import { getBooks } from '../../store/slices/books/booksActions';
import Books from './AdminBoards/Books';
import Reviews from './AdminBoards/Reviews';
import Users from './AdminBoards/Users'

const Dashboard = () => {
    const [value,setValue] = useState({
        name : 'users'
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getBooks())
    },[])

    return (
        <>
  <div className="divider-vertical"></div>
<div className="flex w-full place-content-center">   
  <div className="divider-horizontal"></div>
  <button className="btn btn-success" onClick={e => setValue({name:'users'})}>USERS</button>
  <div className="divider-horizontal"></div>
  <button className="btn btn-success" onClick={e => setValue({name:'books'})}>BOOKS</button>
  <div className="divider-horizontal"></div>
  <button className="btn btn-success" onClick={e => setValue({name:'reviews'})}>REVIEWS</button>
  <div className="divider-horizontal"></div>
</div>
<div className="divider-vertical"></div>

      
        
        {value.name === 'users' && <Users/>}
        {value.name === 'books' && <Books/>}
        {value.name === 'reviews' && <Reviews/>}
        
      
        </>
    );
};

export default Dashboard;