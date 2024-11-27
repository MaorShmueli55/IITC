import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import TodoList from './components/TodoList.jsx'

function App() {

  return (
    <>
      <div style={{textAlign: "center" , marginTop: "50px"}}>
        <h1>Redux To-Do List</h1>
        <TodoList/>
      </div>
    </>
  )
}

export default App
