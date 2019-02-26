import React from "react";

function LoginForm() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="form">
                        <div className="form-group">
                            <label for="inputAddress">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Password</label>
                            <input type="text" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div >
                </div>
            </div>
        </div>

    )
}

export default LoginForm;