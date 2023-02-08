import {useState} from 'react'

const MostVotes = ({anecdotes, votes}) => {
  const mostVotes = Math.max(...votes)
  const mostVotesIndex = votes.indexOf(mostVotes)
  if (mostVotes === 0)
    return(
      <div>no votes yet</div>
    )
  return (
    <div>
      <h1>the anecdote with the most votes is</h1>
      <div>{anecdotes[mostVotesIndex]}</div>
      <div>has {mostVotes} votes</div>
    </div>
  )
}

function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleVoteClick = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }
  console.log(votes)
  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={()=> setSelected(Math.floor(Math.random() * (8 - 0)) + 0)}>new anecdote</button>
      <button onClick={handleVoteClick}>vote</button>
      <MostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  );
}

export default App;
