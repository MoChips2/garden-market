import React from "react";
// import "./MarketContainer.css";

function EditContainer(props) {



    // separate components for each
    // month/days(array)/hours, address, products (array), 

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
                    <td>{props.marketName}</td>
                    <td><input type="text" className="form-control" name="marketName" placeholder="Example Market" /></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>

                </tr>

                <tr>
                    <td>Organizer</td>
                    <td>{props.organizer}</td>
                    <td><input type="text" className="form-control" name="organizer" placeholder="Example Market" /></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{props.address}</td>
                    <td><input type="text" className="form-control" name="address" placeholder="Example Market" /></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{props.city}</td>
                    <td><input type="text" className="form-control" name="city" placeholder="Example Market" /></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>{props.state}</td>
                    <td></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>Zip</td>
                    <td>{props.zip}</td>
                    <td><input type="text" className="form-control" name="zip" placeholder="zip" /></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>About</td>
                    <td>{props.about}</td>
                    <td><textarea className="form-control" name="about" rows="3"></textarea></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>Image Link</td>
                    <td>{props.img}</td>
                    <td><input type="text" className="form-control" name="img" placeholder="Example Market" /></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>Products</td>
                    <td>{props.products}</td>
                    <td></td>
                    <td><button type="submit" className="btn btn-dark">Submit</button></td>
                </tr>
                <tr>
                    <td>Starting Month</td>
                    <td>{props.startMonth}</td>
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
                    <td>{props.endMonth}</td>
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
                    <td>{props.days}</td>
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
                    <td>{props.startTime}</td>
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
                    <td>{props.endTime}</td>
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

export default EditContainer;

