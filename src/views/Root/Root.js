import React from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello</h1>
      <Button>Close / Save</Button>
      <Button secondary>remove</Button>
    </div>
  );
}

export default App;
