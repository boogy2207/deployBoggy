import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteUsers } from '../../../store/slices/auth/requestsUser';

const Users = () => {

    const users = useSelector(state => state.user.users)

    const dispatch = useDispatch();

    const handleDelete = (id) => {

            Swal.fire({
                icon: 'success',
                title: 'User deleted successfully...',
                text: 'Changes saved!',
            });

        dispatch(deleteUsers(id));
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>USER NAME</th>
                        <th>EMAIL</th>
                        <th>ACTIVE</th>
                        <th>BAN USER</th>
                    </tr>
                </thead>
                {
                    users && users.map(e => (

                    <tbody>

                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://placeimg.com/400/400/people" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{e.name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            {e.email}    
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>{`${e.isUser}`}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(e.id)} ><DeleteForeverIcon /></button>
                            </th>
                        </tr>

                    </tbody>

                    ))

                }
                <tfoot>
                    <tr>

                        <th>USER NAME</th>
                        <th>EMAIL</th>
                        <th>ACTIVE</th>
                        <th>BAN USER</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default Users;