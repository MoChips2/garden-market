import React from "react";

function PrivateMessages(props) {
    let joinMessages = props.joinMessages || [];

    return (


        <div className="card gardenCard">
            <div className="card-header gardenCardHeader">
                <h2 className="gardenHeader">PRIVATE MESSAGES</h2>
            </div>
            <div className="card-body gardenCardBody">
                <h5 className="card-title gardenCardTitle">This is where people will reach you to request to become a member.</h5>
                <hr />
                {joinMessages.map(message => (
                    <div>
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