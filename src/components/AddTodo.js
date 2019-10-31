import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }
  addNewItem = e => this.setState({title: e.target.value});
  //  if you had numerous fields like password, user name, title, can you
  // brackets and e.target.name to capture the name (title, password, etc.)
  // addNewItem = e => this.setState({ [e.target.name]: e.target.value});

  onSubmit = e => {
    //  will try to submit to the actual file so want to prevent default.
    e.preventDefault();
    //  we are submitting to
    this.props.addTodo(this.state.title);
    //  after it's submitted we want to clear the fields ..
    this.setState({ title: ''});
  }
  render() {
    return (
      <form onSubmit={ this.onSubmit } style={{display: 'flex', padding: '15px'}}>
        <input
        type="text"
          name="item"
          style={{flex: '10', padding: '5px'}}
          placeholder='Add To Do...'
          value={ this.state.title }
          onChange={this.addNewItem}
      />
        <input
          type='submit'
          value='Add'
          className='btn'
          style={ { flex: '1' } }
        />
     </form>
    )
  }
}

export default AddTodo
