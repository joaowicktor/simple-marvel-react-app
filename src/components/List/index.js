import React from 'react';
import './styles.css';

const List = ({ name, description, image }) => {
  if (window.screen.width < 768) {
    return (
      <div className="list">
        <header>
          <img src={ image } alt=""/>
          <h1>{ name }</h1>
        </header>
        <p>{ description }</p>
      </div>
    );
  } else {
    return (
      <div className="list">
        <header>
          <img src={ image } alt=""/>
          <div>
            <h1>{ name }</h1>
            <p>{ description }</p>
          </div>
        </header>
      </div>
    );
  }
}

export default List;
