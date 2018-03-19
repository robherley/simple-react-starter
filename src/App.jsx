import React from 'react';
import { hot } from 'react-hot-loader';

// Testing object spread plugin
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const App = () => {
  return (
    // empty jsx tags are amazing
    <>
      <h1>Wow, it actually works...</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam
        omnis quibusdam ratione quaerat nesciunt quia reprehenderit minus
        consequuntur aliquid dolorum cumque accusantium placeat laudantium,
        ducimus eius maxime incidunt ipsum?
      </p>
    </>
  );
};

export default hot(module)(App);
