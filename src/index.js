import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StockProvider } from "./providers/stockProvider";
import { ThemeChangeProvider } from "./providers/themeProvider";

ReactDOM.render(
    <React.StrictMode>
        <ThemeChangeProvider>
            <StockProvider>
                <App />
            </StockProvider>
        </ThemeChangeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
