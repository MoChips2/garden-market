import React from "react";

function MessageList(props) {
    let messages = props.messages || []


    return (
        <ul className="list-group list-group-flush">
            {messages.map(message => (
                <li className="list-group-item public-list">{message.message}<br /><span className="sender">{message.sender}</span></li>
            ))}
        </ul>


    )
}


export default MessageList;