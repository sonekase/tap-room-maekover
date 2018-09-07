import React from 'react';
import Header from './Header';
import bg from './../img/taps.jpg';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';

function App(){


  return (
    <div>
      <style jsx>{`
        .landing {
          background-image: url(${bg});
          background-size: contain;
          background-repeat: no-repeat;
        }
        `}</style>
      <Header />
      <div className="landing">
        <Switch>
          <Route exact path='/' component={KegList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
