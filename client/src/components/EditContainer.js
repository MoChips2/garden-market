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
                    <td><button type="submit" className="btn btn-primary">Submit</button></td>

                </tr>

                <tr>
                    <td>Organizer</td>
                    <td>{props.organizer}</td>
                    <td><input type="text" className="form-control" name="organizer" placeholder="Example Market" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{props.address}</td>
                    <td><input type="text" className="form-control" name="address" placeholder="Example Market" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{props.city}</td>
                    <td><input type="text" className="form-control" name="city" placeholder="Example Market" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>{props.state}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Zip</td>
                    <td>{props.zip}</td>
                    <td><input type="text" className="form-control" name="zip" placeholder="zip" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td>About</td>
                    <td>{props.about}</td>
                    <td><input type="text" className="form-control" name="about" placeholder="Example Market" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Image Link</td>
                    <td>{props.img}</td>
                    <td><input type="text" className="form-control" name="img" placeholder="Example Market" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Products</td>
                    <td>{props.products}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Starting Month</td>
                    <td>{props.startMonth}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Ending Month</td>
                    <td>{props.endMonth}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Days of the Week</td>
                    <td>{props.days}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Time</td>
                    <td>{props.startTime}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>End Time</td>
                    <td>{props.endTime}</td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </table>




    )
}

export default EditContainer;

