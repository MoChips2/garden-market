import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
import googleAPI from "./key";
import _ from "./env";

export class MapContainer extends Component {


  render() {
    const style = {
      height:"100%",
      position: "relative"
    }
    return (
      <Map 
        google={this.props.google} 
        style={style}
        zoom={12}
        initialCenter={{lat: 44.9778, lng: -93.2650}}
      >
      <Marker 
        title={"MPLS"}
        name={"MPLS"}
        position={{lat: 44.9778, lng: -93.2650}}
      />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleAPI.apiKey
})(MapContainer)