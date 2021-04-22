import { put, takeEvery } from "redux-saga/effects"
import {
  ASYNC_DECREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../store/counterReducer"

const delay = ms => new Promise(res => setTimeout(res, ms))

function* asyncIncrementWorker() {
  yield delay(1000)
  yield put({ type: INCREMENT_COUNTER })
}

function* asyncDecrementWorker() {
  yield delay(1000)
  yield put({ type: DECREMENT_COUNTER })
}

export default function* counterWatcher() {
  yield takeEvery(ASYNC_INCREMENT_COUNTER, asyncIncrementWorker)
  yield takeEvery(ASYNC_DECREMENT_COUNTER, asyncDecrementWorker)
}
