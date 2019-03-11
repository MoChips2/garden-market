import React from "react";
import "./style.css";

function MembersList(props) {
    return(
        <div className="card market-card">
            <div className="card-header market-card-header">
                <h5 className="membersHeader">MEMBERS</h5>
            </div>
            <div className="card-body market-card-body">
                <h5 className="members">{props.organizer}</h5>
                <h5 className="members">{props.members}</h5>
            </div>
        </div>
    )
}

export default MembersList;