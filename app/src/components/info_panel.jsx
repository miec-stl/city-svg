import React from "react";


export default class InfoPanel extends React.Component {
	static defaultProps = {};

	render() {
		return (
			<div style={{height: '100vh', backgroundColor: 'blue', color:'white'}}>
				Test
				<div onClick={this.props.ToggleInfoBar}>
					Tets
				</div>
			</div>
		);
	}
}