import React, {Component} from 'react';

export default class Heading extends Component {
	render() {
		const headingStyle = {
			fontSize: 100
		}

		return <div style={headingStyle} className='flex-item'>
			{this.props.children}
		</div>
	}
}
