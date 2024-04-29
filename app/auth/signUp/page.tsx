import React, { useState } from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";
import SignUpForm from "./components/SignUpForm";

const page = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-4">
            <Heading name="Sign Up" />
            <SignUpForm />
        </div>
    );
};

export default page;
