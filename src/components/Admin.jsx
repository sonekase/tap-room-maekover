import React from 'react';
import PropTypes from 'prop-types';
import NewBeer from './NewBeer';
import AllBeer from './AllBeer';
import Beer from './Beer';
import { Link } from 'react-router-dom';

function Admin(props){
  return (
  <div>
    <style jsx>{`
      .newBeer {
        color: #FFF;
        background-color: rgba(0,0,0,0.8);
        width: 520px;
        height: 175px;
        margin-left: 2%;
        padding: 2%;
      }
      .AdminButton {
        background: #50c3e0;
        border-style: none;
      }
      `}</style>
    <div className="newBeer">
      <h2>Admin</h2>
      <button className="AdminButton"><Link to='/newbeer'>ADD NEW BEER</Link></button> <Link to="/">HOME</Link>
      <AllBeer allBeer={props.allBeer}
               path={props.path}
               onSellBeer={props.onSellBeer}
               />
    </div>
  </div>
);
}

Admin.propTypes = {
  allBeer: PropTypes.object,
  path: PropTypes.string,
  onSellBeer: PropTypes.func,
  beerId: PropTypes.string
}

export default Admin;
