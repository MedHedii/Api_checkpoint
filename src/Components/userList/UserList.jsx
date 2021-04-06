import axios from "axios";
import React, { useEffect, useState } from "react";
import UserProfile from "../userProfile/UserProfile";

import "./UseerList.css";

function UserList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="listt">
            {list.map((element, i) => (
                <UserProfile element={element} key={i} />
            ))}
        </div>
    );
}

export default UserList;
