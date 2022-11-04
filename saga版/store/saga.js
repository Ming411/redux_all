import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {getAjaxSuccess} from './action';
function* handleGetCategory() {
  try {
    let response = yield axios.get('http://localhost:5000/stars');
    console.log(response);
    yield put(getAjaxSuccess(response.data));
  } catch (error) {}
}

export default function* categorySaga() {
  yield takeEvery('getStars', handleGetCategory);
}
