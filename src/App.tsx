import React from 'react';
import './components/fontawesome';
import GlobalStyle from './styles/global';
import { Wrapper, Container } from './styles/componentes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

console.log(window.innerWidth);
const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Header />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </Wrapper>
  </>
);
export default App;
