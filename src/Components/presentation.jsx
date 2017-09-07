import React, {Component} from 'react';
import SlideDeck from './slidedeck';


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

		return (
			<div style={containerStyle} >
				{this.slides[this.state.currentSlideIndex]}
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
