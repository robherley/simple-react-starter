import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    // empty jsx tags are amazing
    <>
      <h1>Wow, it actually works...</h1>
      <p>
        <Lorem />
      </p>
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
