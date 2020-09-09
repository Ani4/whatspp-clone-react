import React from "react";

export default function Messages({ message, author, timestamp, receiver }) {
    return (
        <p className={`chat__message ${receiver && "chat__messageReceiver"}`}>
            <span className="chat__messageName">{author}</span>
            {message}
            <span className="chat__messageTime">{timestamp}</span>
        </p>
    );
}
