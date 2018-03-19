import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import Input from './input';
import List from './list';



class App extends Component {

	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	onChange(value) {
		console.log('value:' + value);
		var newArr = this.state.todos;
		newArr.push(value);

		this.setState({
			todos: newArr
		});
	}

	render() {
		return (
			<div className="app">
				<h1>Todos</h1>
				<Input onChange={this.onChange.bind(this)} />
				<List todos={this.state.todos} />
			</div>
		)
	}

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
