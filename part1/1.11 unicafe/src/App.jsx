import { useState } from 'react'

// Crear funciones

const Button = ({text, handleClick, value}) => <button onClick={() => handleClick(value + 1)}>{text}</button>
const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={setGood} value={good}/>
      <Button text="neutral" handleClick={setNeutral} value={neutral}/>
      <Button text="bad" handleClick={setBad} value={bad}/>
      <h1>statistics</h1>
      {good + neutral + bad === 0 ? (
        <div>No feedback given</div>
        ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={good + neutral + bad}/>
            <StatisticLine text="avarage" value={(good - bad)}/>
            <StatisticLine text="positive" value={good*100/(good + neutral + bad)}/>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App