import React, {Component} from 'react';

export default class ChildComponent extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.text}}/>
        )
    }
}