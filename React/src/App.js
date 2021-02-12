import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/GlobalStyle";
import Routes from "./routes";
import { ThemeContext } from "./providers/themeProvider";
import { useContext } from "react";
import "./styles.css";

function App(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
