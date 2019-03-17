import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class MessageBoard extends Component {

    state = {
        messages: [],
        sender: "",
        publicMessages: {}

    }

    // componentDidMount() {
    //     this.loadPublicMessages();
    // }

    // loadPublicMessages = () => {

    //     API.getPublicMessages(this.props.id)

    //         .then(res =>
    //             this.setState({
    //                 publicMessages: res.data,
    //             }))

    //         .catch(err => console.log(err));
    // };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log({ messages: this.state.messages })
        var id = event.target.id;
        API.pushMessage(id, { messages: this.state.messages, sender: this.state.sender })    
    }


    render() {
        return (
            <div className="publicDiv">
                <div className="card publicCard">
                    <div className="card-header publicCardHeader">
                        <h5 className="publicHeader">PUBLIC MESSAGES</h5>
                        <form>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post a note." name="messages" onChange={this.handleInputChange}></textarea>
                                <input type="text" className="form-control" name="sender" onChange={this.handleInputChange} />
                                <div className="btnDiv">
                                    <button type="submit" className="btn btn-primary publicBtn" id={this.props.id} onClick={this.handleFormSubmit}>POST</button>
                                </div>

                            </div>
                        </form>
                    </div>


                    <ul className="list-group list-group-flush">
                       
                       <li className="list-group-item public-list">Dummy Data</li>
                        {/* {this.state.publicMessages.map(message => (
                            <li className="list-group-item public-list">{message.message}</li>
                            ))} */}
                            <li className="list-group-item public-list">{this.state.messages}</li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default MessageBoard;

