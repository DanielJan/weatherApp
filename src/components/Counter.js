import React from "react";
import { connect } from "../myRedux"
import { incrementAction, decrementAction } from "./counterStore";

const Counter = ({ value, incr, decr }) =>
(
  <div>
    <p>
      <b>{value}</b>
    </p>
    <button onClick={incr}>Increment</button>
    <button onClick={decr}>Decrement</button>
  </div>
)

const mapStateToProps = state => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = dispatch => ({
  incr: () => dispatch(incrementAction()),
  decr: () => dispatch(decrementAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)