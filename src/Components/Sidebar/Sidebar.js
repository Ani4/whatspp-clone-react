import React, { Component } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar />
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
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
            </div>
        );
    }
}
