import React, { useContext } from "react";
import { UserContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
    const { onAdd } = useContext(UserContext);
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(
            e.target.name.value,
            e.target.email.value,
            e.target.username.value,
            e.target.phone.value
        );
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.username.value = "";
        e.target.phone.value = "";
        // e.target.city.value = "";
        navigate('/');
        toast.success("User added successfully!"); // Display success toast
    };
    return (
        <>
            <ToastContainer />
            <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleOnSubmit}>
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
                                        placeholder="Enter Full Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                        placeholder="Enter Username"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                placeholder="Enter Your Email"

                                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                        type="number"
                                        name="phone"
                                        id="date"
                                        placeholder="Enter Your Number"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="city"
                                        class="mb-3 block text-base font-medium text-white"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="time"
                                        placeholder="Enter Your City"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onSubmit={handleOnSubmit} class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddUser