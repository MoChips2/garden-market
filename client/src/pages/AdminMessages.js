import React from "react";
import API from "../utils/API";

class AdminMessages extends React.Component {

    // onLogoutClick = e => {
    //     e.preventDefault();
    //     this.props.logoutUser();
    // };

    state = {
        messages: []
    };

    componentDidMount() {
        this.loadAdminMessages();
    }

    // The code below works to update immediately but it doesn't stop. Infinite Loop.
    // componentDidUpdate() {
    //     this.loadOneMarket();
    // }

    loadAdminMessages = () => {
        console.log("step 1")
        API.getAdminMessages()
            .then(res =>
                this.setState({
                    messages: res.data.messages
                }))

            .catch(err => console.log(err));
    };

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card gardenCard">
                            <div className="card-header gardenCardHeader">
                                <h2 className="gardenHeader">ADMIN MESSAGES</h2>
                            </div>
                            <div className="card-body gardenCardBody">
                                <hr />
                                {this.state.messages.map(message => (
                                    <div key={message.keyID}>
                                        <h4 className="privateSender">Name: {message.name}</h4>
                                        <h4 className="privateSender">Email: {message.email}</h4>
                                        <p className="privateMessage">{message.message}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default AdminMessages;