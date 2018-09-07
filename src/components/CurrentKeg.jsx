import React from 'react';
import PropTypes from 'prop-types';

function CurrentKeg(props){
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.brewer}</h3>
      <h3>{props.description}</h3>
      <h3>{props.abv}</h3>
      <h3>{props.price}</h3>
      <h3>{props.remaining}</h3>
    </div>
  );
}

CurrentKeg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default CurrentKeg;
