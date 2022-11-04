import {createSlice} from '@reduxjs/toolkit';
export const TODOS_FEATURE_KEY = 'todos';
const {reducer: TodosReducer, actions} = createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: todo => {
        // 对页面传递过来的dispatch(addTodo(xxx))进行处理
        // console.log(todo); 传递过来的对象
        return {
          payload: {id: Math.random(), ...todo}
        };
      }
    }
  }
});
export const {addTodo} = actions;
export default TodosReducer;
