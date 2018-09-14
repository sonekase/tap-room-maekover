import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function NewBeer(){
  return (
    <div className="newBeer">
      <style jsx>{`
        .newBeer {
          color: #FFF;
          background-color: rgba(0,0,0,0.8);
          width: 520px;
          height: 385px;
          margin-top: 2px;
          margin-bottom: 50%;
          padding: 5%;
          margin-left: 2%;
          position: sticky;
        }
        input {
          background-color: rgba(0,0,0,0.8);
          border-style: solid;
          border-width: 2px;
          border-color: #FFF;
          width: 325px;
          color: #FFF;
          padding: 4px;
          margin-top: 3%;
        }
        h3 {
          font-weight: lighter;
          font-size: 3em;
        }
        button {
          margin-top: 3%;
          background-color: #FA5900;
          color: #FFF;
          border: none;
          width: 20%;
          margin-left: 1.5%;
          font-weight: bolder;
        }
        a {
          margin: 2%;
          margin-top: 3%;
          color: #FA5900;
          border: none;
          width: 25%;
        }
        .home {
          background: none;
          width: 20%;
          color: #FA5900;
          font-weight: bolder;
        }
        `}</style>
      <h3>Enter New Beer</h3>
      <form>
        <input
          type='text'
          id='name'
          placeholder=' Beer Name'/>
        <input
          type='text'
          id='price'
          placeholder=' Price'/>
        <input
          type='text'
          id='abv'
          placeholder=' ABV'/>
        <button type='submit'>ADD</button>
        <button className="home"><Link to='/'> HOME</Link></button>
      </form>
    </div>
  );
}

export default NewBeer;
