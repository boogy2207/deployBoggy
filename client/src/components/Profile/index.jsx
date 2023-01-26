import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getAllUsers, putUser } from "../../store/slices/auth/requestsUser";


const Profile = () => {

    const user = useSelector(state => state.user.user);
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
console.log(user)
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    const [form, setForm] = useState({
        name: '',
        password: '',
        email: ''
    })

    const [errors, setErrors] = useState({
        name: ''
    })

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }, users))
    }
    
    function handleButton(e){
        e.preventDefault()
        setEdit(edit ? false : true)
    }

    function submit(e){
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'User updated successfully...',
            text: 'Changes saved!',
        });
        dispatch(putUser(user.id, form))
      window.location.replace("/profile");
    }

    return (
        <div className="mt-20 mx-32 items-center justify-center">
            <div className="card card-side bg-base-100 shadow-xl flex items-center justify-center">
                <div className="avatar">
                    <div className="w-64 mask rounded-xl">
                        <img src="https://placeimg.com/400/400/people" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Type User: {user.isAdmin ? 'Admin' : 'User'}</p>
                    <p>{user.isBanned ? 'Banned' : 'Active'}</p>
                    {
                        edit === false &&
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={(e)=> handleButton(e)}>Edit Profile</button>
                    </div>
                    }
                </div>
             {
                edit &&
                <div className="card-body">
                    <br />
                    <p>Name: <input type="text" name='name' onChange={e => handleInput(e)} /></p>
                    {errors.name && <p>{errors.name}</p>}
                    <p>Email: <input type="text" name='email' onChange={e => handleInput(e)} /></p>
                    {errors.email && <p>{errors.email}</p>}
                    <p>Password: <input type="text" name='password' onChange={e => handleInput(e)} /></p>
                    {errors.password && <p>{errors.password}</p>}
                    <p>Confirm Password: <input type="text" name='confirmpassword' onChange={e => handleInput(e)} /></p>
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
                    <div className="card-actions justify-end">
                        {
                            Object.entries(errors).length ?
                        <button className="btn btn-primary" onClick={(e)=> handleButton(e)}>Cancel</button>
                        :
                        <button className="btn btn-primary" onClick={(e)=> submit(e)}>Save Change</button>
                        }
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export function validate(errors, users) {
    let error = {}

    const usuarios = users.map(e => e.name)
    const emails = users.map(e => e.email)

    const passwordv = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const emailv = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const namev = /^[\s\S]{3,20}$/

    if (!errors.password) error.password = 'Password is require'
    if (errors.password !== errors.confirmpassword) error.confirmpassword = 'The password does not match'
    if (!passwordv.test(errors.password)) error.password = "The password must contain between 8 and 15 characters, numbers and special characters"

    if (!errors.name.length) error.name = 'Name is require'
    if (usuarios.includes(errors.name)) error.name = 'Username already exists'
    if (!namev.test(errors.name)) error.name = 'Username between 3 and 20 alphanumeric characters'
    if (errors.name.includes('-') || errors.name.includes('_')) error.name = 'Username between 3 and 20 alphanumeric characters'

    if (!errors.email.length) error.email = 'E-mail is require'
    if (!emailv.test(errors.email)) error.email = 'E-mail is invalid'
    if (emails.includes(errors.email)) error.email = 'Email already exists'

    return error
}

export default Profile;