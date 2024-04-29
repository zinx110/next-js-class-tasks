"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("/auth/signIn");
    };
    return (
        <button className="bg-red-400 px-2 py-1" onClick={handleClick}>
            LogoutButton
        </button>
    );
};

export default LogoutButton;
