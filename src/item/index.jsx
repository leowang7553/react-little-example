import React, { Component } from 'react';

import './index.css';

class Item extends Component {
	constructor() {
		super();
		this.state = {
			isFinished: false
		}
	}
	handleClick() {
		this.setState({
			isFinished: !this.state.isFinished
		});
	}

	render() {
		let isFinished = this.state.isFinished;
		let finishedCls = isFinished ? ' item-finished' : '';
		return (
			<div className="item">
                <input className="item-cb" type="checkbox" onClick={this.handleClick.bind(this)} />
                <span 
                	className={"item-text" + finishedCls}
                >
                	{this.props.item}{this.props.index}
                </span>
            </div>
		)
	}
}

export default Item;