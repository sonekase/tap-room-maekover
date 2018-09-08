import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import Background from './Background';

function App(){


  return (
    <div className="Row">
      <div className="col-md-8">
        <Background/>
        <Header/>
      </div>
      <div className="col-md-4">
        <BeerList/>
      </div>
    </div>
  );
}

export default App;
