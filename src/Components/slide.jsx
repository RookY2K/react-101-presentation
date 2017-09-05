import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from './title';

export default class Slide extends React.Component {
	static propTypes = {
		title: PropTypes.string
	}

	render() {
		const slideStyle = {
			width: '100%'
		}
		return <div style={slideStyle}>
			<Title>{this.props.title}</Title>
			{this.props.children}
		</div>;
	}
}