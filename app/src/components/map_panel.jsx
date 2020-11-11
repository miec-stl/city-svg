import React from "react";

import cityPrecincts from '../precincts.svg';

export default class AttachedItemsWrapper extends React.Component {
	static defaultProps = {};

	render() {
		return (
			<div>
                <img src={cityPrecincts} alt="precincts" id="citySVG" />
            </div>
		);
	}
}