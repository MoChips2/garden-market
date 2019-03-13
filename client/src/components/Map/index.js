import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// import googleAPI from "./key";


export class MapContainer extends Component {


  render() {
    // const style = {
    //   height: "100%",
    //   margin: "20px",
    //   marginRight: "30px",
    //   position: "relative",
    //   borderRadius: "3px"
    // }

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
          title={this.props.name}
          position={{ lat: this.props.lat, lng: this.props.lng }}
        />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyCkb1B8yUakYSWHYbogPL28_aN95F99qhY"
})(MapContainer)