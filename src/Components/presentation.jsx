import React, {Component} from 'react';
import Slide from './slide';

export default class Presentation extends Component {
	constructor() {
		super();
		this.slides = [
			<Slide title='The First Slide'/>,
			<Slide title='Oh Look...A Second Slide'/>
		];
		
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
			width: '100%',
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