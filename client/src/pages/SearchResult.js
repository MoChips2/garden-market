import React, { Component } from "react";
import API from "../utils/API";
import ResultContainer from "../components/ResultContainer";
import MapContainer from "../components/Map/index";
import { Map, Marker, InfoWindow } from "google-maps-react";
import "../components/auth/Login.css";
import "../components/ResultContainer.css";

class SearchResult extends Component {
	state = {
		markets: [],
		marketName: "",
		address: "",
		city: "",
		state: "",
		zip: 0,
		coords: [],
		isLoaded: false
	};

	componentDidMount() {
		this.loadMarkets();
	};

	// to center map, homepage search should center the map


	loadMarkets = () => {
		API.getMarkets()
			.then(res => {
				console.log(res.data)
				this.setState({
					markets: res.data,
					marketName: "",
					address: "",
					city: "",
					state: "",
					zip: "",
					coords: [],
					place_id: [],
					isLoaded: true
				})
				// converts address into coordinates -Simone
				let promiseArray = []
				this.state.markets.forEach((market) => {
					let address = `${market.address} ${market.city}, ${market.state} ${market.zip}`
					promiseArray.push(API.geocodeAddress(address))
				})
				return Promise.all(promiseArray)
			})
			.then(res => {
				var coordsArray = [];
				res.map(coord => {
					console.log("---geocode results---")
					console.log(res);
					let coords = coord.data.results[0].geometry.location;
					let id = coord.data.results[0].place_id;
					Object.assign(coords, { id: id})
					coordsArray.push(coords);
					return coordsArray;
				})
				this.setState({
					coords: coordsArray
				})
				console.log(this.state.coords);
			})
			.catch(err => console.log(err));
	};


	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="card gardenCard resultCard">
							<div className="card-header gardenCardHeader">
								<h2 className="gardenHeader">SEARCH RESULTS</h2>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-md-4">
										<ul class="list-group list-group-flush">
											{this.state.markets.map(market => (
												<li class="list-group-item" key={market._id}>
													<ResultContainer
														id={market._id}
														marketName={market.marketName}
														address={market.address}
														city={market.city}
														state={market.state}
														zip={market.zip}
													/>
												</li>
											))}
										</ul>
									</div>
									<div className="col-md-8 mapDiv">
										<MapContainer>
												<Marker
													title={"MPLS"}
													name={"MPLS"}
													position={{ lat: 44.9778, lng: -93.2650 }}
												/>
												<Marker
													title={"US Bank Stadium"}
													name={"Vikings Stadium"}
													position={{ lat: 44.9738, lng: -93.2578 }}
												/>
											  {this.state.markets.map(market => (
												<Marker
													key={market._id}
													title={market.marketName}
													position={{ lat: market.location_lat, lng: market.location_lng }}
												/>
												))}
										</MapContainer>
									</div>
								</div>
							</div>
						</div>
						<br />
						<br />
					</div>
				</div>
			</div>
		)
	}
}

export default SearchResult;