import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import { DonutLargeIcon, ChatIcon, MoreVertIcon } from "@material-ui/icons";

import "./Sidebar.css";
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__header"></div>
                <Avatar />
                <div className="sidebar__headerRight">
                    <DonutLargeIcon />
                    <ChatIcon />
                    <MoreVertIcon />
                </div>
                <div className="sidebar__search"></div>

                <div className="sidebar__chat"></div>
            </div>
        );
    }
}
