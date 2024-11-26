import { Provider } from 'react-redux'
import { store } from './store'
import Counter from './components/Counter'
import './App.css'

function App() {

  return (
    <>
    <Provider store={store}>
      <div style={{textAlign: "center" , marginTop: "50px"}}>
        <h1>Redux Counter</h1>
        <Counter/>
      </div>
    </Provider>
    </>
  )
}

export default App
