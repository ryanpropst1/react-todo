import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
// import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash, faPen);


export class TodoItem extends Component {

  state = {
    isEditing: false
  }

  getStyle = () => {
    return {
      backgroundColor: '#ac895a',
      color: 'black',
      padding: '5px',
      borderBottom: '1px,#ccc dotted',
      textAlign: 'left',
      margin: '-2px 25px',
      opacity: '0.7',
      textDecoration: this.props.todo.completed? 'line-through' : 'none'
    }
  }
  //  if you bind this below in the return. b/c this is a custom method it does not have access to the this.props
  // as normal so must bind in some fashion either with 'bind' or an => fn
  // markComplete( e ) {
  //   console.log(this.props)
  // }
  // using an arrow function so 'this' is bound
  // markComplete = ( e ) => {
    // console.log(this.props)
  // }

  render() {
    //  above the return, we can destructure, with the object on the right of the
    // assignment operator and the destructured object properties to pull out on the left?
    // so that below you dont' have to type this.props.todo.title each time but just us title
    const { id, title } = this.props.todo;
    console.log(title);
    const { isEditing } = this.state

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" style={{marginRight: '8px'}} onChange={ this.props.markComplete.bind(this, id) } />
          {!isEditing ? title : <input value={title} onChange={'INSERT CHANGE HANDLER HERE'}></input>}
          <FontAwesomeIcon icon='pen' size='sm' style={faIconStyle} onClick={ () => this.setState({isEditing: !this.state.isEditing})} />
          <FontAwesomeIcon icon='trash' size='sm' style={faIconStyle} onClick={ this.props.delTodo.bind(this, id)} />
         {/* <button style={btnStyle} onClick={ this.props.delTodo.bind(this, id)}>X</button> */}
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const faIconStyle = {
  // background: '#1A1110',
  // opacity: '0.7',
  color: '#1A1110',
  // border: 'none',
  // borderRadius: '50%',
  margin: '5px',
  cursor: 'pointer',
  float: 'right'
}

// const btnStyle = {
//   background: 'black',
//   opacity: '0.7',
//   color: '#fff',
//   border: 'none',
//   padding: '3px 7px',
//   borderRadius: '50%',
//   cursor: 'pointer',
//   float: 'right'
// }
// You can use a variable to style in React
// const itemStyle = {
//   backgroundColor: '#ac895a',
//   color: 'black'
// }

export default TodoItem;

// First
// return (
  // // You can style inline using dbl curlies React
  // <div style={{backgroundColor: '#DEB887' }}>
  // <div style={itemStyle}>
  // or you can style using method inside the resturn function
  // which we will do to be able to mark thru completed items
  // <div style={this.getStyle()}>
  //   <p>
      {/* could bind - this - here but better to use an arrow function in markComplete */ }
      {/* <input type="checkbox" onChange={ this.markComplete.bind(this) } /> {' '} */ }
      {/* but to climb the tree and pass the markComplete w/o a state manager we add props to it...create({  : '' ,}) */}
      {/* <input type="checkbox" onChange={ this.props.markComplete } /> {' '}
      { this.props.todo.title }
    </p>
  </div> */}
// )


      // Second

//       render()
//   {
//     return (

//       <div style={this.getStyle()}>
//         <p>
//           <input type="checkbox" onChange={ this.props.markComplete.bind (this, this.props.todo.id )} /> {' '}
//           { this.props.todo.title }
//         </p>
//       </div>
//     )
//   }
// }
