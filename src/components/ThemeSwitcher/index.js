import React, { useEffect, useState } from 'react';
import './styles.css';

import { IconContext } from "react-icons";
import { FaAdjust } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [ defaultTheme, setDefaultTheme ] = useState('light');
  const [ iconTheme, setIconTheme ] = useState('#333333');

  const getUserPreferences = () => {
    const theme = localStorage.getItem('data-theme');
    if (theme !== null) {
      setDefaultTheme(theme);
    }
  }

  const changeTheme = () => {
    const toggleBtn = document.querySelector('#switch');
    if (defaultTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
      setIconTheme('#FCFCFC');
      toggleBtn.checked = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
      setIconTheme('#333333');
      toggleBtn.checked = false;
    }
  }

  useEffect(() => getUserPreferences(), []);
  useEffect(() => changeTheme(), [ defaultTheme ]);

  return (
    <div id="toggle">
      <div>
      <IconContext.Provider value={{ color: iconTheme }}>
        <FaAdjust />
      </IconContext.Provider>
        <input onChange={() => {defaultTheme === 'dark' ? setDefaultTheme('light') : setDefaultTheme('dark')}} type="checkbox" id="switch" name="theme"/><label htmlFor="switch">Toggle Theme</label>
      </div>
    </div>
  )
};

export default ThemeSwitcher;
