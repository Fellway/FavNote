import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello</h1>
          <Button>Close / Save</Button>
          <Button secondary>remove</Button>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
