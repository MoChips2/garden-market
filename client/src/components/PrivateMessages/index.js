import React from "react";
import "../../components/JoinMessage.css";

function PrivateMessages(props) {
    let joinMessages = props.joinMessages || [];

    return (


        <div className="card messageCard">
            <div className="card-header gardenCardHeader">
                <h2 className="messageHeader">PRIVATE MESSAGES</h2>
            </div>
            <div className="card-body gardenCardBody">
                <hr />
                {joinMessages.map(message => (
                    <div key={message.keyID}>
                        <h4 className="privateSender">Name: {message.name}</h4>
                        <h4 className="privateSender">Email: {message.email}</h4>
                        <p className="privateMessage">{message.message}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default PrivateMessages;