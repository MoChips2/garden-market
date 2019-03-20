import React from "react";

class AdminMessages extends Component {

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
        API.getAdminMessages(this.props.match.params.id)
            .then(res =>
                this.setState({
                    messages: res.data,
                }))

            .catch(err => console.log(err));
    };

    render() {
        return (


            <div className="card gardenCard">
                <div className="card-header gardenCardHeader">
                    <h2 className="gardenHeader">ADMIN MESSAGES</h2>
                </div>
                <div className="card-body gardenCardBody">
                    <hr />
                    {joinMessages.map(message => (
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
        )
    }
}
export default AdminMessages;