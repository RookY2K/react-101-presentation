import React, {Component} from 'react';

const ChildComponent = (props) => <div dangerouslySetInnerHTML={{__html: props.text}} />;

export default class ComponentSlide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            childText: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.text.includes('STOP'))
            return !nextState.text.includes('STOP');

        return true;
    }


    render() {
        const {text, childText} = this.state;

        return (
            <div>
                <textarea
                    rows='10'
                    cols='100'
                    value={text}
                    onChange={this.handleTextAreaChange}
                    onKeyDown={this.handleNewLine}
                    />
                <ChildComponent text={childText} />
            </div>
        );
    }

    handleTextAreaChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    handleNewLine = (event) => {
        if(event.key !== 'Enter') return;

        this.setState({
            childText: this.state.text.replace(/\n/g, '<br />')
        });
    };
}
