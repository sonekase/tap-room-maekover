import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return(
    <div className="infoBg">
      <style jsx>{`
        .infoBg {
          font-size: 20px;
          padding: 20px;
        }
        li {
          list-style: none;
        }
        `}</style>
      <ul>
        <li>{props.name}</li>
        <li>{props.brewer}</li>
        <li>{props.description}</li>
        <li>{props.abv}</li>
        <li>{props.price}</li>
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
