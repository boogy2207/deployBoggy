import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreIcon from '@mui/icons-material/Restore';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteUsers, restoreUsers } from '../../../store/slices/auth/requestsUser';

const Users = () => {

    const users = useSelector(state => state.user.users)

    const usersBanned = users && users.filter(e => e.destroyTime !== null)
    const usersAvalaibles = users && users.filter(e => e.destroyTime === null)

    const dispatch = useDispatch();

    const handleDelete = (id) => {

        Swal.fire({
            icon: 'success',
            title: 'User deleted successfully...',
            text: 'Changes saved!',
        });

        dispatch(deleteUsers(id));
      window.location.replace("/dashboard");

    }

    const handleRestore = (id) => {

        Swal.fire({
            icon: 'success',
            title: 'User restore successfully...',
            text: 'Changes saved!',
        });

        dispatch(restoreUsers(id));
      window.location.replace("/dashboard");

    }

    return (
        <>
            {
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>

                                <th>USER NAME</th>
                                <th>EMAIL</th>
                                <th>ID</th>
                                <th>BAN USER</th>
                            </tr>
                        </thead>
                        {
                            usersAvalaibles && usersAvalaibles.map(e => (

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
                                                    <div className="text-sm opacity-50">{`${e.isAdmin ? 'ADMIN' : 'USER'}`}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {e.email}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>{`${e.id}`}</td>
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
                                <th>ID</th>
                                <th>BAN USER</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            }

            {
                usersBanned &&
                usersBanned.length > 0 &&
                <>


                    <h1 className="text-5xl text-center ml-30 font-mono ">BANNED USERS</h1>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>

                                    <th>USER NAME</th>
                                    <th>EMAIL</th>
                                    <th>ID</th>
                                    <th>BAN USER</th>
                                </tr>
                            </thead>
                            {
                                usersBanned && usersBanned.map(e => (


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
                                                        <div className="text-sm opacity-50">{`${e.isAdmin ? 'ADMIN' : 'USER'}`}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {e.email}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <td>{`${e.id}`}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs" onClick={() => handleRestore(e.id)} ><RestoreIcon /></button>
                                            </th>
                                        </tr>

                                    </tbody>

                                ))

                            }
                            <tfoot>
                                <tr>

                                    <th>USER NAME</th>
                                    <th>EMAIL</th>
                                    <th>ID</th>
                                    <th>BAN USER</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </>
            }
        </>
    );
};

export default Users;