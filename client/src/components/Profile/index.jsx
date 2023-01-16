import { useSelector } from "react-redux";


const Profile = () => {

    const user = useSelector(state => state.user.user);
    console.log(user);
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
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;