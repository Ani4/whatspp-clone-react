import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import db from "../../firebase";

import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "../../Redux/StateProvider";
export default function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection("room").onSnapshot((snapShot) =>
            setRooms(
                snapShot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
        return () => unsubscribe();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user.photoURL} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="start a new chat"
                    />
                </div>
            </div>

            <div className="sidebar__chat">
                <SidebarChat addNewChat />
                {rooms.map((room) => (
                    <SidebarChat
                        key={room.id}
                        name={room.data.name}
                        id={room.id}
                    />
                ))}
            </div>
        </div>
    );
}
