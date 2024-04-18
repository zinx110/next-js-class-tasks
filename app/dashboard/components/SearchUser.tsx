"use client";
import axios from "axios";
import { getuid } from "process";
import React, { useState } from "react";
import ShowUserData from "./ShowUserData";

const SearchUser = () => {
    const [user, setUser] = useState(null);
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const getUser = async () => {
        try {
            console.log("id :", id);
            const response = await axios.get(
                "http://localhost:3001/seller/" + id
            );
            if (response.status === 200) {
                const data = response.data;
                if (data && data.id) {
                    setUser(data);
                    console.log(data);
                } else {
                    setError("No user with that user id found");
                }
            } else {
                setError("there was an error. response status was not 200");
            }
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const handleClick = () => {
        setError("");
        setUser(null);
        if (!id) {
            setError("Please enter an id to search by");
            return;
        }
        getUser();
    };

    return (
        <>
            <div className="w-full px-20  justify-center flex items-center gap-5 ">
                <input
                    className="w-full h-full bg-gray-100 text-black px-2"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="user id"
                />
                <button
                    className="bg-green-700 px-3 py-1 hover:bg-green-500"
                    onClick={handleClick}
                >
                    Search
                </button>
            </div>
            <div className="w-full ">
                <ShowUserData data={user} />
                <p className="text-red-600">{error}</p>
            </div>
        </>
    );
};

export default SearchUser;
