import React from "react";

const ShowUserData = ({ data }: { data: any }) => {
    if (!data || !data.id) return null;
    return (
        <div className="flex flex-col gap-2">
            <span>id: {data.id}</span>
            <span>username: {data.username}</span>
            <span>joinDate: {data.joinDate}</span>
            <span>pfp link: {data.pfp || "Not available"}</span>
            {data.pfp ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    alt="pfp"
                    src={`http://localhost:3001/seller/getimage/${data.pfp}`}
                    className="max-w-[400px] max-h-[400px] object-contain"
                />
            ) : null}
        </div>
    );
};

export default ShowUserData;
