import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import NewBeer from './NewBeer';
import AllBeer from './AllBeer';
import Admin from './Admin';
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
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangingSelectedBeer = this.handleChangingSelectedBeer.bind(this);
  }

  handleAddingNewBeerToList(NewBeer){
  let newId = v4();
  let newMasterBeerList = Object.assign({}, this.state.masterBeerList, {newId: NewBeer});
  this.setState({masterBeerList: newMasterBeerList});
  }

  handleChangingSelectedBeer(beerId){
  this.setState({selectedBeer: beerId});
  }

  render() {
    return (
      <div>
        <style global jsx>{`
          body {
            background-image: url(${bg});
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-clip: content-box;
          }
          h1 {
            font-size: 6em;
            font-weight: bolder;
          }
          h2 {
            margin-top: -2%;
            font-size: 35px;
            margin-left: 4%;
          }
          a {
            color: #FA5900;
            margin-left: 12%;
            margin-right: -5%;
            font-weight: bolder;
            font-size: 18px;
            position: sticky;
          }
          a:hover {
            color: #FFF;
          }
          `}</style>
      <div className="Row">
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><AllBeer allBeer={this.state.masterBeerList} />} />
            <Route exact path='/newbeer' render={()=><NewBeer onAddNewBeer={this.handleAddingNewBeerToList} />} />
            <Route path='/admin' component={Admin}/>} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
