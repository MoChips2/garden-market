import React, { Component } from "react";

class JoinMessage extends Component {
    state = {
        message: "",
        email: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.message && this.state.email) {
            console.log(this.state.message)
            console.log(this.state.email)

        }
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className="form-row joinMessage">
                    <div className="form-group">
                        <label>Send a private message to {this.props.organizer} with your name, where you live, what you grow and why you'd like to join {this.props.marketName}.</label>
                        <textarea className="form-control" name="message" rows="3" value={this.state.message} onChange={this.handleInputChange}></textarea>
                        <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        )
    }

}

export default JoinMessage;