import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import NewBeer from './NewBeer';
import AllBeer from './AllBeer';
import bg from './../img/taps.jpg';
import { v4 } from 'uuid';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {
        '1': {
          name: 'Bikini Blonde',
          brewer: 'Maui Brewing Cō',
          description: 'Clean, crisp & refreshing',
          abv: '5.2%',
          price: '7',
          remaining: '20'
        },
        '2': {
          name: 'Big Swell IPA',
          brewer: 'Maui Brewing Cō',
          description: 'Tropical citrus hops burst',
          abv: '6.8%',
          price: '6',
          remaining: '60'
        },
        '3': {
          name: 'Pineapple Mana',
          brewer: 'Maui Brewing Cō',
          description: 'Maui pineapple gives sweet aroma to this tropical brew',
          abv: '4.7%',
          price: '5',
          remaining: '65'
        },
        '4': {
          name: 'Lavaman Red',
          brewer: 'Kona Brewing Cō',
          description: 'Subtle chocolate malt flavor',
          abv:  '5.9%',
          price: '7',
          remaining: '75'
        },
        '5': {
          name: 'Pipeline Porter',
          brewer: 'Kona Brewing Cō',
          description: 'Earthy complexity and smooth Kona coffee finish',
          abv:  '7.5%',
          price: '6',
          remaining: '18'
        },
        '6': {
          name: 'Lychee Lager',
          brewer: 'Kona Brewing Cō',
          description: 'Deliciously sweet-tasting lychee onolicious beer',
          abv:  '5.5%',
          price: '7',
          remaining: '58'
        }
      }
    };

  }

render() {
  return (
    <div>
      <style jsx>{`
        body {
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-clip: content-box;
        }
        `}</style>
    <div className="Row">
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><AllBeer allBeer={this.state.masterBeerList} />} />
          <Route exact path='/newbeer' component={NewBeer} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  </div>
  );
}
}

export default App;
