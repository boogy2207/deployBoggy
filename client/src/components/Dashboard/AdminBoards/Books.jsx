import React from 'react';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Books = () => {

    const allBooks = useSelector(state => state.books.allBookys)

    return (
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
                    allBooks && allBooks.map(e => (

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
                                    <button className="btn btn-ghost btn-xs"><DeleteForeverIcon /></button>
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
    );
};

export default Books;