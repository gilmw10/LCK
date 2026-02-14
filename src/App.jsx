import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'


function App() {

  return (
    <div className='main'>
      <BrowserRouter>
        <div className='nav-container'>
          <Nav/>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
