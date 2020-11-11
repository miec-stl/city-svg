import React from "react";

export default class InfoBar extends React.Component {
	static defaultProps = {
		Expanded: false
	};

	render() {
		return (
			<div style={{height: (this.props.Expanded ? 100 : 0)}}>
				InfoBar
			</div>
		);
	}
}