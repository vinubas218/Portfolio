import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Head from './Head'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Head />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
