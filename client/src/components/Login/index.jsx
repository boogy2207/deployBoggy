import { Box, Typography, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';
import useInputChange from '../../hooks/useInputChange';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/auth/requestsUser';
// import LogoutIcon from '@mui/icons-material/Logout';

const initialStateValues = {
  email: '',
  password: '',
}

function Login() {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange } = useInputChange(initialStateValues);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <Box
        position={'relative'}
        overflow='hidden'
        width={350}
        height={400}
        padding={3}
        borderRadius={'.9rem'}
        sx={{
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-40%',
            left: '-40%',
            width: 350,
            height: 400,
            background: 'linear-gradient(0deg, transparent, #2158AE, #2158AE)',
            transformOrigin: 'bottom right',
            animation: 'animate 6s linear infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-40%',
            left: '-40%',
            width: 350,
            height: 400,
            background: 'linear-gradient(0deg, transparent, #2158AE, #2158AE)',
            transformOrigin: 'bottom right',
            animation: 'animate 6s linear infinite',
            animationDelay: '-3s'
          }

        }}
      >

        <form onSubmit={onSubmit} >
          <Box sx={{
            position: 'absolute',
            backgroundColor: 'background.default',
            inset: '.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            borderRadius: '.9rem',
          }} >
            <Typography color='text.primary' variant='h3' padding={3} textAlign='center'>Iniciar Sesion</Typography>

            <TextField
              label='Email '
              required
              margin='normal'
              type={'email'}
              variant='outlined'
              placeholder='Email'
              name='email'
              value={values.email}
              onChange={handleChange} />
            <TextField

              label='Contraseña'
              required
              margin='normal'
              type={'password'}
              variant='outlined'
              placeholder='Contraseña'
              name='password'
              value={values.password}
              onChange={handleChange} />

            <Button sx={{ marginTop: 3, borderRadius: 4, minWidth: '10rem' }} variant='contained' color='warning' onClick={onSubmit} endIcon={<LoginIcon />} >Login</Button>
            <Button sx={{ marginTop: 3, borderRadius: 4, minWidth: '10rem' }} onClick={() => { navigate('/register') }} endIcon={<HowToRegIcon />} >Registrate</Button>
          </Box>
        </form>
      </Box>
    </div >
  );
};

export default Login;