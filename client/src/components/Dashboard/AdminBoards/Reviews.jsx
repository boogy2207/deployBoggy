import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../store/slices/reviews/reviewsActions';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Reviews = () => {

    const reviewDB = useSelector(state => state.reviews.reviews)

    useEffect(() => {
        dispatch(getReviews())
      }, [])

    const dispatch = useDispatch();

console.log(reviewDB)

    return (
        <>
        {
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                        <th>USER NAME</th>
                            <th>ID</th>
                        <th>COMMENT</th>
                        <th>RATING</th>
                            <th>BAN REVIEWS</th>
                        </tr>
                    </thead>
                    {
                        reviewDB && reviewDB.map(e => (

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
                                                <div className="font-bold">{e.user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {e.book.title}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>{`${e.description}`}</td>
                                    <td>{`${e.rating}`}</td>

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
                            <th>ID</th>
                        <th>COMMENT</th>
                        <th>RATING</th>
                            <th>BAN REVIEWS</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        }

    </>
    );
};

export default Reviews;