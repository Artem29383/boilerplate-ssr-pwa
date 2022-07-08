import React from 'react';
import Normalize from 'styles/normalize';
import Main from 'pages/Main';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import * as S from './App.styled';
import 'styles/fonts/fonts.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <S.Root>
        <Main />
      </S.Root>
    </ThemeProvider>
  );
};

export default App;
