import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Great from './Componant/Great'
import Dashboard from './Dashboard/Dashboard';
import Counter from './Componant/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Great/>
     <Dashboard/>
     <Counter/>
    </>
  )
}

export default App
