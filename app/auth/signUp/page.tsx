"use client";
import React from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";

const page = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-4">
            <Heading name="Sign Up" />
            <Form>
                <p>
                    email :
                    <input className="text-black" name="email" />
                </p>
                <p>
                    username :
                    <input className="text-black" name="username" />
                </p>
                <p>
                    password :
                    <input className="text-black" name="password" />
                </p>
                <button
                    className="p-2 bg-green-400"
                    onClick={() => alert("Signed up")}
                >
                    Sign Up
                </button>
            </Form>
        </div>
    );
};

export default page;
