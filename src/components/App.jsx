import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import NewBeer from './NewBeer';
import AllBeer from './AllBeer';
import bg from './../img/taps.jpg';

function App(){


  return (
    <div>
      <style jsx>{`
        body {
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-clip: content-box;
        }
        `}</style>
    <div className="Row">
      <div className="col-md-8">
        <Header/>
      </div>
      <div className="col-md-4">
        <BeerList/>
      </div>
    </div>
  </div>
  );
}

export default App;
