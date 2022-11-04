import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, TODOS_FEATURE_KEY} from './store/todos.slice';
const App = () => {
  const todos = useSelector(state => state[TODOS_FEATURE_KEY]);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>state</h3>
      <button onClick={() => dispatch(addTodo({name: 'ccc'}))}>go</button>
      <p>{JSON.stringify(todos)}</p>
    </div>
  );
};

export default App;
