import React from "react";
import "./style.css";

function MembersList(props) {
    return(
        <div className="membersDiv">
        <h2 className="member">{props.organizer}</h2>
        {/* <h2 className="member">{props.members}</h2> */}
        </div>
    )
}

export default MembersList;