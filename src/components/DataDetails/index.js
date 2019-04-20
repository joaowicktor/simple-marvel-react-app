import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

import List from '../List';
import LoadingSpinner from '../LoadingSpinner';

const DataDetails = () => {
  const [ marvelCharacters, setMarvelCharacters ] = useState();

  const getMarvelCharacters = async (character) => {
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters', { 
      params: { 
        apikey: process.env.REACT_APP_API_KEY,
        limit: 50,
        nameStartsWith: character
      }
    });
    const characters = response.data.data.results;
    setMarvelCharacters(characters); 
  }
  
  useEffect(() => {
    const query = document.location.search.substring(1);
    const [ prefix, search ] = query.split('=');

    if (prefix === 'character') {
      const decodedSearch = decodeURI(search);
      getMarvelCharacters(decodedSearch);
    } else {
      window.location = '/'
    }
  }, []);

  return (
    <div className="panel">
    <div className="top-bar"><h1>Search Results</h1></div>
    { marvelCharacters ? marvelCharacters.map(char => (
      <List 
        key={char.id}
        name={char.name}
        description={char.description ? `"${char.description}"` : 'No description'}
        image={`${char.thumbnail.path}/standard_large.${char.thumbnail.extension}`} 
      />
    )) : <LoadingSpinner /> }
  </div>
  );
};

export default DataDetails;
