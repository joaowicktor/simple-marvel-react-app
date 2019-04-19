import React from 'react';
import './styles.css';

const List = ({ name, description, image }) => (
  <div className="list">
    <img src={ image } alt=""/>
    <div className="content">
      <h1>{ name }</h1>
      <p>{ description }</p>
    </div>
  </div>
);

export default List;
