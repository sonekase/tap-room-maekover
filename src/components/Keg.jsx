import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  var kegStyle = {
    padding: '10',
    height: '350',
    width: '350',
  }
  return (
    <div style={kegStyle}>
      <h3>{props.name}</h3>
      <p>{props.brewer}</p>
      <p>{props.description}</p>
      <p>{props.abv}</p>
      <p>{props.price}</p>
      <p>{props.remaining}</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default Keg;
