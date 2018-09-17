import React from 'react';
import PropTypes from 'prop-types';
import NewBeer from './NewBeer';
import AllBeer from './AllBeer';
import Beer from './Beer';
import { Link } from 'react-router-dom';

function Admin(){
  return (
  <div>
    <style jsx>{`
      .newBeer {
        color: #FFF;
        background-color: rgba(0,0,0,0.8);
        width: 520px;
        height: 320px;
        margin-left: 2%;
        padding: 2%;
      }
      `}</style>
    <div className="newBeer">
      <h2>Admin</h2>
      <Link to='/newbeer'>ADD NEW BEER</Link> <Link to="/">HOME</Link>
    </div>
  </div>
);
}

export default Admin;
