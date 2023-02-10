import React from 'react'

const Total = ({parts}) => {
  console.log(parts)
  const total = parts.reduce((s, p) => s += p.exercises, 0)
  return (
    <p>
      {total}
    </p>
  )
}

export default Total
