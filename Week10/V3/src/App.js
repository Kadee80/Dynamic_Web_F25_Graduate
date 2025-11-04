import {useEffect, useContext} from 'react'
import TodoContext from './context/todos'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const {fetchTodos} = useContext(TodoContext)

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
