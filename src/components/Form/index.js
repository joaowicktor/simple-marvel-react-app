import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const MarvelForm = () => {
  const [ searchText, setSearchText ] = useState('');

  const getSearchText = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <div className="main-container">
      <form>
        <img className="logo" src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" alt="" />
        <input type="text" placeholder="Type a character name" onChange={e => getSearchText(e)} />
        <Link className="submitButton" to={{ pathname:"/details", state: { character: searchText } }} >Search</Link>
      </form>
    </div>
  )
};

export default MarvelForm;
