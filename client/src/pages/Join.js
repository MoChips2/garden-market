import React from "react";
import JoinMessage from "../components/JoinMessage";


function Join(props) {

    return (
        <div>
            <JoinMessage 
            id={props.id}
            />
        </div>

    )
}

export default Join;