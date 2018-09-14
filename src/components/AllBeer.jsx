import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

const state = {
  masterKegList: [
    {
      name: 'Bikini Blonde',
      brewer: 'Maui Brewing Cō',
      description: 'Clean, crisp & refreshing',
      abv: '5.2%',
      price: '7',
      remaining: '20'
    },
    {
      name: 'Big Swell IPA',
      brewer: 'Maui Brewing Cō',
      description: 'Tropical citrus hops burst',
      abv: '6.8%',
      price: '6',
      remaining: '60'
    },
    {
      name: 'Pineapple Mana',
      brewer: 'Maui Brewing Cō',
      description: 'Maui pineapple gives sweet aroma to this tropical brew',
      abv: '4.7%',
      price: '5',
      remaining: '65'
    },
    {
      name: 'Lavaman Red',
      brewer: 'Kona Brewing Cō',
      description: 'Subtle chocolate malt flavor',
      abv:  '5.9%',
      price: '7',
      remaining: '75'
    },
    {
      name: 'Pipeline Porter',
      brewer: 'Kona Brewing Cō',
      description: 'Earthy complexity and smooth Kona coffee finish',
      abv:  '7.5%',
      price: '6',
      remaining: '18'
    },
    {
      name: 'Lychee Lager',
      brewer: 'Kona Brewing Cō',
      description: 'Deliciously sweet-tasting lychee onolicious beer',
      abv:  '5.5%',
      price: '7',
      remaining: '58'
    }
  ]
}

function AllBeer(props){

  return(
    <div>
      <style jsx>{`
          .Display {
            height: 500px;
            width: 500px;
            margin-left: 2%;

          }
      `}</style>
    <div className="Display">
      {state.masterKegList.map((entry, index) =>
        <Beer name={entry.name}
          brewer={entry.brewer}
          description={entry.description}
          abv={entry.abv}
          price={entry.price}
          remaining={entry.remaining}
          key={index} />
      )}
    </div>
  </div>
  );
}

AllBeer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
}

export default AllBeer;
