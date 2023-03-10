import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import About from './components/About';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Payment = lazy(() => import('./components/Payment'));
const Home = lazy(() => import('./components/Home'));
const Form = lazy(() => import('./components/Form'));
const Details = lazy(() => import('./components/Detail'));
const Cart = lazy(() => import('./components/Cart'));
const NavBar = lazy(() => import('./components/NavBar'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const Profile = lazy(() => import('./components/Profile'));
const MiniNavBar = lazy(() => import('./components/MiniNavBar'));
const Denied = lazy(() => import('./components/Denied'));
const Footer = lazy(() => import("./components/Footer"));

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
        <Route element={<ProtectedRoute isAllowed={!!user} redirectTo='/denied' />} >
          <Route path='/profile' element={<Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>} />
          <Route path='/checkout' element={<Suspense fallback={<div>Loading...</div>}><Payment /></Suspense>} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!user && user.isAdmin} redirectTo='/denied' />} >
          <Route path='/upload-book' element={<Suspense fallback={<div>Loading...</div>}><Form /></Suspense>} />
          <Route path='/dashboard' element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
        </Route>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path='/book/:id' element={<Suspense fallback={<div>Loading...</div>}><Details /></Suspense>} />
        <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route path='/register' element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>} />
        <Route path='/denied' element={<Suspense fallback={<div>Loading...</div>}><Denied /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
      </Routes>
      <Suspense fallback={<div>Loading...</div>}><Footer /></Suspense>

    </>
  );
};


export default App;
