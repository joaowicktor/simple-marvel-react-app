import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './styles.css';

const Form = () => {
  const [ searchText, setSearchText ] = useState('');
  const [ submitted, setSubmitted ] = useState(false);

  useEffect(() => {
    if (document.querySelector('#searchInput').value !== '') {
      document.querySelector('.submitButton').disabled = false;
    } else {
      document.querySelector('.submitButton').disabled = true;
    }
  }, [ searchText ]);

  return (
    <form className="searchForm">
      <img className="logo" src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" alt="" />
      <input id="searchInput" type="text" placeholder="Type a character name" onChange={e => setSearchText(e.target.value)} />
      <button className="submitButton" onClick={() => setSubmitted(true)}>Search</button>
      { submitted ? <Redirect to={`/details?character=${searchText}`} /> : null }
    </form>
  )
};

export default Form;
