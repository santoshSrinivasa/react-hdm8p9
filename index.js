import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

function Header(props)
{
  return <h3>{props.message}</h3>;
}

function Footer(props)
{
  return <h3>{props.message}</h3>;
}

function Main()
{
  var comment={message:"Main component"};
  return (
    <div>
    <Header message="header component"/>
    <p>{comment.message}</p>
    <Footer message="footer component"/>
    </div>
  );
}
render(<Main />, document.getElementById('root'));
