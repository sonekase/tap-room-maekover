import React from 'react';
import Header from './Header';
import bg from './../img/taps.jpg';
import BeerList from './BeerList';

function App(){


  return (
    <div>
      <style jsx>{`
        body {
          background-image: url(${bg});
          background-size: contain;
          background-repeat: no-repeat;
        }
        `}</style>
      <div>
        <Header/>
        <BeerList/>
      </div>
    </div>
  );
}

export default App;
