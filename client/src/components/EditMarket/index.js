import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import "./style.css";

function EditMarket(props) {

    return(
        <div className="joinBtnDiv">
        <form action={"/mymarket/" + props.id}>
          {/* <Link to={"/mymarket/" + props.id}><h6 className="myMarket">edit market</h6></Link> */}
          <button  type="submit" className="btn btn-primary joinBtn">Edit MARKET</button>
          </form>
        </div>


    )
}

export default EditMarket;


//const { user } = this.props.auth;