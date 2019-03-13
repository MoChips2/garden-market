import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";

class JoinBtn extends React.Component {
  state = {
    id: this.props.id
  }


  render() {
    return (
      <div className="joinBtnDiv">
        <a href={"/joinmarket/" + this.props.id} id = {this.state.id}>JOIN MARKET</a>
      </div>
    )
  }
}

export default JoinBtn;