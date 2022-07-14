import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import { ThemeProvider, ThemeContext } from "./contexts/theme";
import themes from "./styles/themes";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledThemeProvider theme={themes[theme] || themes.dark}>
            <GlobalStyle />
            <Layout />
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
