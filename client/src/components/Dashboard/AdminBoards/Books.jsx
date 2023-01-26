import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreIcon from '@mui/icons-material/Restore';
import { deleteBook } from '../../../store/slices/books/booksActions';
import Swal from 'sweetalert2';

const Books = () => {

    const allBooks = useSelector(state => state.books.allBookys)

    const booksBanned = allBooks && allBooks.filter(e => e.destroyTime !== null)
    const booksAvalaibles = allBooks && allBooks.filter(e => e.destroyTime === null)

    const dispatch = useDispatch()

    const handleDelete = (id) => {

        Swal.fire({
            icon: 'success',
            title: 'Book deleted successfully...',
            text: 'Changes saved!',
        });

        dispatch(deleteBook(id));
    }

    return (
        <>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>NAME</th>
                        <th>ID</th>
                        <th>AUTHOR</th>
                        <th>DELETE BOOK</th>
                    </tr>
                </thead>
                {
                    booksAvalaibles && booksAvalaibles.map(e => (

                        <tbody>

                            <tr>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={e.imagelink} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{e.title.slice(0, 20)}...</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {e.id}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>{e.authors}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(e.id)}><DeleteForeverIcon /></button>
                                </th>
                            </tr>

                        </tbody>

                    ))

                }
                <tfoot>
                    <tr>

                        <th>NAME</th>
                        <th>ID</th>
                        <th>AUTHOR</th>
                        <th>DELETE BOOK</th>
                    </tr>
                </tfoot>

            </table>
        </div>

{
                    booksBanned &&
                    booksBanned.length > 0 &&
<>

<h1 className="text-5xl text-center ml-30 font-mono ">BANNED BOOKS</h1>

        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>NAME</th>
                        <th>ID</th>
                        <th>AUTHOR</th>
                        <th>DELETE BOOK</th>
                    </tr>
                </thead>
                {
                    booksBanned && booksBanned.map(e => (

                        <tbody>

                            <tr>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={e.imagelink} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{e.title.slice(0, 20)}...</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {e.id}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>{e.authors}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(e.id)}><RestoreIcon /></button>
                                </th>
                            </tr>

                        </tbody>

                    ))

                }
                <tfoot>
                    <tr>

                        <th>NAME</th>
                        <th>ID</th>
                        <th>AUTHOR</th>
                        <th>DELETE BOOK</th>
                    </tr>
                </tfoot>

            </table>
        </div>
        </>
        }
        </>
    );
};

export default Books;