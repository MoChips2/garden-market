import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import MessageList from "../../components/MessageList";

class MessageBoard extends Component {

    state = {
        messages: [],
        sender: ""
    }

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        let randomId = Math.floor(Math.random()* 1000000000);
        event.preventDefault();
        var id = "5c90156bfceda00000eda55f";
        API.pushMessage(id, { messages: this.state.messages, sender: this.state.sender, keyID: randomId }) 
    }
    
    render() {
        return (
            <div id="publicDiv">
                <div className="card publicCard">
                    <div className="card-header publicCardHeader">
                        <h5 className="publicHeader">PUBLIC MESSAGES</h5>
                        <form id="messageForm">
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post a note." name="messages" onChange={this.handleInputChange}></textarea>
                                <input type="text" className="form-control" name="sender" placeholder="Name" onChange={this.handleInputChange} />
                                <div className="btnDiv">
                                    <button type="submit" className="btn btn-primary publicBtn" id={this.props.id} onClick={this.handleFormSubmit}>POST</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <MessageList
                        messages={this.props.messages}
                        id={this.props._id}
                    />
                </div>
            </div>
        )
    }
}

export default MessageBoard;

