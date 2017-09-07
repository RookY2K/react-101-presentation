import React, {Component} from 'react';

export default class Slide extends Component {
	constructor(props) {
		super(props);
		this.state = { windowHeight: window.innerHeight }
	}

	componentDidMount() {
		document.addEventListener('resize', this.handleResize, false);
	}

	componentWillUnmount() {
		document.removeEventListener('resize', this.handleResize, false);		
	}

	render() {
		const slideStyle = {
			height: this.state.windowHeight + 'px',
			width: '100%',
		};

		return <div style={slideStyle} className='flex-item'>
			{this.props.children}
		</div>;
	}

	handleResize = () => {
		this.setState({ windowHeight: window.innerHeight });
	}
}
