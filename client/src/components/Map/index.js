import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import API from "../../utils/API";


export class MapContainer extends Component {

  state = {
    markets: [],
    marketName: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    coords: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  componentDidMount() {
    this.loadMarkets();
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

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
        })
      })
  }

  render() {

    const style = {
      height: "600px",
      width: "90%",
      margin: "auto",
      marginTop: "25px",
      paddingBottom: "20px",
      position: "relative",
      borderRadius: "3px"
    }

    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={15}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
      >
        <Marker
          position={{ lat: this.props.lat, lng: this.props.lng }}
          icon={{ 
            url: "http://chittagongit.com//images/google-map-marker-icon/google-map-marker-icon-17.jpg",
            scaledSize: new window.google.maps.Size(25,40)
          }}
        />
        {this.state.markets.map(market => (
          <Marker
            key={market._id}
            onClick={this.onMarkerClick}
            name={market.marketName}
            position={{ lat: market.location_lat, lng: market.location_lng }}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h5>{this.state.selectedPlace.name}</h5>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCkb1B8yUakYSWHYbogPL28_aN95F99qhY"
})(MapContainer)
