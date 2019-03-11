import React from "react";
import "./style.css";

function MessageBoard(props) {
    return (
        <div className="publicDiv">
            <div className="card publicCard">
                <div className="card-header publicCardHeader">
                    <h5 className="publicHeader">PUBLIC MESSAGES</h5>
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post a note."></textarea>
                            <div className="btnDiv">
                                <button type="submit" className="btn btn-primary publicBtn">POST</button>
                            </div>

                        </div>
                    </form>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item public-list">My family and I had a great time at your market. We'll see you next week!<br /><p className="postName">George &nbsp; 6-19-2019</p></li>
                    <li className="list-group-item public-list">The apples are incredible! Thanks for a lovely time.<br /><p className="postName">Judy &nbsp; 6-19-2019</p></li>
                    <li className="list-group-item public-list">Hey, are you gonna have any blueberries this weekend?<br /><p className="postName">Pax &nbsp; 6-14-2019</p></li>
                </ul>

            </div>
        </div>

    )
}

export default MessageBoard;