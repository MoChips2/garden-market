import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import googleAPI from "./key";
export class MapContainer extends Component {


  render() {
    return (
      <Map 
        google={this.props.google} 
        zoom={12}
        center={{
          lat: 44.9778,
          lng: -93.2650
        }}
      >
      </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: googleAPI
})(MapContainer)