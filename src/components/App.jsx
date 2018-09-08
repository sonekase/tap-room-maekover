import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import Background from './Background';
import { Switch, Route } from 'react-router-dom';

function App(){


  return (
    <div className="Row">
      <div className="col-md-8">
        <Background/>
        <Header/>
      </div>
      <div className="col-md-4">
        <Switch>
        <Route exact path='/' component={BeerList} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
