import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cityPrecincts from '../precincts.svg';

export default class AttachedItemsWrapper extends React.Component {
	static defaultProps = {};

	render() {
		return (
			<div style={{height:400}}>
				<div id="mapid"></div>
				<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		);
	}
}