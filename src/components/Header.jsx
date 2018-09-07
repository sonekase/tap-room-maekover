import React from 'react';

function Header() {
  return (
    <div>
      <style jsx>{`
        .App {
          float: left;
          color: #FFF;
          font-family: sans-serif;
          margin-top: 35%;
          position: sticky;
          border-style: solid;
          border-color: #FFF;
          padding: 10px;
        }
        h1 {
          font-size: 7em;
        }
        h2 {
          margin-top: -5%;
          font-size: 40px;
          margin-left: 4%;
        }
        `}</style>
        <div className="App">
          <h1>TAP HOUSE</h1>
          <h2>Artisanal Brewery</h2>
        </div>
    </div>
  );
}

export default Header;