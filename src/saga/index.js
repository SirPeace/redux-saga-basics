import { all } from "redux-saga/effects"
import counterWatcher from "./counterWatcher"
import usersWatcher from "./usersWatcher"

export default function* rootWatcher() {
  yield all([counterWatcher(), usersWatcher()])
}
