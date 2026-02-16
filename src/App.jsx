import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'


function App() {

  return (
    <div className='main'>
      <BrowserRouter>
        <div className='nav-container'>
          <Nav/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
