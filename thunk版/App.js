import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAjax_async} from './store/action';
const App = () => {
  const {starList} = useSelector(state => ({
    starList: state.starList
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAjax_async());
  }, [dispatch]);
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

export default App;
