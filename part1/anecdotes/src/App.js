import React, { useState } from 'react'

const Button = ({ doStuff, text }) => <button onClick={doStuff}>{text}</button>

const largest = (points) => {
  console.log(points);
  let max = -1;
  let pos = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] > max) {
      max = points[i];
      pos = i;
    }
  }
  return pos;
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  const [selected, setSelected] = useState(0);
  const [points, setVotes] = useState(Array(anecdotes.length).fill(0));
  const copy = [...points];
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      {points[selected]} votes.<br />
      <Button doStuff={() => {
        const value = Math.floor((Math.random() * 10)) % 6;
        console.log(value);
        setSelected(value);
      }} text='Next Anecdote' />

      <Button doStuff={() => {
        copy[selected]++;
        setVotes(copy);
      }} text='Vote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[largest(points)]}

    </div>
  )
}

export default App