import React from 'react'
import LandingPage from './components/LandingPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
