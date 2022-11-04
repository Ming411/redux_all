import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadTodos, TODOS_FEATURE_KEY} from './store/todos.slice';
const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state[TODOS_FEATURE_KEY]);
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);
  return (
    <div>
      <h3>state</h3>
      <p>{JSON.stringify(todos)}</p>
    </div>
  );
};

export default App;
