import React, {Component} from 'react';

export default class SubHeading extends Component {
	render() {
		const subheadingStyle = {
			color: '#A9A9A9',
			fontSize: 50,
		}
		return <div style={subheadingStyle} className='flex-item'>
			{this.props.children}
		</div>
	}
}