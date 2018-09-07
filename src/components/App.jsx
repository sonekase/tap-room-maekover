import React from 'react';
import Header from './Header';
import bg from './../img/taps.jpg';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';

function App(){

  return (
    <div>
      <style jsx>{`
        body {
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
        }
        `}</style>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' component={BeerList} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
