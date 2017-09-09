import React, {Component} from 'react';
import SlideDeck from './slideDeck';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Presentation extends Component {
	constructor() {
		super();
		this.slides = SlideDeck;

		let hashValue = window.location.hash.substring(1);
		let pageNumber = Number(hashValue) || 0;

		this.state = {
			currentSlideIndex: pageNumber
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	render() {
		const containerStyle = {
			padding: '0 2% 0 2%',
			textAlign: 'center'
		};

		const { currentSlideIndex } = this.state;
		
		return (
			<div style={containerStyle}>
				<CSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					<div key={currentSlideIndex}>
						{this.slides[currentSlideIndex]}
					</div>
				</CSSTransitionGroup>
			</div>
		);
	}

	handleKeyDown = (event) => {
		const { currentSlideIndex } = this.state;

		switch (event.key){
			case 'ArrowRight':
				const nextSlideIndex = Math.min(this.slides.length - 1, currentSlideIndex + 1);
				this.setState({currentSlideIndex: nextSlideIndex});
				window.location.hash = nextSlideIndex;
				break;
			case 'ArrowLeft':
				const prevSlideIndex = Math.max(0, currentSlideIndex - 1);
				this.setState({currentSlideIndex: prevSlideIndex});
				window.location.hash = prevSlideIndex;
				break;
		}
	}
}
