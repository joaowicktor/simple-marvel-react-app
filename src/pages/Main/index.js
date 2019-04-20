import React from 'react';
import './styles.css';

import ThemeSwitcher from '../../components/ThemeSwitcher';
import Form from '../../components/Form';

const Main = () => (
  <div className="main-container">
    <div id="toggle-btn"><ThemeSwitcher /></div>
    <Form />
    <footer id="developed-by">Developed with ❤ by <a href="https://github.com/joaowicktor">João Wicktor</a></footer>
  </div>
);

export default Main;
