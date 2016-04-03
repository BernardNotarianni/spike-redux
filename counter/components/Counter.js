import React, { PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>+</button>
    {value}
    <button onClick={onDecrement}>-</button>
  </div>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
