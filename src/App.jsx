import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollHandler from './components/ScrollHandler'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <div className='main' style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <BrowserRouter>
        <Nav/>
        <ScrollHandler />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App