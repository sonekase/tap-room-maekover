import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){

  const beerDetail =
    <div className="beerInfo">
      <style jsx>{`
        .beerInfo {
          color: #FFF;
          background-color: rgba(0,0,0,0.8);
          height: 25%;
          width: 104%;
          padding-top: 3%;
        }
        li {
          list-style: none;
          display: inline-block;
          font-size: 20px;
          margin-top: -4%;
          font-weight: lighter;
        }
        button {
          margin-top: 1%;
          background: none;
          color: #FA5900;
          border: none;
          width: 10%;
          margin-left: 1.5%;
          font-weight: bolder;
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
    </div>;

    if (props.path ==='/admin') {
      return(
      <div className="beerInfo">
        <h2>{props.name}</h2> <button type='button' onClick={()=>props.onSelectBeer(props.beerId)}>Edit</button>
      {beerDetail}
      </div>
  );
  } else {
    return (
      <div className="beerInfo">
        {beerDetail}
    </div>
    )
  }
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  path: PropTypes.string,
  beerId: PropTypes.string,
  onSelectBeer: PropTypes.func
};

export default Beer;
