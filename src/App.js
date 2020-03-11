import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import changeNumber from './action/changeNumber';
import decreseNumber from './action/decreseNumber';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My lucky number is {props.number}</h1>
        <button
          onClick={() => {
            props.dispatch(changeNumber(props.number));
          }}
        >
          Increment
        </button>
        <br />
        <button
          onClick={() => {
            props.dispatch(decreseNumber(props.number));
          }}
        >
          Decrement
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(App);
