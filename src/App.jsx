import TodoItemTwo from './component/TodoItemTwo'
import './App.css'
import TodoItemContainer from './component/TodoItemContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TodoItemContainer />
      <TodoItemTwo/>
    </div>
    
  )
}

export default App
