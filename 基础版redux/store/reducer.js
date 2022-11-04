/* eslint-disable import/no-anonymous-default-export */
export default (state = 10, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state + action.payload;
    default:
      return state;
  }
};
