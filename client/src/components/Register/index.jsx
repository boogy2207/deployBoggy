import { Box, Typography, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link, useNavigate } from 'react-router-dom';
import useInputChange from '../../hooks/useInputChange';
import { useDispatch } from 'react-redux';
import { register } from '../../store/slices/auth/requestsUser';
import Swal from 'sweetalert2';
// import LogoutIcon from '@mui/icons-material/Logout';

const initialStateValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

function Register() {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { values, handleChange } = useInputChange(initialStateValues);

    const onSubmit = (e) => {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
            });
            return;
        }
        dispatch(register(values));
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Fill out your data</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onChange={handleChange} value={values.name} name="name" type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleChange} value={values.email} name="email" type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handleChange} value={values.password} name="password" type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input onChange={handleChange} value={values.confirmPassword} name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">You have an account? Login Now!</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;