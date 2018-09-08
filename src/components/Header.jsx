import React from 'react';

function Header() {
  return (
    <div>
      <style jsx>{`
        .Header {
          color: #FFF;
          font-family: sans-serif;
          margin-top: 25%;
          border-style: solid;
          border-color: #FFF;
          border-width: thick;
          padding: 10px;
          width: 50%;
          position: sticky;
        }
        h1 {
          font-size: 5em;
        }
        h2 {
          margin-top: -5%;
          font-size: 35px;
          margin-left: 4%;
        }
        `}</style>
        <div className="Header">
          <h1>TAP HOUSE</h1>
          <h2>Artisanal Brewery</h2>
        </div>
    </div>
  );
}

export default Header;
