import React, { Component } from "react";
import API from "../utils/API";

class NewMarket extends Component {
    state = {
        marketName: "",
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        about: "",
        roles: []

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onChange(e) {
        const roles = this.state.roles
        let index
        if (e.target.checked) {
            roles.push(e.target.value)
        } else {
            index = roles.indexOf(+e.target.value)
            roles.splice(index, 1)
        }
        this.setState({ roles: roles })
    }


    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.marketName && this.state.name && this.state.email) {
            API.saveMarket({
                marketName: this.state.marketName,
                organizer: this.state.name,
                email: this.state.email,
                roles: this.state.roles,
                state: this.state.state,
                city: this.state.city,
                zip: this.state.zip,
                about: this.state.about
            })
            console.log("worked!")
            console.log({
                marketName: this.state.marketName,
                name: this.state.name,
                email: this.state.email,
                roles: this.state.roles,
                state: this.state.state,
                city: this.state.city,
                zip: this.state.zip,
                about: this.state.about

            })
        }
    }
    render() {
        return (
            <div>
                <div className="container new-market-container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>New Market Page</h1>
                            <p>This will contain a form to create a new market.</p>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Market Name</label>
                                        <input type="text" className="form-control" name="marketName" placeholder="Example Market" value={this.state.marketName} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Organizer Name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Johnny Appleseed" value={this.state.name} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                                        <small name="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Address</label>
                                        <input type="text" className="form-control" name="address" placeholder="1234 Main St" value={this.state.address} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-8">
                                        <label>City</label>
                                        <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label>State</label>
                                        <select name="state" className="form-control" value={this.state.state} onChange={this.handleInputChange}>
                                            <option>Choose...</option>
                                            <option value="MN">MN</option>
                                            <option value="WI">WI</option>
                                            <option value="MI">MI</option>

                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label>Zip</label>
                                        <input type="text" className="form-control" name="zip" value={this.state.zip} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Tell us about your market:</label>
                                        <textarea className="form-control" name="about" rows="3" value={this.state.about} onChange={this.handleInputChange}></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Choose all that apply:</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="roles" value="growerVeg" onChange={this.onChange.bind(this)} />
                                        <label className="form-check-label">Grower of Vegetables</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="roles" value="growerFruit" onChange={this.onChange.bind(this)} />
                                        <label className="form-check-label">Grower of Fruits</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="roles" value="landowner" onChange={this.onChange.bind(this)} />
                                        <label className="form-check-label">Landowner</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="roles" value="baker" onChange={this.onChange.bind(this)} />
                                        <label className="form-check-label">Baker</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="roles" value="beekeeper" onChange={this.onChange.bind(this)} />
                                        <label className="form-check-label">Beekeeper</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="roles" value="poultry" onChange={this.onChange.bind(this)} />
                                        <label className="form-check-label">Poultry Farmer</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="roles" value="other" onChange={this.onChange.bind(this)} />
                                        <label className="form-check-label">Other</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>


            </div>



        )
    }
}

export default NewMarket;