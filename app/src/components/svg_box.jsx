import React from "react";

import InfoPanel from './info_panel';
import MapPanel from './map_panel';
import InfoBar from './info_bar';

export default class SvgBox extends React.Component {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {InfoBarExpand: false}
	}

	ToggleInfoBar = () => {
		this.setState({InfoBarExpand: !this.props.InfoBarExpand});
	}

	render() {
		return(
			<div className="SvgBox">
				<div style={{width: '40%', float: 'left'}}>
					<InfoPanel ToggleInfoBar={this.ToggleInfoBar} />
				</div>
				<div style={{width: '60%', float: 'right'}}>
					<MapPanel />
					<InfoBar Expanded={this.state.InfoBarExpand}/> 
				</div>
			</div>
		);
	}
}