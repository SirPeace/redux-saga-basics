import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import {
  ASYNC_DECREMENT_COUNTER,
  ASYNC_INCREMENT_COUNTER,
} from "./store/counterReducer"
import { FETCH_USERS } from "./store/usersReducer"

const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
`

function App({ inc, dec, fetchUsers, counter, users }) {
  const [loading, setLoading] = React.useState(false)

  const handleFetchClick = () => {
    if (users.length > 0) return

    fetchUsers()
    setLoading(true)
  }

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Saga async actions</h1>
      <h2>{counter}</h2>
      <p>
        <Button onClick={inc}>+</Button>
        <Button onClick={dec}>-</Button>
        <Button onClick={handleFetchClick}>Fetch</Button>
      </p>
      {loading ? (
        users.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <pre>{JSON.stringify(users, null, 4)}</pre>
        )
      ) : null}
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.counter,
  users: state.users.users,
})

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch({ type: ASYNC_INCREMENT_COUNTER }),
  dec: () => dispatch({ type: ASYNC_DECREMENT_COUNTER }),
  fetchUsers: () => dispatch({ type: FETCH_USERS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
