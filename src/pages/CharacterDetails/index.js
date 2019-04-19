import React, { Component } from 'react';
import './styles.css';

import Navbar from '../../components/Navbar'
import DataDetails from '../../components/DataDetails'

export default class CharacterDetails extends Component {
  render() {
    return (
      <div className="details">
        <Navbar />
        <DataDetails character={ this.props.location.state.character }/>
      </div>
    );
  }
}
