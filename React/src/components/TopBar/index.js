import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../providers/themeProvider';

import { ContainerTopBar } from './styles';
import { lightTheme, darkTheme } from '../../themes/Themes';

import {FiSun, FiMoon} from 'react-icons/fi';

function TopBar() {
  const {theme, setTheme} = useContext(ThemeContext);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    if (theme.name === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [isLight, theme.name]);

  function modeClick() {
    if (theme.name === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  return (
    <ContainerTopBar>
        <button onClick={() => modeClick()}>
          {!isLight
          ? <FiSun color="#FFFFFF" size={24}/>
          : <FiMoon color="#FFFFFF" size={24}/>}
          </button>
        <div>
          <h2>Meu Portfólio</h2>
        </div>
    </ContainerTopBar>
  );
}

export default TopBar;