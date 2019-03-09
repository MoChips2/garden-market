import React from "react";

function MessageBoard() {
    return (
        <div>
            <div className="form marketForm">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label>Write on the chalkboard (but be cool):</label>
                        <textarea className="form-control" name="about" rows="3"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </div>
            <div className="chalkboard">
                <p className="messages">My family and I had a great time at your market. We'll see you next week! -George</p>
            </div>
        </div>
    )
}

export default MessageBoard;