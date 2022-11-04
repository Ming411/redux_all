export const getAjax = () => ({
  type: 'getStars'
});
export const getAjaxSuccess = payload => ({
  type: 'getStarsSuccess',
  payload
});
