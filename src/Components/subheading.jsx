import React, {Component} from 'react';

export default class SubHeading extends React.Component {
	render() {
		const subheadingStyle = {
			color: '#A9A9A9',
			fontSize: 40,
		}
		return <div style={subheadingStyle} className='flex-item'>
			{this.props.children}
		</div>
	}
}