import {useReducer} from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'

const reducer = (state, action) => {
  // if (action.type === 'increment-count') {
  //   return {
  //     // first spread o copy paste all key values from current state
  //     ...state,
  //     // then we override values one by one
  //     count: state.count + 1,
  //   }
  // }
  // return state
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        // first spread o copy paste all key values from current state
        ...state,
        // then we override values one by one
        count: state.count + 1,
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

const CounterPage = ({initialCount}) => {
  // const {inititalCount} = props
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const handleIncrement = () => {
    // setCount((prev) => prev + 1)
    // setCount(count + 1)
    // NO count = count + 1
    dispatch({type: INCREMENT_COUNT})
  }

  const handleDecrement = () => {
    // setCount(count - 1)
    dispatch({type: DECREMENT_COUNT})
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value || 0)
    // setValueToAdd(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // setCount(count + valueToAdd)
    // setValueToAdd(0)
  }
  return (
    <div>
      <Panel className="m-4">
        <h1 className="text-xl mb-4">Count is currently: {state.count}</h1>

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
            value={state.valueToAdd || ''}
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
