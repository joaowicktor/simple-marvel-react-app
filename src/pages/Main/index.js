import React from 'react';
import './styles.css';

import ThemeSwitcher from '../../components/ThemeSwitcher';
import Form from '../../components/Form';

const Main = () => (
  <>
    <div id="toggleBtn"><ThemeSwitcher /></div>
    <Form />
  </>
);

export default Main;
