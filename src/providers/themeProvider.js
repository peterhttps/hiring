import React, { useEffect, useState } from 'react';

import { lightTheme } from '../themes/Themes';

export const ThemeContext = React.createContext({});



export const ThemeChangeProvider = (props) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || lightTheme);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
} 