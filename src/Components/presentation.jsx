import React, {Component} from 'react';
import SlideDeck from './slideDeck';

export default class Presentation extends Component {
	constructor() {
		super();
		this.slides = SlideDeck;
		
		this.state = {
			currentSlideIndex: 0
		}
	}

	componentWillMount = () => {
		document.addEventListener('keydown', this.handleKeyDown, false);
	}

	componentWillUnmount = () => {
		document.removeEventListener('keydown', this.handleKeyDown, false);		
	}

	render() {
		const containerStyle = {
			padding: '0 2% 0 2%',
			textAlign: 'center'
		}

		return (
			<div style={containerStyle}>
				{this.slides[this.state.currentSlideIndex]}
			</div>
		);
	}

	handleKeyDown = (event) => {
		const { currentSlideIndex } = this.state; 
		if (event.key === 'ArrowRight' && currentSlideIndex < this.slides.length - 1) {
			this.setState({ currentSlideIndex: currentSlideIndex + 1 });
		} else if (event.key === 'ArrowLeft' && currentSlideIndex > 0) {
			this.setState({ currentSlideIndex: currentSlideIndex - 1 });
		}
	}
}