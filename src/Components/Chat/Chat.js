import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, Mic } from "@material-ui/icons";
import "./chat.css";
import InsertEmotiocIcon from "@material-ui/icons/InsertEmoticon";

export default function Chat() {
    const [seeds, setSeeds] = useState();
    useEffect(() => {
        setSeeds(Math.random() * 60000565);
    }, []);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <Avatar
                        src={`https://avatars.dicebear.com/api/male/${seeds}.svg`}
                    />
                    <div className="chat__headerInfo">
                        <h3>name nam nam</h3>
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
                <p className="chat__message chat__messageReceiver">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>
                <p className="chat__message ">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>{" "}
                <p className="chat__message chat__messageReceiver">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>
                <p className="chat__message ">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>{" "}
                <p className="chat__message chat__messageReceiver">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>
                <p className="chat__message ">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>{" "}
                <p className="chat__message chat__messageReceiver">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>
                <p className="chat__message ">
                    <span className="chat__messageName">Aniket</span>
                    heloo
                    <span className="chat__messageTime">3:50 pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmotiocIcon />
                <form>
                    <input
                        type="text"
                        className="chat_messageWrite"
                        placeholder="Type your message here..."
                    />
                </form>
                <Mic />
            </div>
        </div>
    );
}
