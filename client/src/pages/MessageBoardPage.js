import React from "react";
import API from "../utils/API";
import MessageBoard from "../components/MessageBoard";


class MessageBoardPage extends React.Component {

    state = {
        messages: []
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        var id = "5c90156bfceda00000eda55f"
        API.getOneMarket(id)
            .then(res =>

                this.setState({
                    messages: res.data.messages
                }))

            .catch(err => console.log(err));
    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <MessageBoard
                            messages={this.props.messages}

                        />
                        {/* <div id="publicDiv">
                            <div className="card publicCard">
                                <div className="card-header publicCardHeader">
                                    <h5 className="publicHeader">PUBLIC MESSAGES</h5>
                                    <form id="messageForm">
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
                                    {this.state.messages.map(message => (
                                        <li key={message.keyID} className="list-group-item public-list">{message.message}<br /><span className="sender">{message.sender}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageBoardPage;