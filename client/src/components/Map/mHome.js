import React, { Component } from 'react';
import Map from './Map';

class mHome extends Component {

	render() {
		return(
			<div style={{ margin: "100px" }}>
				<Map
					google={this.props.google}
					center={{lat: 45.0060800 , lng: -93.1566100}}
					height='300px'
					zoom={10}
				/>
			</div>
		);
	}
}

export default mHome;