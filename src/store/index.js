import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import rootWatcher from "../saga"
import counterReducer from "./counterReducer"
import usersReducer from "./usersReducer"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
