import React from "react";
import "./style.css";

function MessageBoard(props) {
    return (
        <div className="publicDiv">
            <div className="card publicCard">
                <div className="card-header publicCardHeader">
                    <h5 className="publicHeader">PUBLIC MESSAGES</h5>
                    <form>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post a note."></textarea>
                            <div className="btnDiv">
                                <button type="submit" class="btn btn-primary publicBtn">POST</button>
                            </div>

                        </div>
                    </form>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">My family and I had a great time at your market. We'll see you next week!<br /><p className="postName">George &nbsp; 6-19-2019</p></li>
                    <li class="list-group-item">The apples are incredible! Thanks for a lovely time.<br /><p className="postName">Judy &nbsp; 6-19-2019</p></li>
                    <li class="list-group-item">Hey, are you gonna have any blueberries this weekend?<br /><p className="postName">Pax &nbsp; 6-14-2019</p></li>
                </ul>

            </div>
        </div>

    )
}

export default MessageBoard;