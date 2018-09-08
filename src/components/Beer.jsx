import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return(
    <div className="beerInfo">
      <style jsx>{`
        .beerInfo {
          color: #FFF;
          background-color: rgba(0,0,0,0.8);
          height: 25%;
          width: 105%;
          padding-top: 3%;
        }
        li {
          list-style: none;
          display: inline-block;
          font-size: 20px;
          margin-top: -4%;
          font-weight: lighter;
        }
        a {
          color: #FFF;
        }
        `}</style>
      <ul>
        <li>{props.name}</li>
        <br/>
        <li>{props.brewer}</li>
        <br/>
        <li>{props.description}</li>
        <br/>
        <li>{props.abv}</li> |
        <li>${props.price}</li> |
        <li>{props.remaining}</li>
      </ul>
    </div>
  );
};

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default Beer;
