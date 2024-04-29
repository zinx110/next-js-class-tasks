"use client";
import React from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";
import SignInForm from "./components/SignInForm";

const page = () => {
    const handleClick = () => {};
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-4">
            <Heading name="Sign In" />
            <SignInForm />
        </div>
    );
};

export default page;
