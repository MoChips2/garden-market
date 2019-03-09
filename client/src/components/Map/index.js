import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import googleAPI from "./key";


export class MapContainer extends Component {


  render() {
    const style = {
      height: "100%",
      position: "relative"
    }

    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={12}
        initialCenter={{ lat: 44.9778, lng: -93.2650 }}
      >
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
        <Marker
          title={"Target"}
          position={{ lat: this.props.lat, lng: this.props.lng }}
        />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyCkb1B8yUakYSWHYbogPL28_aN95F99qhY"
})(MapContainer)