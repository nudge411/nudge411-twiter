import { all, fork, takeLatest, takeEvery, call, put, take } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';
function loginAPI() {
  // 3. 서버에 요청을 보내는 부분
}

function* login() {
  try {
    // 2. 로그인이 들어오면 API로 요청을 보낸다
    yield call(loginAPI);
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
  yield take(LOG_IN_REQUEST);
  yield put({
    type: LOG_IN_SUCCESS,
  });
  //   yield takeLatest(LOG_IN, login);
}

function* watchSignUp() {}

export default function* userSaga() {
  // 여러개의 액션을 등록할때는 all 로 묶어준다
  yield all([watchLogin(), watchSignUp()]);
}
