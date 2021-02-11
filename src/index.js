import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StcokProvider } from "./providers/stockProvider";
import { ThemeChangeProvider } from "./providers/themeProvider";

ReactDOM.render(
    <React.StrictMode>
        <ThemeChangeProvider>
            <StcokProvider>
                <App />
            </StcokProvider>
        </ThemeChangeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
