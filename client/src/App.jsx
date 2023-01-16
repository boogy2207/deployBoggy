import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
const Home = lazy(() => import('./components/Home'));
const Form = lazy(() => import('./components/Form'));
const Details = lazy(() => import('./components/Detail'));
const Cart = lazy(() => import('./components/Cart'));
const NavBar = lazy(() => import('./components/NavBar'));
const Login = lazy(() => import('./components/Login'));
const Logout = lazy(() => import('./components/Logout'));
const Profile = lazy(() => import('./components/Profile'));
const MiniNavBar = lazy(() => import('./components/MiniNavBar'));

function App() {

  const user = useSelector(state => state.user.user);
  const location = useLocation();

  return (
    <>
      {
        (location.pathname === '/login' || location.pathname === '/register') ? <></> :
          <>
            <Suspense fallback={<div>Loading...</div>}><NavBar /></Suspense>
            <Suspense fallback={<div>Loading...</div>}><MiniNavBar /></Suspense>
          </>
      }
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path='/book/:id' element={<Suspense fallback={<div>Loading...</div>}><Details /></Suspense>} />
        <Route element={<ProtectedRoute isAllowed={!!user} />} >
          <Route path='/profile' element={<Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!user && user.isAdmin} redirectTo='/home' />} >
          <Route path='/upload-book' element={<Suspense fallback={<div>Loading...</div>}><Form /></Suspense>} />
        </Route>
        <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route path='/register' element={<Suspense fallback={<div>Loading...</div>}><Logout /></Suspense>} />
      </Routes>
    </>
  );
};


export default App;
