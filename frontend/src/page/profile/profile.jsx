import profile from "../../assets/11123.jpeg";
import { useState, useEffect } from 'react';
// import { login } from "../../api/login";


const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    // Simulate checking if the user is logged in
    useEffect(() => {
        // Replace this with actual logic to check if the user is logged in
        const isLoggedIn = localStorage.getItem('token') !== null;
        setIsLoggedIn(isLoggedIn);

        if (isLoggedIn) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            console.log(storedUser);
            if (storedUser) {
                setUserData(storedUser);
            }
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Implement form submission logic here
    };
    return (
        <main className="flex overflow-hidden bg-white">
            <div className="flex-1 hidden lg:block ">
                <img src={profile} className="w-full h-screen object-cover" alt="Profile" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Your profile
                        </h3>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                placeholder="ASURA"
                                value={isLoggedIn ? userData.name : ""}
                                readOnly={isLoggedIn}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="support@example.com"
                                value={isLoggedIn ? userData.email : ""}
                                readOnly={isLoggedIn}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="999-999-999"
                                value={isLoggedIn ? userData.phoneNumber : ""}
                                readOnly={isLoggedIn}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Address
                            </label>
                            <textarea
                                readOnly={isLoggedIn}
                                value={isLoggedIn ? userData.address : ""}
                                placeholder="Beach, Kompot, Cambodia"
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            >
                            </textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            {isLoggedIn ? "Update Profile" : "Create Profile"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Profile;