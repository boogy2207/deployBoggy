import { useSelector } from "react-redux";


const Profile = () => {

    const user = useSelector(state => state.user.user);

    return (
        <div>
            <img src={user.picture} alt={`Failed to Load picture image: ${user.name}`} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <h3>User Metadata</h3>
        </div>
    );
};

export default Profile;