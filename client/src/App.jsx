import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./components/Home'));
const Form = lazy(() => import('./components/Form'));
const Details = lazy(() => import('./components/Detail'));
const Cart = lazy(() => import('./components/Cart'));
const NavBar = lazy(() => import('./components/NavBar'));
const Login = lazy(() => import('./components/Login'));
const Logout = lazy(() => import('./components/Logout'));
const Profile = lazy(() => import('./components/Profile'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}><NavBar /></Suspense>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path='/book/:id' element={<Suspense fallback={<div>Loading...</div>}><Details /></Suspense>} />
        <Route path='/upload-book' element={<Suspense fallback={<div>Loading...</div>}><Form /></Suspense>} />
        <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route path='/logout' element={<Suspense fallback={<div>Loading...</div>}><Logout /></Suspense>} />
        <Route path='/profile' element={<Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>} />
      </Routes>
    </>
  );
};


export default App;
