import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

import List from '../List';
import LoadingSpinner from '../LoadingSpinner';

const DataDetails = ({ character }) => {
  const [ marvelCharacters, setMarvelCharacters ] = useState();

  const getMarvelCharacters = async () => {
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters', { 
      params: { 
        apikey: process.env.REACT_APP_API_KEY,
        limit: 50,
        nameStartsWith: character
      }
    });
    const data = response.data.data.results;
    setMarvelCharacters(data);
  }
  
  useEffect(() => {
    getMarvelCharacters();
  }, []);

  return (
    <div className="box">
    <div className="top-bar"><h1>Search Results</h1></div>
    { marvelCharacters ? marvelCharacters.map(char => (
      <List 
        key={char.id}
        name={char.name}
        description={char.description ? char.description : 'No description'}
        image={`${char.thumbnail.path}/standard_fantastic.${char.thumbnail.extension}`} 
      />
    )) : <LoadingSpinner /> }
  </div>
  );
};

export default DataDetails;
