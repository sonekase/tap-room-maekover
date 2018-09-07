import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CurrentKeg from './CurrentKeg';

const state = {
  KegList: [
    {
      name: 'Ruby Zozzle',
      brewer: 'Hi-Wheel',
      description: 'Sparkling Wine & Grapefruit',
      abv: '6.8%',
      price: '7',
      remaining: '20'
    },
    {
      name: 'Tart N Juicy',
      brewer: 'Epic',
      description: 'Sour IPA',
      abv: '4.5%',
      price: '6',
      remaining: '60'
    },
    {
      name: 'Hamm\'s',
      brewer: 'Miller/Coors',
      description: 'American Lager',
      abv: '4.7%',
      price: '3',
      remaining: '65'
    },
    {
      name: 'Prismatic',
      brewer: 'Ninkasi',
      description: 'Juicy IPA',
      abv:  '5.9%',
      price: '6',
      remaining: '75'
    },
    {
      name: 'Juicy Haze',
      brewer: 'New Belgium',
      description: 'India Pale Ale',
      abv:  '7.5%',
      price: '6',
      remaining: '18'
    },
    {
      name: '8 Hop',
      brewer: 'New Belgium',
      description: 'Pale Ale',
      abv:  '5.5%',
      price: '6',
      remaining: '58'
    }
  ]
}

function Kegs(){

  return(
    <div>
      <br/>
      <Link to="/Ruby">Ruby Zozzle </Link>
      <br/>
      <Link to="/Tarn">Tarn N Juicy </Link>
      <br/>
      <Link to="/Hamms">Hamm's </Link>
      <br/>
      <Link to="/Prismatic">Prismatic </Link>
      <br/>
      <Link to="/Juicy">Juicy Haze </Link>
      <br/>
      <Link to="/Eight">8 Hop </Link>
      <br/>

      <Switch>
        <Route exact path='/Ruby' component={() => <CurrentKeg
          name={KegList[0].name}
          brewer={KegList[0].brewer}
          description={KegList[0].description}
          abv={KegList[0].abv}
          price={KegList[0].price}
          remaining={KegList[0].remaining} />} />
        <Route exact path='/Tarn' component={() => <CurrentKeg
          name={KegList[1].name}
          brewer={KegList[1].brewer}
          description={KegList[1].description}
          abv={KegList[1].abv}
          price={KegList[1].price}
          remaining={KegList[1].remaining} />} />
        <Route exact path='/Hamms' component={() => <CurrentKeg
          name={KegList[2].name}
          brewer={KegList[2].brewer}
          description={KegList[2].description}
          abv={KegList[2].abv}
          price={KegList[2].price}
          remaining={KegList[2].remaining} />} />
        <Route exact path='/Prismatic' component={() => <CurrentKeg
          name={KegList[3].name}
          brewer={KegList[3].brewer}
          description={KegList[3].description}
          abv={KegList[3].abv}
          price={KegList[3].price}
          remaining={KegList[3].remaining} />} />
        <Route exact path='/Juicy' component={() => <CurrentKeg
          name={KegList[4].name}
          brewer={KegList[4].brewer}
          description={KegList[4].description}
          abv={KegList[4].abv}
          price={KegList[4].price}
          remaining={KegList[4].remaining} />} />
        <Route exact path='/Eight' component={() => <CurrentKeg
          name={KegList[5].name}
          brewer={KegList[5].brewer}
          description={KegList[5].description}
          abv={KegList[5].abv}
          price={KegList[5].price}
          remaining={KegList[5].remaining} />} />
      </Switch>
    </div>
  );
}

export default KegList;
