import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
import Modal from './components/Modal.jsx'

import ButtonIcon from './components/ButtonIcon.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button setCount = { setCount }>
          count is {count}
        </Button>
      </div>
      <Card>
      <h2>Title</h2>
      <p>This is some content inside the card.</p>
      </Card>
      <Modal isOpen={true}>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
      </Modal>
      <ButtonIcon>
        Click Me
      </ButtonIcon>
    </>
  )
}

export default App
