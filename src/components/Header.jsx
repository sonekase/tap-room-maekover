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
        h1 {
          font-size: 6em;
          font-weight: bolder;
        }
        h2 {
          margin-top: -2%;
          font-size: 35px;
          margin-left: 4%;
        }
        a {
          color: #FA5900;
          margin-left: 12%;
          margin-right: -5%;
          font-weight: bolder;
          font-size: 18px;
          position: sticky;
        }
        a:hover {
          color: #FFF;
        }
        `}</style>
        <div className="Header">
          <h1>TAP HOUSE</h1>
          <h2>Island Brews</h2>
        </div>
        <div>
          <Link to='/'>BEER LIST</Link> | <Link  to='/newbeer'> NEW BEER</Link>
        </div>
    </div>
  );
}

export default Header;
