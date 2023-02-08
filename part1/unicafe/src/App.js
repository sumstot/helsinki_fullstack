import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Stats = (props) => {
  const total = props.good + props.neutral + props.bad
  const avg = (props.good) + (props.bad * -1) / total
  const positive = (props.good / total) * 100 + '%'

  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <StatsLine text='good' value={props.good} />
        <StatsLine text='neutral' value={props.neutral} />
        <StatsLine text='bad' value={props.bad} />
        <StatsLine text='all' value={total} />
        <StatsLine text='average' value={avg} />
        <StatsLine text='positive' value={positive} />
      </tbody>
    </table>
  )
}



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <span>
        <Button handleClick={()=> setGood(good + 1)} text="good" />
        <Button handleClick={()=> setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={()=> setBad(bad + 1)} text="bad" />
      </span>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
