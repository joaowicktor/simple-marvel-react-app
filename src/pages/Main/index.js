import React from 'react';
import './styles.css';

import MarvelForm from '../../components/Form';
import ToggleButton from '../../components/ToggleButton';

const Main = () => (
  <>
    <div id="toggleBtn"><ToggleButton /></div>
    <MarvelForm />
  </>
);

export default Main;
