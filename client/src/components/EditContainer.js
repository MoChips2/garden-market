import React, { Component } from "react";
import API from "../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Geocode from "react-geocode";
import { Link, withRouter } from "react-router-dom";
require("dotenv").config();
var keys = require('../components/Map/key');
const mongoose = require("mongoose");
//Geocode.setApiKey(keys.googleAPI);
Geocode.enableDebug();

class EditContainer extends Component {
    state = {
        marketName: "",
        organizer: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        about: "",
        img: "",
        products: [],
        startMonth: "",
        endMonth: "",
        days: [],
        startTime: "",
        endTime: "",
        members: "",
        location_lat: "",
        location_lng: "",
        fields: {},
           errors: {}

    };
 componentDidUpdate(perpProps, prepState) {
        console.log(this.state.address);
        if (this.state.address !== prepState.address) {
            Geocode.setApiKey("AIzaSyDz7pF2K0HzwVHeQdXk3e-ALsHBnDClEbM");
            Geocode.fromAddress(this.state.address).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    console.log("lat  :" + lat, lng);
                    console.log("Status for Message" + response.status);
                    this.setState({
                        location_lat: lat,
                        location_lng: lng
                    });
                },
                error => {
                    console.error("Error:" + error);
                }
            );
        }
    };
handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(Object.keys(fields).indexOf("marketName")!=-1){
            if(!fields["marketName"] ){
                formIsValid = false;
                errors["marketName"] = "Cannot be empty";
             }
        }
      

        //address
        if(Object.keys(fields).indexOf("address")!=-1){

        if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "Cannot be empty";
         }
        }
         //city
         if(Object.keys(fields).indexOf("city")!=-1){
        if(!fields["city"]){
            formIsValid = false;
            errors["city"] = "Cannot be empty";
         }
        }
 
        if(Object.keys(fields).indexOf("city")!=-1){
         if(typeof fields["city"] !== "undefined"){
            if(!fields["city"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["city"] = "Only letters";
            }        
         }
        }

        //state
        if(Object.keys(fields).indexOf("state")!=-1){
        if(!fields["state"]){
            formIsValid = false;
            errors["state"] = "Cannot be empty";
         }
        }
                 //Zip
                 if(Object.keys(fields).indexOf("zip")!=-1){
        if(!fields["zip"]){
            formIsValid = false;
            errors["zip"] = "Cannot be empty";
         }
        }

        if(Object.keys(fields).indexOf("zip")!=-1){
         if(typeof fields["zip"] !== "undefined"){
            if(!fields["zip"].match(/^[0-9]+$/)){
               formIsValid = false;
               errors["zip"] = "Only numbers";
            }        
         }
        }


       this.setState({errors: errors});
       return formIsValid;
}

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onChange(e) {
        const products = this.state.products
        let index
        if (e.target.checked) {
            products.push(e.target.value)
        } else {
            index = products.indexOf(+e.target.value)
            products.splice(index, 1)
        }
        this.setState({ products: products })
    }

    onChangeDays(e) {
        const days = this.state.days
        let index
        if (e.target.checked) {
            days.push(e.target.value)
        } else {
            index = days.indexOf(+e.target.value)
            days.splice(index, 1)
        }
        this.setState({ days: days })
    }


       handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    

    handleFormSubmit = event => {
        event.preventDefault();
       if(this.handleValidation()){
            console.log("this.state.organizer:" + this.state.organizer);
            const userName = this.props.auth.user.name;
            var email = this.props.auth.user.email;
            console.log("this.state.organizer after:" + userName);
            console.log("this.email after:");
            console.log(email);
    
            // if (this.state.marketName && this.state.email) {
                var myid = mongoose.Types.ObjectId();
                console.log(myid.toString())
                API.updateMarket(this.props.id, { 
                    marketName: this.state.fields.marketName,
                    organizer: this.props.auth.user.name,
                    email: email,
                    products: this.state.fields.products,
                    address: this.state.fields.address,
                    state: this.state.fields.state,
                    city: this.state.fields.city,
                    zip: this.state.fields.zip,
                    about: this.state.fields.about,
                    img: this.state.fields.img,
                    startMonth: this.state.fields.startMonth,
                    endMonth: this.state.fields.endMonth,
                    days: this.state.fields.days,
                    startTime: this.state.fields.startTime,
                    endTime: this.state.fields.endTime,
                    members: this.state.fields.members,
                    location_lat: this.state.fields.location_lat,
                    location_lng: this.state.fields.location_lng
                
                
                })


                // API.updateMarket({
                //     _id: myid,
                //     marketName: this.state.fields.marketName,
                //     organizer: this.props.auth.user.name,
                //     email: email,
                //     products: this.state.fields.products,
                //     address: this.state.fields.address,
                //     state: this.state.fields.state,
                //     city: this.state.fields.city,
                //     zip: this.state.fields.zip,
                //     about: this.state.fields.about,
                //     img: this.state.fields.img,
                //     startMonth: this.state.fields.startMonth,
                //     endMonth: this.state.fields.endMonth,
                //     days: this.state.fields.days,
                //     startTime: this.state.fields.startTime,
                //     endTime: this.state.fields.endTime,
                //     members: this.state.fields.members,
                // location_lat: this.state.fields.location_lat,
                // location_lng: this.state.fields.location_lng
                // })
                .then(this.props.history.push("/markets/" + this.props.id)
                )
                console.log("worked!")
                console.log({
                    startMonth: this.state.startMonth,
                    endMonth: this.state.endMonth,
                    days: this.state.days,
                    startTime: this.state.startTime,
                    endTime: this.state.endTime
                });
            // }
         }else{
            console.log("Form has errors.");
         }

        
    }   
     render() {
        const userName = this.props.auth.user.name;
        const email = this.props.auth.user.email;
        console.log(this.props)
        //this.state.fields["marketName"] = this.props.marketName;

        return (
            <div>
                <div className="container new-market-container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card gardenCard">
                                <div className="card-header gardenCardHeader">
                                    <h2 className="gardenHeader">EDIT MARKET</h2>
                                </div>
                                <div className="card-body gardenCardBody">
                                    <form>
                                    <fieldset>
                                        <div className="form-row">
                                        
                                            <div className="form-group col-md-12">
                                                <label>Market Name</label>
                                                <input type="text" className="form-control" name="marketName" placeholder="Example Market" value={this.state.fields["marketName"]}  defaultValue={this.props.marketName} onChange={this.handleChange.bind(this, "marketName")} />
                                                <span style={{color: "red"}}>{this.state.errors["marketName"]}</span>
                                            </div>
                                            
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label>Organizer Name</label>
                                                <input type="text" className="form-control" name="organizer" placeholder="Johnny Appleseed" value={userName} onChange={this.handleInputChange} disabled/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={this.handleInputChange} disabled />
                                                <small name="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label>Address</label>
                                                <input type="text" className="form-control" name="address" placeholder="1234 Main St" value={this.state.fields["address"]}  defaultValue={this.props.address} onChange={this.handleChange.bind(this, "address")} />
                                                <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-8">
                                                <label>City</label>
                                                <input type="text" className="form-control" name="city" value={this.state.fields["city"]} defaultValue={this.props.city}  onChange={this.handleChange.bind(this, "city")} />
                                                <span style={{color: "red"}}>{this.state.errors["city"]}</span>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label>State</label>
                                                <select name="state" className="form-control" value={this.state.fields["state"]}  defaultValue={this.props.state}  onChange={this.handleChange.bind(this, "state")}>
                                                    <option>Choose...</option>
                                                    <option value="AL">AL</option>
                                                    <option value="AK">AK</option>
                                                    <option value="AZ">AZ</option>
                                                    <option value="AR">AR</option>
                                                    <option value="CA">CA</option>
                                                    <option value="CO">CO</option>
                                                    <option value="CT">CT</option>
                                                    <option value="DE">DE</option>
                                                    <option value="FL">FL</option>
                                                    <option value="GA">GA</option>
                                                    <option value="HI">HI</option>
                                                    <option value="ID">ID</option>
                                                    <option value="IL">IL</option>
                                                    <option value="IN">IN</option>
                                                    <option value="IA">IA</option>
                                                    <option value="KS">KS</option>
                                                    <option value="KY">KY</option>
                                                    <option value="LA">LA</option>
                                                    <option value="ME">ME</option>
                                                    <option value="MD">MD</option>
                                                    <option value="MA">MA</option>
                                                    <option value="MI">MI</option>
                                                    <option value="MN">MN</option>
                                                    <option value="MS">MS</option>
                                                    <option value="MO">MO</option>
                                                    <option value="MT">MT</option>
                                                    <option value="NE">NE</option>
                                                    <option value="NV">NV</option>
                                                    <option value="NH">NH</option>
                                                    <option value="NJ">NJ</option>
                                                    <option value="NM">NM</option>
                                                    <option value="NY">NY</option>
                                                    <option value="NC">NC</option>
                                                    <option value="ND">ND</option>
                                                    <option value="OH">OH</option>
                                                    <option value="OK">OK</option>
                                                    <option value="OR">OR</option>
                                                    <option value="PA">PA</option>
                                                    <option value="RI">RI</option>
                                                    <option value="SC">SC</option>
                                                    <option value="SD">SD</option>
                                                    <option value="TN">TN</option>
                                                    <option value="TX">TX</option>
                                                    <option value="UT">UT</option>
                                                    <option value="VT">VT</option>
                                                    <option value="VA">VA</option>
                                                    <option value="WA">WA</option>
                                                    <option value="WV">WV</option>
                                                    <option value="WI">WI</option>
                                                    <option value="WY">WY</option>
                                                </select>
                                                <span style={{color: "red"}}>{this.state.errors["state"]}</span>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label>Zip</label>
                                                <input type="text" className="form-control" name="zip" value={this.state.fields["zip"]} defaultValue={this.props.zip}  onChange={this.handleChange.bind(this, "zip")} />
                                                <span style={{color: "red"}}>{this.state.errors["zip"]}</span>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label>Members</label>
                                                <input type="text" className="form-control" name="members" value={this.state.members}  defaultValue={this.props.members} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label>Tell us about your market:</label>
                                                <textarea className="form-control" name="about" rows="3" value={this.state.about} defaultValue={this.props.about}  onChange={this.handleInputChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label>Link to an image of your garden or market:</label>
                                                <input className="form-control" name="img" value={this.state.img} defaultValue={this.props.img}  onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label className="my-1 mr-2">Starting Month</label>
                                                <select name="startMonth" className="custom-select my-1 mr-sm-2" id="startMonth" value={this.state.startMonth} defaultValue={this.props.startMonth}  onChange={this.handleInputChange}>
                                                    <option>Choose...</option>
                                                    <option value="January">January</option>
                                                    <option value="February">February</option>
                                                    <option value="March">March</option>
                                                    <option value="April">April</option>
                                                    <option value="May">May</option>
                                                    <option value="June">June</option>
                                                    <option value="July">July</option>
                                                    <option value="August">August</option>
                                                    <option value="September">September</option>
                                                    <option value="October">October</option>
                                                    <option value="November">November</option>
                                                    <option value="December">December</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label className="my-1 mr-2">Ending Month</label>
                                                <select name="endMonth" className="custom-select my-1 mr-sm-2" id="endMonth" value={this.state.endMonth}  defaultValue={this.props.endMonth}  onChange={this.handleInputChange}>
                                                    <option>Choose...</option>
                                                    <option value="January">January</option>
                                                    <option value="February">February</option>
                                                    <option value="March">March</option>
                                                    <option value="April">April</option>
                                                    <option value="May">May</option>
                                                    <option value="June">June</option>
                                                    <option value="July">July</option>
                                                    <option value="August">August</option>
                                                    <option value="September">September</option>
                                                    <option value="October">October</option>
                                                    <option value="November">November</option>
                                                    <option value="December">December</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* <div className="form-group">
                                            <label>Choose all that apply:</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="days" value="Sunday " onChange={this.onChangeDays.bind(this)} />
                                                <label className="form-check-label">Sunday</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="days" value="Monday " onChange={this.onChangeDays.bind(this)} />
                                                <label className="form-check-label">Monday</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="days" value="Tuesday " onChange={this.onChangeDays.bind(this)} />
                                                <label className="form-check-label">Tuesday</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="days" value="Wednesday " onChange={this.onChangeDays.bind(this)} />
                                                <label className="form-check-label">Wednesday</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="days" value="Thursday " onChange={this.onChangeDays.bind(this)} />
                                                <label className="form-check-label">Thursday</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="days" value="Friday " onChange={this.onChangeDays.bind(this)} />
                                                <label className="form-check-label">Friday</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="days" value="Saturday " onChange={this.onChangeDays.bind(this)} />
                                                <label className="form-check-label">Saturday</label>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            {/* <div className="col">
                                                <label className="my-1 mr-2">Starting Time</label>
                                                <select name="startTime" className="custom-select my-1 mr-sm-2" id="startTime" value={this.state.startTime} onChange={this.handleInputChange}>
                                                    <option>Choose...</option>
                                                    <option value="5:00am">5:00am</option>
                                                    <option value="6:00am">6:00am</option>
                                                    <option value="7:00am">7:00am</option>
                                                    <option value="8:00am">8:00am</option>
                                                    <option value="9:00am">9:00am</option>
                                                    <option value="10:00am">10:00am</option>
                                                    <option value="11:00am">11:00am</option>
                                                    <option value="12:00 noon">12:00 noon</option>
                                                    <option value="1:00pm">1:00pm</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label className="my-1 mr-2">Ending Time</label>
                                                <select name="endTime" className="custom-select my-1 mr-sm-2" id="endTime" value={this.state.endTime} onChange={this.handleInputChange}>
                                                    <option>Choose...</option>
                                                    <option value="8:00am">8:00am</option>
                                                    <option value="9:00am">9:00am</option>
                                                    <option value="10:00am">10:00am</option>
                                                    <option value="11:00am">11:00am</option>
                                                    <option value="12:00 noon">12:00 noon</option>
                                                    <option value="1:00pm">1:00pm</option>
                                                    <option value="2:00pm">2:00pm</option>
                                                    <option value="3:00pm">3:00pm</option>
                                                    <option value="4:00pm">4:00pm</option>
                                                    <option value="5:00pm">5:00pm</option>
                                                    <option value="6:00pm">6:00pm</option>
                                                    <option value="7:00pm">7:00pm</option>
                                                </select>
                                            </div> */}
                                        </div>
                                        <div className="form-group">
                                            <label>Choose all that apply:</label>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="VEGETABLES " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Veggies</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="FRUIT " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Fruits</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="EGGS " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Eggs</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="MEAT " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Meat</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="DAIRY " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Dairy</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="HONEY " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Honey</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="CRAFTS " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Crafts</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="BREAD " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Bread</label>
                                                    </div>

                                                </div>
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="MUSIC " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Music</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="products" value="OTHER " onChange={this.onChange.bind(this)} />
                                                        <label className="form-check-label">Other</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

EditContainer.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps
)(withRouter(EditContainer));

// export default NewMarket;
