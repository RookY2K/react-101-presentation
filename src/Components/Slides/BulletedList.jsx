import React, {Component} from 'react';

export default class BulletedList extends Component {
    render () {
        const listStyle = {
            textAlign: 'left',
            fontSize: '40px'
        };

        const listItemStyle = {
            paddingBottom: '10px'
        };

        return (
            <ul style={listStyle}>
                {this.props.listItems.map((item, index) => <li style={listItemStyle} key={index}>{item}</li>)}
            </ul>
        )
    }
}
