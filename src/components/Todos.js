import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// import { TodoItem } from './TodoItem';


class Todos extends Component {
  // this is just to see how the markComplete prop is passed up the tree to App.js w/o
  // state manager from todoItem (without the props added below to markComplete)
  //  markComplete = ( e ) => {
  //   console.log("hello")
  // }

	render() {
		// console.log(this.props.todos);
    return this.props.todos.map( (todo, index) =>
      <TodoItem key={ todo.id } todo={ todo } markComplete={ this.props.markComplete } delTodo={ this.props.delTodo } todoIndex={index} />
    );
	}
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
