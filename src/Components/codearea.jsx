import React, {Component} from 'react';
import Highlight from 'react-highlight';

export default class CodeArea extends React.Component {
	render() {
		const codeStyle = {
			textAlign: 'left',
			fontFamily: 'Roboto Mono',
			fontSize: 25
		}
		
		return <div style={codeStyle}>
			<Highlight  className='javascript'>
				{this.props.children}
			</Highlight>
		</div>;
	}
}