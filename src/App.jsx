import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => (
  <div className="placeholder">
    <div>
      <h1>React 16, Webpack 4, Babel 7</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam
        omnis quibusdam ratione quaerat nesciunt quia reprehenderit minus
        consequuntur aliquid dolorum cumque accusantium placeat laudantium,
        ducimus eius maxime incidunt ipsum?
      </p>
    </div>
  </div>
);

export default hot(module)(App);
