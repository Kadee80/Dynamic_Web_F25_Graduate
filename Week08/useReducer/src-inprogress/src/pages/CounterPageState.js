import {useState} from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const CounterPage = ({initialCount}) => {
  // const {inititalCount} = props
  const [count, setCount] = useState(initialCount)
  const [valueToAdd, setValueToAdd] = useState(0)

  const handleIncrement = () => {
    // setCount((prev) => prev + 1)
    setCount(count + 1)
    // NO count = count + 1
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value || 0)
    setValueToAdd(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCount(count + valueToAdd)
    setValueToAdd(0)
  }
  return (
    <div>
      <Panel className="m-4">
        <h1 className="text-xl mb-4">Count is currently: {count}</h1>

        <div className="flex flex-row">
          <Button success outline rounded onClick={handleIncrement}>
            Increment
          </Button>
          <Button danger outline rounded onClick={handleDecrement}>
            Decrement
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Add a custom amount to the counter</label>
          <input
            type="number"
            onChange={handleChange}
            value={valueToAdd || ''}
            className="p-1 m-4 bg-slate-50 border border-slate-300"
          />
          <Button primary outline rounded>
            Add Custom Amount
          </Button>
        </form>
      </Panel>
    </div>
  )
}

export default CounterPage
