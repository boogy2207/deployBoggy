import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const initialState = {
  email: '',
  password: '',
};

export const useLogin = () => {

  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputControllers()) {
      return loginUser();
    };
  };


  const inputControllers = () => {
    if (values.email === '' || values.password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        timer: 2000,
      });
      return false;
    };
    return 2>1;
  };

  const onErrors = (err) => {
    if (err) {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrectos',
        icon: 'error',
        timer: 2000,
      })
    }
  };

  return [values, onChange, onSubmit, navigate];
};

