import React, { useContext } from 'react';
import { UserContext } from './AuthContext';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const User = ({ user, isLoading }) => {
    const { onDelete } = useContext(UserContext);

    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(user.id);
    };

    if (isLoading) {
        return (
            <>
                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <Skeleton height={150} />
                </div>
            </>
        );
    }

    return (
        <>

            <div className="mt-4 bg-gray-100 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                <div className="relative flex flex-col min-w-0 break-words bg-gray-900 rounded mb-3 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <Link to={`user/${user.id}`}>
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                        {user.name.length > 18 ? user.name.slice(0, 18) + '...' : user.name}
                                    </h5>
                                    <span className="font-semibold text-xl text-blueGray-700">
                                        {user.username.length > 13 ? user.username.slice(0, 13) + '...' : user.username}
                                    </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-5 h-5 shadow-lg rounded-full  bg-green-500">
                                        <Link to={`update/${user.id}`}>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" /> </svg>

                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-5 h-5 shadow-lg rounded-full  bg-red-500">
                                    <button onClick={(e) => handleDelete(e)}> {/* Call the handleDelete function */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="whitespace-nowrap"> {user.phone || <Skeleton />}</span>
                                <br />
                                <span className="whitespace-nowrap"> {user.email || <Skeleton />} </span>
                            </p>
                            </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default User;
