import React from 'react';
import Header from './Header';
import bg from './../img/taps.jpg';
import KegList from './KegList';

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
        <KegList/>
      </div>
    </div>

  );
}

export default App;
