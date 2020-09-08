import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";

export default function SidebarChat({ addNewChat }) {
    const [randomNumber, setRandomNumber] = useState();
    useEffect(() => {
        setRandomNumber(Math.random() * 5624);
    }, []);

    const createRoom = () => {
        const roomName = prompt("pls enter room name ?");
        if (roomName) {
            console.log(roomName);
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar
                src={`https://avatars.dicebear.com/api/male/${randomNumber}.svg`}
            />
            <div className="sidebarChat__info">
                <h3>name nam nam</h3>
                <p>Last seen at .......</p>
            </div>
        </div>
    ) : (
        <div className="sidebarChat" onClick={createRoom}>
            <h1>Add New Room</h1>
        </div>
    );
}
