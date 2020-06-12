import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styled.global';
import Routes from './router';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
