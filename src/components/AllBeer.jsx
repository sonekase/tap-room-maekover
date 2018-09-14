import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function AllBeer(props) {
  return(
    <div>
      <style jsx>{`
        .beerStyle {
          color: #FFF;
          width: 500px;
          height: 520px;
          margin-left: 2%;
        }
        `}</style>
      <div className="beerStyle">
        {Object.keys(props.allBeer).map(function(beerId) {
          let beer = props.allBeer[beerId];
          return <Beer name={beer.name}
            brewer={beer.brewer}
            description={beer.description}
            abv={beer.abv}
            price={beer.price}
            remaining={beer.remaining}
            key={beerId} />
        })}
      </div>
    </div>
  );
}

AllBeer.propTypes = {
  allBeer: PropTypes.object
}

export default AllBeer;
