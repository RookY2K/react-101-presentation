import React, {Component} from 'react';
import SlideDeck from './slidedeck';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Presentation extends Component {
	constructor() {
		super();
		this.slides = SlideDeck;
		
		this.state = {
			currentSlideIndex: 0
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
		}

		const { currentSlideIndex } = this.state;
		
		return (
			<div style={containerStyle}>
				<CSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
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
				this.setState({currentSlideIndex: Math.min(this.slides.length - 1, currentSlideIndex + 1)});
				break;
			case 'ArrowLeft':
				this.setState({currentSlideIndex: Math.max(0, currentSlideIndex - 1)});
				break;
		}
	}
}
