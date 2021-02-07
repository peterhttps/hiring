import React, { useState } from 'react';

import {lightTheme, darkTheme} from '../themes/Themes';

export const ThemeContext = React.createContext({});



export const ThemeChangeProvider = (props) => {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
} 