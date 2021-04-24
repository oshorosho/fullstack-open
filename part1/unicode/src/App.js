import React, { useState } from 'react'

const Button = ({ text, setFunction }) => <button onClick={setFunction}>{text}</button>

const Stat = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;

  if (all == 0) {
    return (<p>No feedback given</p>);
  }
  return (
    <div>
      <table>
        <Stat text='good' value={good} />
        <Stat text='neutral' value={neutral} />
        <Stat text='bad' value={bad} />
        <Stat text='all' value={all} />
        <Stat text='average' value={average} />
        <Stat text='positive' value={positive} />
      </table>
    </div>
  );
}
const App = () => {

  const [goodCount, setGood] = useState(0);
  const [neutralCount, setNeutral] = useState(0);
  const [badCount, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" setFunction={() =>
        setGood(goodCount + 1)
      } />
      <Button text="neutral" setFunction={() =>
        setNeutral(neutralCount + 1)
      } />
      <Button text="bad" setFunction={() =>
        setBad(badCount + 1)
      } />
      <h1>statistics</h1>
      <Statistics good={goodCount} bad={badCount} neutral={neutralCount} />
    </div>
  )
}
/*
<Button text="good" setFunction={() => setGood(goodCount + 1)} />
 <Button text="neutral" setFunction={() => setNeutral(neutralCount + 1)} />
      <Button text="bad" setFunction={() => setBad(badCount + 1)} />
<p>neutral {neutralCount}</p>
      <p>bad {badCount}</p>
*/
// const App = () => {
//   return (
//     <p>terst</p>
//   )
// }
export default App;
