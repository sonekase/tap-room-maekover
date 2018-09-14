import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function NewBeer(props){
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleAddingNewBeerToList(event) {
    event.preventDefault();
    props.onAddNewBeer({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value});
      _name = '';
      _brewer = '';
      _description = '';
      _abv = '';
      _price = '';
      _remaining = '';
    }

  return (
    <div className="newBeer">
      <style jsx>{`
        .newBeer {
          color: #FFF;
          background-color: rgba(0,0,0,0.8);
          width: 520px;
          height: 520px;
          margin-top: 2px;
          margin-bottom: 50%;
          padding: 5%;
          margin-left: 2%;
          position: sticky;
        }
        input {
          background-color: rgba(0,0,0,0.8);
          border-style: solid;
          border-width: 2px;
          border-color: #FFF;
          width: 350px;
          color: #FFF;
          padding: 4px;
          margin-top: 3%;
        }
        h3 {
          font-weight: lighter;
          font-size: 3em;
        }
        button {
          margin-top: 3%;
          background-color: #FA5900;
          color: #FFF;
          border: none;
          width: 20%;
          margin-left: 1.5%;
          font-weight: bolder;
        }
        a {
          margin: 2%;
          margin-top: 3%;
          color: #FA5900;
          border: none;
          width: 25%;
          margin-left: 12%;
          margin-right: -5%;
          font-size: 18px;
        }
        .home {
          background: none;
          width: 20%;
          color: #FA5900;
          font-weight: bolder;
        }
        `}</style>
      <h3>Enter New Beer</h3>
      <form onSubmit={handleAddingNewBeerToList}>
        <input
          type='text'
          id='name'
          placeholder=' Beer Name'
          ref={(input)=>{_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder=' Brewer'
          ref={(input)=>{_brewer = input;}}/>
        <input
          type='text'
          id='description'
          placeholder=' Description'
          ref={(input)=>{_description = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder=' ABV'
          ref={(input)=>{_abv = input;}}/>
        <input
            type='text'
            id='price'
            placeholder=' Price'
            ref={(input)=>{_price = input;}}/>
        <input
            type='text'
            id='remaining'
            placeholder=' Remaining'
            ref={(input)=>{_remaining = input;}}/>
        <button type='submit'>ADD</button>
        <button className="home"><Link to='/'> HOME</Link></button>
      </form>
    </div>
  );
}

NewBeer.propTypes = {
  onAddNewBeer: PropTypes.func
}

export default NewBeer;
