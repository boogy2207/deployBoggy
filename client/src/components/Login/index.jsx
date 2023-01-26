import { Link } from 'react-router-dom';
import useInputChange from '../../hooks/useInputChange';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/auth/requestsUser';
import GoogleBtn from '../GoogleBtn/GoogleBtn';

const initialStateValues = {
  email: '',
  password: '',
}

function Login() {


  const dispatch = useDispatch();
  const { values, handleChange } = useInputChange(initialStateValues);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <GoogleBtn />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">You don't have an account? Register Now!</Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;