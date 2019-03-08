import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import googleAPI from "./key";

export class MapContainer extends Component {

  render() {
    return (
      <Map 
        google={this.props.google} 
        style={ {height:"300px"} }
        zoom={12}
        intialCenter={{
          lat: 44.9778,
          lng: -93.2650
        }}
        onClick={this.onMapClicked}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleAPI.apiKey
})(MapContainer)