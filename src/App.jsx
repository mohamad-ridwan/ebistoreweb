import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container1 from './components/container1/Container1';

function App() {

  // Create Loading Page Home
  let [loading, setLoading] = useState(false)
  // END Create Loading Page Home

  return (
    <div className="App">

      {/* Container 1 */}
      {loading ? loading && (
        <h1>Loading</h1>
      ) : (
          <Container1 />
        )}

      {/* END Container 1 */}
    </div>
  );
}

export default App;
