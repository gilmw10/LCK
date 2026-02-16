import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Team from './components/Team'


function App() {

  return (
    <div className='main'>
      <BrowserRouter>
        <div className='nav-container'>
          <Nav/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/team" element={<Team/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
