import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import db from "../../firebase";
import { Link } from "react-router-dom";

export default function SidebarChat({ addNewChat, name, id }) {
    const [randomNumber, setRandomNumber] = useState();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setRandomNumber(Math.random() * 5624);
    }, []);

    const createRoom = () => {
        const roomName = prompt("pls enter room name ?");
        if (roomName) {
            db.collection("room").add({
                name: roomName,
            });
        }
    };
    useEffect(() => {
        if (id)
            db.collection("room")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
    }, []);

    return !addNewChat ? (
        <Link style={{ textDecoration: "none" }} to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar
                    src={`https://avatars.dicebear.com/api/male/${randomNumber}.svg`}
                />
                <div className="sidebarChat__info">
                    <h3>{name}</h3>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="sidebarChat" onClick={createRoom}>
            <h1>Add New Room</h1>
        </div>
    );
}
