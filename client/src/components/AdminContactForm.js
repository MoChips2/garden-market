import React, { Component } from "react";
import API from "../utils/API";

class AdminContactForm extends Component {
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
        console.log("submit form!")
        if (this.state.message && this.state.email && this.state.name) {
            let randomId = Math.floor(Math.random() * 1000000000);

            API.contactAdmin({ name: this.state.name, email: this.state.email, message: this.state.message, keyID: randomId })

        }
    }

    render() {
        return (


            <div className="card gardenCard">
                <div className="card-header gardenCardHeader">
                    <h2 className="gardenHeader">CONTACT US</h2>
                </div>
                <div className="card-body gardenCardBody">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" name="message" rows="3" value={this.state.message} onChange={this.handleInputChange}></textarea>
                            <div className="gardenBtnDiv">
                                <button type="submit" className="btn btn-dark gardenBtn" onClick={this.handleFormSubmit}>SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
                <br />
            </div>
        )
    }
}

export default AdminContactForm;