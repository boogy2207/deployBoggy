import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postUser } from "../../store/slices/auth";
import BtnTheme from "../BtnTheme";
import Login from "../Login";
import Logout from "../Logout";
import SearchBar from "../SearchBar/SearchBar.jsx"


function NavBar() {

  const count = useSelector(state => state.cart.count);
  const subTotal = useSelector(state => state.cart.subTotal);
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  } else {

    return (
      <div className="mt navbar bg-[#004D43]">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl text-[#dfa100]">El Paraíso del Libro</Link>
        </div>
        <div className="flex justify-center gap-3" >
          <SearchBar />
          <BtnTheme />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-hover dropdown-end">
            <Link to='/cart' className="">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">{count}</span>
                </div>
              </label>
            </Link>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body text-center">
                <span className="font-bold text-lg">{count} Items</span>
                <span className="text-info">Subtotal: ${subTotal}</span>
              </div>
            </div>
          </div>
          <div>
            {
              isAuthenticated ? (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link className="justify-between" to={'/upload-book'}>
                        Cargar Libro
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Logout /></li>
                  </ul>
                </div>
              ) : <>Login</>
            }
          </div>
        </div>
      </div >
    )
  }
};
export default NavBar;