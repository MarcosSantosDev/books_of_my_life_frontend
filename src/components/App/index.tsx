import React, { FunctionComponent } from 'react';

import { RouteComponentProps } from '@reach/router';

import {
  Container,
  Wrapper,
  Title,
} from './styled';

interface AppProps {}

const App: FunctionComponent<RouteComponentProps<AppProps>> = () => (
  <Container>
    <Wrapper>
      <Title>
        Books of my life!
      </Title>
    </Wrapper>
  </Container>
);

export default App;
