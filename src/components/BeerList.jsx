import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Beer from './Beer';

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
      price: '5',
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

function BeerList(){
  var linkStyle = {
    color: '#FA5900',
    marginLeft: '18',
    marginRight: '18',
    fontWeight: 'bolder',
    fontSize: '16',
  }

  return(
    <div>
      <Link style={linkStyle} to="/">BEER LIST</Link> | <Link style={linkStyle} to="/cheep-beer">$5 BEER</Link> | <Link style={linkStyle}  to="/low-beer">-10 PINTS</Link>

    <div>
      {state.masterKegList.map((entry, index) =>
        <Beer name={entry.name}
          brewer={entry.brewer}
          description={entry.description}
          abv={entry.abv}
          price={entry.price}
          remaining={entry.remaining}
          key={index} />
      )}
      <Switch>
        <Route exact path='/cheep-beer' component={() => <Beer
          name={masterKegList[2].name}
          brewer={masterKegList[2].brewer}
          description={masterKegList[2].description}
          abv={masterKegList[2].abv}
          price={masterKegList[2].price}
          remaining={masterKegList[2].remaining} />} />
        <Route exact path='/low-beer' component={() => <Beer
          name={masterKegList[5].name}
          brewer={masterKegList[5].brewer}
          description={masterKegList[5].description}
          abv={masterKegList[5].abv}
          price={masterKegList[5].price}
          remaining={masterKegList[5].remaining} />} />
        </Switch>
    </div>
  </div>
  );
}

export default BeerList;
