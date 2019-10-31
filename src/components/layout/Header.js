//  rc tab will give you a react function template
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link
        istyle={ linkStyle }
        to="/">Home<
          /Link> | <Link style={ linkStyle } to="/about">About</Link>
      <hr></hr>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  opacity: '0.8',
  color: '#A9A9A9',
  textAlign: 'center',
  margin: '5px 5px',
  paddingTop: '2px'
}

const linkStyle = {
  color: '#A9A9A9',
  textDecoration: 'none'
}

export default Header;
