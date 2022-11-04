import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from './store/action';
const App = ({counter, increment, decrement}) => {
  return (
    <div>
      <h3>state</h3>
      <button onClick={() => increment()}>+1</button>
      <span>{counter}</span>
      <button onClick={() => decrement()}>-1</button>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
});
const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
