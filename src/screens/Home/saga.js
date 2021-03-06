import {takeLatest, call, put} from 'redux-saga/effects';
//actions

import {
  fetchActionMoviesRequest,
  fetchRomanceMoviesRequest,
  fetchHorrorMoviesRequest,
  fetchTrendingMoviesRequest,
  fetchGenreListRequest,
  fetchMovieByGenreIdRequest,
  fetchMovieTrailerUrlRequest,
} from './actions';
//axios
import axios from '../../../api/axios';
import {actionTypes, ACTION_PREFIX} from './constants';
import {createActionString} from '../../utils/reduxactions';
import requests from '../../../api/requests';

// axios call
const fetchCall = ({payload}) => {
  return axios
    .get(payload)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};
const fetchGenericMovieByIdCall = ({payload}) => {
  return axios
    .get(payload)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};
const fetchMovieTrailer = ({payload}) => {
  return axios
    .get(payload)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

function* fetchActionMovieData(action) {
  const url = requests.getActionMovies;
  const response = yield call(fetchCall, {
    payload: url,
  });
  if (response && response.results) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ACTION_MOVIES_SUCCESS,
      ),
      payload: response.results,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ACTION_MOVIES_FAILURE,
      ),
      payload: {error: 'Something Went Wrong'},
    });
  }
}
function* fetchRomanceMovieData(action) {
  const url = requests.getRomanceMovies;
  const response = yield call(fetchCall, {
    payload: url,
  });
  if (response && response.results) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
      ),
      payload: response.results,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
      ),
      payload: {error: 'Something Went Wrong'},
    });
  }
}
function* fetchHorrorMovieData(action) {
  const url = requests.getHorrorMovies;
  const response = yield call(fetchCall, {
    payload: url,
  });
  if (response && response.results) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_HORROR_MOVIES_SUCCESS,
      ),
      payload: response.results,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_HORROR_MOVIES_FAILURE,
      ),
      payload: {error: 'Something Went Wrong'},
    });
  }
}
function* fetchTrendingMovieData(action) {
  const url = requests.getTrending;
  const response = yield call(fetchCall, {
    payload: url,
  });
  if (response && response.results) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
      ),
      payload: response.results,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_TRENDING_MOVIES_FAILURE,
      ),
      payload: {error: 'Something Went Wrong'},
    });
  }
}

function* fetchGenreData(action) {
  const url = requests.getGenreList;
  const response = yield call(fetchCall, {
    payload: url,
  });
  if (response && response.genres) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_GENRE_LIST_SUCCESS,
      ),
      payload: response.genres,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_GENRE_LIST_FAILURE,
      ),
      payload: response,
    });
  }
}

function* fetchMovieByGenreId(action) {
  const url = requests.getGenericDiscoverList;
  const response = yield call(fetchGenericMovieByIdCall, {
    payload: url.replace(':id', action.payload),
  });
  if (response) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_MOVIE_BY_GENRE_ID_SUCCESS,
      ),
      payload: response.results,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_MOVIE_BY_GENRE_ID_FAILURE,
      ),
      payload: response,
    });
  }
}

function* fetchMovieTrailerUrl(action) {
  const url = requests.getVideoTrailer;
  const response = yield call(fetchMovieTrailer, {
    payload: url.replace(':movieId', action.payload),
  });
  if (response) {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_MOVIE_TRAILER_URL_SUCCESS,
      ),
      payload: response.results[0]?.key,
    });
  } else {
    yield put({
      type: createActionString(
        ACTION_PREFIX,
        actionTypes.FETCH_MOVIE_TRAILER_URL_FAILURE,
      ),
      payload: response,
    });
  }
}

function* testSaga() {
  yield takeLatest(fetchActionMoviesRequest, fetchActionMovieData);
  yield takeLatest(fetchRomanceMoviesRequest, fetchRomanceMovieData);
  yield takeLatest(fetchHorrorMoviesRequest, fetchHorrorMovieData);
  yield takeLatest(fetchTrendingMoviesRequest, fetchTrendingMovieData);
  yield takeLatest(fetchGenreListRequest, fetchGenreData);
  yield takeLatest(fetchMovieByGenreIdRequest, fetchMovieByGenreId);
  yield takeLatest(fetchMovieTrailerUrlRequest, fetchMovieTrailerUrl);
}

export default testSaga;
