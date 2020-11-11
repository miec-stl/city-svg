import React from "react";

import InfoPanel from './info_panel';
import MapPanel from './map_panel';

export default class SvgBox extends React.Component {
	static defaultProps = {};

	render() {
		return(
			<div className="SvgBox">
				<div style={{width: '60%', float: 'left'}}>
					<MapPanel />
				</div>
				<div style={{width: '40%', float: 'right'}}>
					<InfoPanel />
				</div>
			</div>
		);
	}
}