import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './AuthContext';

const DetailUser = () => {
    const { users, fetchUser } = useContext(UserContext);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // For demonstration purposes, let's assume you want to display details of the first user
        const userId = 1;
        fetchUser(userId)
            .then(data => setUserDetails(data))
            .catch(error => console.log(error));
    }, [fetchUser]);

    if (!userDetails) {
        return <p>Loading user details...</p>;
    }

    return (
        <>
            <div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
                <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow">
                    <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="" />
                    <div className="text-center mt-2 text-3xl font-medium">{userDetails.name}</div>
                    <div className="text-center mt-2 font-light text-sm">@{userDetails.username}</div>
                    <div className="text-center font-normal text-lg">{userDetails.address.city}</div>
                    <div className="px-6 text-center mt-2 font-light text-sm">
                        <p>
                            Front end Developer, avid reader. Love to take a long walk, swim
                        </p>
                    </div>
                    <hr className="mt-8" />
                    <div className="flex p-4">
                        <div className="w-1/2 text-center">
                            <span className="font-bold">1.8 k</span> Followers
                        </div>
                        <div className="w-0 border border-gray-300"></div>
                        <div className="w-1/2 text-center">
                            <span className="font-bold">2.0 k</span> Following
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailUser;
