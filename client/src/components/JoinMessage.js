import React, { Component } from "react";
import API from "../utils/API";

class JoinMessage extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.message && this.state.email && this.state.name) {
            let randomId = Math.floor(Math.random() * 1000000000);
            var id = this.props.id;
            API.sendJoin(id, { name: this.state.name, email: this.state.email, message: this.state.message, keyID: randomId })

        }
    }

    render() {
        return (


            <div className="card gardenCard">
                <div className="card-header gardenCardHeader">
                    <h2 className="gardenHeader">JOIN MARKET</h2>
                </div>
                <div className="card-body gardenCardBody">
                    <h5 className="card-title gardenCardTitle">Please tell us a bit about yourself.</h5>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-row joinMessage">
                            <div className="form-group">
                                <label>Send a private message to the organizer with your name, where you live, what you grow and why you would like to join this market. The organizer will get back to you as soon as possible.</label>
                                <textarea className="form-control" name="message" rows="3" value={this.state.message} onChange={this.handleInputChange}></textarea>
                                <div className="gardenBtnDiv">
                                    <button type="submit" className="btn btn-primary gardenBtn" onClick={this.handleFormSubmit}>JOIN</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


                <br />
                <br />
                <br />
            </div>













        )
    }

}

export default JoinMessage;