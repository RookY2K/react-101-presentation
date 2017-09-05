import React, {Component} from 'react';

export default class Title extends React.Component {
	render() {
		const titleStyle = {
			fontSize: 100,
			textAlign: 'center'
		}
		return <div style={titleStyle}>{this.props.children}</div>
	}
}