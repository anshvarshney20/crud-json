import { useEffect, useState, useContext } from "react";
import { UserContext } from "./AuthContext";
import User from "./User";

function Landing() {
    const { users } = useContext(UserContext)
    return (
        <div class="flex flex-wrap bg-gray-100 ">
            {users.map((user) => (
                <User user={user} />
            ))
            }
        </div >
    );
}

export default Landing;
