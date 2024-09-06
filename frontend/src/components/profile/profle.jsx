import profile from "../../assets/11123.jpeg";
import { Link } from "react-router-dom";


const Profile = () => {
    const isLoggedIn = () => {
        return !!localStorage.getItem('token'); // Returns true if token exists
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={profile} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-30 p-2 shadow">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/tracing">Tracing</Link></li>
                {isLoggedIn() ? (
                    <>
                        <li onClick={() => logout()}><a href="#">Logout</a></li>
                    </>
                ) : (
                    <>

                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>
        </div>
    )
}
const logout = async () => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // Optionally, redirect the user to the login page after logout
        window.location.href = '/login'; // Adjust the path as necessary
        window.location.reload();
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
};

export default Profile;