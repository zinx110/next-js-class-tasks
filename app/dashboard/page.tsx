import Link from "next/link";
import React from "react";
import SearchUser from "./components/SearchUser";

const Dashboard = () => {
    return (
        <div className="h-full flex flex-col gap-3">
            <h1>Dashboard</h1>
            <div className="flex-1 flex gap-2 flex-col justify-center items-center px-10">
                <h1 className="text-lg font-bold ">Search Users</h1>
                <hr className="bg-white h-[1px] w-full" />
                <SearchUser />
            </div>
            <div className="flex-1 flex gap-2 flex-col">
                <Link href="/dashboard/users/1">page 1</Link>

                <Link href="/dashboard/users/2">page 2</Link>

                <Link href="/dashboard/users/3">page 3</Link>
                <Link href="/dashboard/users/4">page 5</Link>
                <Link href={"/dashboard/users/5"}>page 5</Link>
            </div>
        </div>
    );
};

export default Dashboard;
