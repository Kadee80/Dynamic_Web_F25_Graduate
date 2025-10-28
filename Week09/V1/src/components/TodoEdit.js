import {useState} from 'react'

const TodoEdit = (props) => {
  const {todo, onSubmit} = props
  // set the initial value of our form input (called title) to the existing todo.title text
  const [title, setTitle] = useState(todo.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(todo.id, title)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={title} />
        <button>Update</button>
      </form>
    </div>
  )
}

export default TodoEdit
