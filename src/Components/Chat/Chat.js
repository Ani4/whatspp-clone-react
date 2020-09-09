import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, Mic } from "@material-ui/icons";
import "./chat.css";
import Messages from "./Messages";
import InsertEmotiocIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import db from "../../firebase";

export default function Chat() {
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [input, setInput] = useState("");
    const [seeds, setSeeds] = useState();

    useEffect(() => {
        db.collection("room")
            .doc(roomId)
            .onSnapshot((snapShot) => {
                setRoomName(snapShot.data().name, setSeeds(roomName));
            });
    }, [roomId]);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <Avatar
                        src={`https://avatars.dicebear.com/api/male/${seeds}.svg`}
                    />
                    <div className="chat__headerInfo">
                        <h3>{roomName}</h3>
                        <p>Last seen at .......</p>
                    </div>
                </div>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <Messages
                    message="helloo"
                    author="aniket kumar sharma"
                    timestamp="3:52 PM"
                    receiver
                />
                <Messages
                    message="helloo"
                    author="aniket kumar sharma"
                    timestamp="3:52 PM"
                />
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmotiocIcon />
                </IconButton>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(input);
                        setInput("");
                    }}
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chat_messageWrite"
                        placeholder="Type your message here..."
                    />
                    <button type="submit" hidden={true}>
                        ha
                    </button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    );
}
