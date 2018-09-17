import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Beer from './Beer';
import AllBeer from './AllBeer';
import NewBeer from './NewBeer';


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
          border-width: 7px;
          padding: 10px;
          width: 520px;
          height: 310px;
          position: sticky;
          margin-left: 2%;
        }
        `}</style>
        <div className="Header">
          <h1>TAP HOUSE</h1>
          <h2>Island Brews</h2>
        </div>
        <div>
          <Link to='/'>OUR BEERS</Link> <Link to='/admin'>ADMIN</Link>
        </div>
    </div>
  );
}

export default Header;
