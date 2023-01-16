import { Box, Typography, TextField, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';
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
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <Box
                position={'relative'}
                overflow='hidden'
                width={350}
                height={600}
                padding={3}
                borderRadius={'.9rem'}
                sx={{
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-40%',
                        left: '-40%',
                        width: 350,
                        height: 600,
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
                        height: 600,
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
                        <Typography color='text.primary' variant='h3' padding={3} textAlign='center'>Sing Up</Typography>
                        <TextField
                            label='Name '
                            required
                            margin='normal'
                            type='name'
                            variant='outlined'
                            placeholder='Name'
                            name='name'
                            value={values.name}
                            onChange={handleChange} />
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
                            label='Password'
                            required
                            margin='normal'
                            type='password'
                            variant='outlined'
                            placeholder='Password'
                            name='password'
                            value={values.password}
                            onChange={handleChange} />
                        <TextField
                            label='Confirm Password'
                            required
                            margin='normal'
                            type='password'
                            variant='outlined'
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            value={values.confirmPassword}
                            onChange={handleChange} />

                        <Button sx={{ marginTop: 3, borderRadius: 4, minWidth: '10rem' }} variant='contained' color='warning' onClick={onSubmit} endIcon={<HowToRegIcon />}>Register</Button>
                        <Button sx={{ marginTop: 3, borderRadius: 4, minWidth: '10rem' }} onClick={() => { navigate('/login') }} endIcon={<LoginIcon />}>LogIn</Button>
                    </Box>
                </form>
            </Box>
        </div >
    );
};

export default Register;