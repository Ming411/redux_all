import axios from 'axios';
export const getAjax_async = () => async dispatch => {
  let res = await axios.get('http://localhost:5000/stars');
  dispatch(getAjax(res.data));
};
export const getAjax = payload => ({
  type: 'getStars',
  payload
});
