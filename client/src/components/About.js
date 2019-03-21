import React from "react";
import "../components/About.css";
import { Link } from "react-router-dom";
import AdminContactForm from "./AdminContactForm";

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="aboutHomeDiv col-md-6">
                    <h4 className="aboutHomeHeader">A FRONT YARD MARKET REVOLUTION</h4>
                    <img className="aboutImg" src="/images/rhubarb.jpg" alt="kids holding rhubarb" />
                    <p className="aboutHome">Green Street is dedicated to solving the complex crisis of food deserts around the world by thinking small. If every city block had a collection of backyard gardeners growing fresh fruits, vegetables, honey and eggs, access to fresh food would be everywhere. Green Street provides the network and space to establish connections between gardeners and the neighbors that surround them. Front yard markets provide a community with fresh food, economic opportunity and a strong social structure. Front yard markets provide a safe space for neighbors to interact and share ideas and for families to see where their food comes from. We believe in these values. If you do too, please <Link to="/">SEARCH</Link> for a Green Street market in your neighborhood or <Link to="/register">JOIN</Link> Green Street and start a revolution today.</p>
                </div>
                <div className="col-md-6">
                    <AdminContactForm />
                </div>
            </div>
        </div>




    )
}

export default About;