import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {
	// make the state of todos here to be passed
	// down to children
	state = {
		// an array of objects
		todos: [
			{
				id: uuid.v4(),
				title: 'Buy groceries',
				completed: false,
			},
			{
				id: uuid.v4(),
				title: 'Buy gas for generator',
				completed: false,
			},
			{
				id: uuid.v4(),
				title: 'Cut firewood',
				completed: false,
			},
		],
	};

	// We can finally add the custom method markComplete here to change the state
	//  markComplete = ( e ) => {
	//   // console.log("from app.js")
	// }
	//  now can add id passed up the tree from TodoItem.js can now add id here and console to check
	// after confirming we are logging the id, we need to now actually change the state here.
	// markComplete = ( id ) => {
	//   console.log(id)
	// }

	// Toggle item complete
	markComplete = id => {
		//  state is an object so we use {} inside the setState ();
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	// delete Todo item from list
	// delTodo = ( id ) => {
	//   console.log(id);
	// }
	delTodo = id => {
		this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  };

  // Add Todo
  addTodo = (title) => {
    // console.log(title);
    // now add the new item to this.state.
    // creating a variable for newTodo for below to use below in setState
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }



	render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className='App'>
          {/* <div className='container'> */ }
          {/* <h1>To Do List</h1> */ }
          {/* <hr></hr> */ }
          <Header />
          <Route exact path='/' render={ props => (
            <React.Fragment>
              <AddTodo addTodo={ this.addTodo } />

              <Todos
                todos={ this.state.todos }
                markComplete={ this.markComplete }
                delTodo={ this.delTodo }
              />
            </React.Fragment>
          ) } />
          {/* </div> */ }
          <Route path='/about' component={ About } />
        </div>
      </Router>
    );
	}
}

export default App;
