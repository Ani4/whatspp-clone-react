import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, Mic } from "@material-ui/icons";
import "./chat.css";
import Messages from "./Messages";
import InsertEmotiocIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../Redux/StateProvider";

export default function Chat() {
    const { roomId } = useParams();
    const [{ user }, dispatch] = useStateValue();
    const [roomName, setRoomName] = useState("");
    const [input, setInput] = useState("");
    const [seeds, setSeeds] = useState();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection("room")
            .doc(roomId)
            .onSnapshot((snapShot) => {
                setRoomName(snapShot.data().name, setSeeds(roomName));
            });
        db.collection("room")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) => doc.data()),
                    console.log
                );
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
                        <p>
                            last seen at{" "}
                            {new Date(
                                messages[
                                    messages.length - 1
                                ]?.timestamp?.toDate()
                            ).toLocaleDateString() +
                                ", " +
                                new Date(
                                    messages[
                                        messages.length - 1
                                    ]?.timestamp?.toDate()
                                ).toLocaleTimeString()}
                        </p>
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
                {messages.map((message) => (
                    <Messages
                        message={message.message}
                        author={message.author}
                        timestamp={message.timestamp}
                        receiver={
                            message.author === user.displayName ? true : false
                        }
                    />
                ))}
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmotiocIcon />
                </IconButton>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        db.collection("room")
                            .doc(roomId)
                            .collection("messages")
                            .add({
                                message: input,
                                author: user.displayName,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            });
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
