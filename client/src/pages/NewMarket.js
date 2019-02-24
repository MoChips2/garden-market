import React from "react";

function NewMarket() {

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
                                    <input type="text" className="form-control" id="inputname4" placeholder="Example Market" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Organizer Name</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Johnny Appleseed" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="form-group col-md-12">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label>City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label>State</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Tell us about your market:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Choose all that apply:</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="growerVeg" value="growerVeg" />
                                    <label className="form-check-label">Grower of Vegetables</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="growerFruit" value="option2" />
                                    <label className="form-check-label">Grower of Fruits</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="landowner" value="landowner" />
                                    <label className="form-check-label">Landowner</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="baker" value="baker" />
                                    <label className="form-check-label">Baker</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="beekeeper" value="beekeeper" />
                                    <label className="form-check-label">Beekeeper</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="poultry" value="poultry" />
                                    <label className="form-check-label">Poultry Farmer</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="other" value="other" />
                                    <label className="form-check-label">Other</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default NewMarket;