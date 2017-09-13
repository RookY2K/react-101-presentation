import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

export default class ComponentSlide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            childText: ''
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.text.includes('STOP')) {
            return !nextState.text.includes('STOP');
        }

        return true;
    }

    render() {
        return (
            <div>
                <textarea
                    rows="5"
                    cols="50"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    />
                <ChildComponent text={this.state.childText}/>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleKeyDown = (event) => {
        if(event.key !== 'Enter') return;

        this.setState({
            childText: this.state.text.replace(/\n/g, '<br />')
        });
    }
}
