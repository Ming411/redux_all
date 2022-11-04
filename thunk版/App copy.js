import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from './store/action';
const App = ({starList, getAjax_async}) => {
  useEffect(() => {
    getAjax_async();
  }, [getAjax_async]);
  return (
    <div>
      <h3>state</h3>
      <ul>
        {starList.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  starList: state.starList
});
const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
