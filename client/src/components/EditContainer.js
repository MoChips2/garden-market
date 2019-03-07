import React, { Component } from "react";
import API from "../utils/API";
// import "./MarketContainer.css";
// const mongoose = require("mongoose");
import "../components/EditContainer.css";
class EditContainer extends Component {

    state = {
        marketName: "",
        organizer: "",
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
        members: []
    }
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // updateField = id => {
    //     API.getOneMarket(id)
    // }

    handleFormSubmit = event => {
        event.preventDefault();
        var name = event.target.name;
        var id = event.target.id;
        API.updateMarket(id, { [name]: this.state[name] })
        // .then(updateField(id))  
    }

    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <br />
                        <table className="table table-bordered col-md-12">
                            <thead>
                                <tr>
                                    <th scope="col" className="valueColumn">Value</th>
                                    <th scope="col" className="currentColumn">Current</th>
                                    <th scope="col" className="changeToColumn">Change To</th>
                                    <th scope="col" className="btnColumn">Submit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Market Name</td>
                                    <td className="current">{this.props.marketName}</td>
                                    <td><input type="text" className="form-control" name="marketName" value={this.state.marketName} onChange={this.handleInputChange} /></td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'marketName'}>Submit</button></td>

                                </tr>

                                <tr>
                                    <td>Organizer</td>
                                    <td className="current">{this.props.organizer}</td>
                                    <td><input type="text" className="form-control" name="organizer" value={this.state.organizer} onChange={this.handleInputChange} /></td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'organizer'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td className="current">{this.props.address}</td>
                                    <td><input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleInputChange} /></td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'address'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td className="current">{this.props.city}</td>
                                    <td><input type="text" className="form-control" name="city" value={this.state.city} onChange={this.handleInputChange} /></td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'city'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td className="current">{this.props.state}</td>
                                    <td>
                                        <select name="state" className="form-control" value={this.state.state} onChange={this.handleInputChange}>
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
                                    </td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'state'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Zip</td>
                                    <td className="current">{this.props.zip}</td>
                                    <td><input type="text" className="form-control" name="zip" placeholder="zip" onChange={this.handleInputChange} /></td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'zip'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>About</td>
                                    <td className="current">{this.props.about}</td>
                                    <td><textarea className="form-control" name="about" rows="10" onChange={this.handleInputChange}></textarea></td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'about'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Image Link</td>
                                    <td className="current">{this.props.img}</td>
                                    <td><input type="text" className="form-control" name="img" onChange={this.handleInputChange} /></td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'img'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Products</td>
                                    <td className="current">{this.props.products}</td>
                                    <td>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="VEGETABLES " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Veggies </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="FRUIT " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Fruits </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="EGGS " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Eggs </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="MEAT " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Meat </label>
                                        </div>


                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="DAIRY " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Dairy </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="HONEY " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Honey </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="CRAFTS " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Crafts </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="BREAD " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Bread </label>
                                        </div>



                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="MUSIC " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Music </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="products" value="OTHER " onChange={this.onChange.bind(this)} />
                                            <label className="form-check-label">Other </label>
                                        </div>

                                    </td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'products'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Starting Month</td>
                                    <td className="current">{this.props.startMonth}</td>
                                    <td>
                                        <select name="startMonth" className="custom-select my-1 mr-sm-2" value={this.state.startMonth} onChange={this.handleInputChange}>
                                            <option>Choose...</option>
                                            <option value="Jan">January</option>
                                            <option value="Feb">February</option>
                                            <option value="Mar">March</option>
                                            <option value="Apr">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="Aug">August</option>
                                            <option value="Sept">September</option>
                                            <option value="Oct">October</option>
                                            <option value="Nov">November</option>
                                            <option value="Dec">December</option>
                                        </select>
                                    </td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'startMonth'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Ending Month</td>
                                    <td className="current">{this.props.endMonth}</td>
                                    <td>
                                        <select name="endMonth" className="custom-select my-1 mr-sm-2" value={this.state.endMonth} onChange={this.handleInputChange}>
                                            <option>Choose...</option>
                                            <option value="Jan">January</option>
                                            <option value="Feb">February</option>
                                            <option value="Mar">March</option>
                                            <option value="Apr">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="Aug">August</option>
                                            <option value="Sept">September</option>
                                            <option value="Oct">October</option>
                                            <option value="Nov">November</option>
                                            <option value="Dec">December</option>
                                        </select>
                                    </td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'endMonth'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Days of the Week</td>
                                    <td className="current">{this.props.days}</td>
                                    <td>
                                        <div className="form-group">
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
                                        </div>
                                    </td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'days'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>Start Time</td>
                                    <td className="current">{this.props.startTime}</td>
                                    <td>
                                        <select name="startTime" className="custom-select my-1 mr-sm-2" value={this.state.startTime} onChange={this.handleInputChange}>
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
                                    </td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'startTime'}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td>End Time</td>
                                    <td className="current">{this.props.endTime}</td>
                                    <td>
                                        <select name="endTime" className="custom-select my-1 mr-sm-2" value={this.state.endTime} onChange={this.handleInputChange}>
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
                                    </td>
                                    <td><button type="submit" className="btn btn-dark" id={this.props.id} onClick={this.handleFormSubmit} name={'endTime'}>Submit</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>





        )
    }
}

export default EditContainer;

