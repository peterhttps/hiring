import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeChangeProvider } from './providers/themeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeChangeProvider>
    <App />
    </ThemeChangeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

