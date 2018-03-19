import React, { Component } from 'react';

import './index.css';

import Item from '../item';

// const todos = ['看电影', '吃饭', '上班'];

class List extends Component {
	
	render() {
		const todos = this.props.todos;
		console.log(this.props.todos);
		return (
			<div className="list">
                {todos.map((item, index) => {
                    return <Item item={item} key={index} index={index} />
                })}
            </div>
		)
	}
}

export default List;