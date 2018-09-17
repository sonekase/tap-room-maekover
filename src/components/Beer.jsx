import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  var ButtonStyle = {
    background: 'none',
    color: '#FA5900',
    borderStyle: 'none',
    fontSize: '20',
    fontWeight: 'bolder',
    marginTop: '15',
    marginLeft: '10',
  }
  var ContainStyle = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 'auto',
    width: '500',
    paddingTop: '2',
    marginTop: '75',
    paddingLeft: '10',
  }

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
       console.log(props.beerId);
      return(
      <div style={ContainStyle}>
        <h4>{props.name} | Stock | {props.remaining}<button style={ButtonStyle} type='button' onClick={()=>props.onSellBeer(props.beerId)}>SELL</button></h4>
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
  onSelectBeer: PropTypes.func,
  onSellBeer: PropTypes.func
};

export default Beer;
