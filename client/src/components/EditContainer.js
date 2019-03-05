import React, { Component } from "react";
import API from "../utils/API";
// import "./MarketContainer.css";

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


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        var myid = mongoose.Types.ObjectId();
        console.log(myid.toString())

        API.updateMarket({
            
        })
    }



    updateField = () => {

    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope="col">Value</th>
                        <th scope="col">Current</th>
                        <th scope="col">Change To</th>
                        <th scope="col">Submit</th>
                    </tr>
                </thead>
                <tbody className="table table-bordered col-md-12">
                    <tr>
                        <td>Market Name</td>
                        <td>{this.props.marketName}</td>
                        <td><input type="text" className="form-control" name="marketName" placeholder="Example Market" /></td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>

                    </tr>

                    <tr>
                        <td>Organizer</td>
                        <td>{this.props.organizer}</td>
                        <td><input type="text" className="form-control" name="organizer" placeholder="Example Market" /></td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{this.props.address}</td>
                        <td><input type="text" className="form-control" name="address" placeholder="Example Market" /></td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{this.props.city}</td>
                        <td><input type="text" className="form-control" name="city" placeholder="Example Market" /></td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{this.props.state}</td>
                        <td>
                            <select name="state" className="form-control">
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
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Zip</td>
                        <td>{this.props.zip}</td>
                        <td><input type="text" className="form-control" name="zip" placeholder="zip" /></td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>About</td>
                        <td>{this.props.about}</td>
                        <td><textarea className="form-control" name="about" rows="3"></textarea></td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Image Link</td>
                        <td>{this.props.img}</td>
                        <td><input type="text" className="form-control" name="img" placeholder="Example Market" /></td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Products</td>
                        <td>{this.props.products}</td>
                        <td>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="VEGETABLES" />
                                <label className="form-check-label">Veggies</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="FRUIT" />
                                <label className="form-check-label">Fruits</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="EGGS" />
                                <label className="form-check-label">Eggs</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="MEAT" />
                                <label className="form-check-label">Meat</label>
                            </div>


                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="DAIRY" />
                                <label className="form-check-label">Dairy</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="HONEY" />
                                <label className="form-check-label">Honey</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="CRAFTS" />
                                <label className="form-check-label">Crafts</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="BREAD" />
                                <label className="form-check-label">Bread</label>
                            </div>



                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="MUSIC" />
                                <label className="form-check-label">Music</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="products" value="OTHER" />
                                <label className="form-check-label">Other</label>
                            </div>

                        </td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Starting Month</td>
                        <td>{this.props.startMonth}</td>
                        <td>
                            <select name="startMonth" className="custom-select my-1 mr-sm-2" id="startMonth">
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
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Ending Month</td>
                        <td>{this.props.endMonth}</td>
                        <td>
                            <select name="endMonth" className="custom-select my-1 mr-sm-2" id="endMonth">
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
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Days of the Week</td>
                        <td>{this.props.days}</td>
                        <td>
                            <div className="form-group">
                                <label>Choose all that apply:</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="days" value="Sunday" />
                                    <label className="form-check-label">Sunday</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="days" value="Monday" />
                                    <label className="form-check-label">Monday</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="days" value="Tuesday" />
                                    <label className="form-check-label">Tuesday</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="days" value="Wednesday" />
                                    <label className="form-check-label">Wednesday</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="days" value="Thursday" />
                                    <label className="form-check-label">Thursday</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="days" value="Friday" />
                                    <label className="form-check-label">Friday</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="days" value="Saturday" />
                                    <label className="form-check-label">Saturday</label>
                                </div>
                            </div>
                        </td>
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td>{this.props.startTime}</td>
                        <td>
                            <select name="startTime" className="custom-select my-1 mr-sm-2" id="startTime">
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
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>
                    <tr>
                        <td>End Time</td>
                        <td>{this.props.endTime}</td>
                        <td>
                            <select name="endTime" className="custom-select my-1 mr-sm-2" id="endTime">
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
                        <td><button type="submit" className="btn btn-dark">Submit</button></td>
                    </tr>

                </tbody>
            </table>




        )
    }
}

export default EditContainer;

