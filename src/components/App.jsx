import React from 'react';
import Header from './Header';
import bg from './../img/taps.jpg';

function App(){
  var containerStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.4)'
  }
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
      </div>
    </div>

  );
}

export default App;
