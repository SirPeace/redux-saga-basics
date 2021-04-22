import { call, put, takeEvery } from "@redux-saga/core/effects"
import { FETCH_USERS, SET_USERS } from "../store/usersReducer"

const API_URL = "https://jsonplaceholder.typicode.com"

function* fetchUsers() {
  const response = yield call(fetch, `${API_URL}/users`)
  const users = yield response.json()

  yield put({ type: SET_USERS, payload: users })
}

export default function* usersWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsers)
}
