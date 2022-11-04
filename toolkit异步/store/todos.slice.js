import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const TODOS_FEATURE_KEY = 'todos';

export const loadTodos = createAsyncThunk('todos/loadTodos', (payload, thunkAPI) => {
  axios.get('http://localhost:5000/stars').then(response => {
    thunkAPI.dispatch(addTodo(response.data));
  });
});

const {reducer: TodosReducer, actions} = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }
  }
});
export const {addTodo} = actions;
export default TodosReducer;
