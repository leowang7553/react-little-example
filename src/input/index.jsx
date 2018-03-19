import React, { Component } from 'react';

import './index.css';

class Input extends Component {

	handleKeyUp(event) {
		const value = event.target.value;
		const code = event.keyCode;
		if (code === 13) {
			// console.log('value', value);
			this.props.onChange && this.props.onChange(value);
		}
	}

	render() {
		return (
			<div className="input-container">
				<input 
					onKeyUp={this.handleKeyUp.bind(this)} 
					ref={input => this.input = input} />
			</div>
		)
	}

	componentDidMount() {
		this.input.focus();
	}
}

export default Input;