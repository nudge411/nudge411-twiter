import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
// 넥스트에서 store 를 porps로 전달해주기 위함
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout';
import rootSaga from '../sagas';

// 리액트와 리덕스를 연결하는 lib, store를 관리함

import reducer from '../reducers';

const NodeBird = ({ Component, store }) => (
  <>
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  </>
);
// 렌더링 될 수 있는 모든것.
NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

// 고위함수 : 기능을 확장한다.
// NodeBird 에 props로 store를 넣어준다.
const configureStore = (initialState, options) => {
  // 리덕스에 미들웨어 기능을 추가하기 위함
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(NodeBird);
