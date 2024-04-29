import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Form from "../../components/Form";

const SignInForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const route = useRouter();
    const handleClick = () => {
        setError("");
        if (!username || !password) {
            setError("Please fill in all the fields.");
        } else {
            login();
        }
    };
    const login = async () => {
        setLoading(true);
        try {
            const reqBody = {
                password: password,
                username: username,
            };
            const response = await axios.post(
                "http://localhost:3001/seller/login",
                reqBody
            );
            const data = response.data;
            console.log("data", data);
            if (data.error) {
                const errMessage = data.message[0];
                setError(errMessage);
                setLoading(false);
                return;
            }

            console.log("data", data);
            const access_token = data.access_token;
            console.log(`Access token: ${access_token}`);
            localStorage.setItem("access_token", access_token);

            setLoading(false);
            alert("successfully registered");
            route.push("/dashboard");
        } catch (error: any) {
            console.log("error occured :", error);
            setError("Invalid Credentials");
            setLoading(false);
        }
    };
    return (
        <Form>
            <p className="flex">
                <span className="flex-1">username :</span>
                <input
                    className="text-black flex-1"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1">password :</span>
                <input
                    type="password"
                    className="text-black flex-1"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </p>
            <button
                type="button"
                disabled={loading}
                className="p-2 bg-green-400 hover:bg-green-500 active:bg-green-600 disabled:bg-green-700"
                onClick={handleClick}
            >
                Login
            </button>
            <p className="text-red-500 w-full text-current">{error}</p>
        </Form>
    );
};

export default SignInForm;
