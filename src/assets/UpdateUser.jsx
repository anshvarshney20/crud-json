import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from './AuthContext';

const UpdateUser = () => {
    const { id } = useParams();
    const { users, onEdit } = useContext(UserContext);
    const user = users.find(user => user.id === parseInt(id));
    const navigate = useNavigate()
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [username, setUserName] = useState(user.username);
    const [phone, setPhone] = useState(user.phone)
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = { name, email, username, phone };

        try {
            await onEdit(user.id, updatedUser);
            navigate('/')
            console.log('User updated successfully');
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    };
    return (
        <div>

            <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleUpdateSubmit}>
                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="name"
                                        class="mb-3 block text-base font-medium text-white"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="fName"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Full Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-gray-500 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="username"
                                        class="mb-3 block text-base font-medium text-white"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="lName"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter Username"
                                        class="w-full rounded-md  border border-[#e0e0e0] bg-gray-500 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <label
                                for="guest"
                                class="mb-3 block text-base font-medium text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="guest"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email"

                                class="w-full appearance-none rounded-md bg-gray-500 border border-[#e0e0e0] bg-gray-500 py-3 px-6 text-white font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="phone"
                                        class="mb-3 block text-base font-medium text-white"
                                    >
                                        Contact
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                      
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                       
                                        class="w-full rounded-md border border-[#e0e0e0] bg-gray-500 py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div>
                        <div>
                            <button
                                type='submit' class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;


