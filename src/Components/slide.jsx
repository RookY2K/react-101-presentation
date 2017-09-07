import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Slide extends React.Component {
	constructor(props) {
		super(props);
		this.state = { windowHeight: window.innerHeight }
	}
	componentDidMount = () => {
		document.addEventListener('resize', this.handleResize, false);
	}

	componentWillUnmount = () => {
		document.removeEventListener('resize', this.handleResize, false);		
	}

	render() {
		const slideStyle = {
			height: this.state.windowHeight + 'px',
			width: '100%',
		}
		return <div style={slideStyle} className='flex-item'>
			{this.props.children}
		</div>;
	}

	handleResize = () => {
		this.setState({ windowHeight: window.innerHeight });
	}
}