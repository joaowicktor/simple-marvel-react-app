import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import ThemeSwitcher from '../../components/ThemeSwitcher'
import DataDetails from '../../components/DataDetails'

export default class CharacterDetails extends Component {
  render() {
    return (
      <div className="details">
        <header className="header">
          <Link to={'/'}>
            <img className="logo" src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" alt="" />
          </Link>
          <ThemeSwitcher />
        </header>
        <DataDetails />
        <footer>Developed with ❤ by <a href="https://github.com/joaowicktor">João Wicktor</a><br/>Data provided by Marvel. © 2014 Marvel</footer>
      </div>
    );
  }
}
