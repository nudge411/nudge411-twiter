import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';

function loginAPI() {
  // 3. 서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* login() {
  try {
    // 2. 로그인이 들어오면 API로 요청을 보낸다
    // yield call(loginAPI);
    yield delay(2000);
    // 4-1. 성공하면 실행되는 부분
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    // 4-2. 실패하면 실행되는 부분
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  // 1. 로그인이 들어오는지 기다린다
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI() {
  return axios.post('/login');
}

function* signUp() {
  try {
    // yield call(signUpAPI);
    yield delay(2000);
    throw new Error('에러!!!');
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  // 여러개의 액션을 등록할때는 all 로 묶어준다
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}
