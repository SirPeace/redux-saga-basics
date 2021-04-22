const initialState = {
  counter: 0,
}

export const INCREMENT_COUNTER = "INCREMENT_COUNTER"
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"
export const ASYNC_INCREMENT_COUNTER = "ASYNC_INCREMENT_COUNTER"
export const ASYNC_DECREMENT_COUNTER = "ASYNC_DECREMENT_COUNTER"

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { counter: state.counter + 1 }
    case DECREMENT_COUNTER:
      return { counter: state.counter - 1 }
    default:
      return state
  }
}
