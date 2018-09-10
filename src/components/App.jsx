import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import Background from './Background';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import NewBeer from './NewBeer';
import AllBeer from './AllBeer';

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
