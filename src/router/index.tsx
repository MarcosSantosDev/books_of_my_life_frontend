import React from 'react';
import { Router } from '@reach/router';

import App from '../components/App';

export default () => (
  <div>
    <Router>
      <App path="/" />
    </Router>
  </div>
);
