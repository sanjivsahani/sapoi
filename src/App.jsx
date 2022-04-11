import { useState } from 'react'
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import './App.css'
import Home from './componet/Home';
import Like from './componet/Like';
import Navtab from './componet/Navtab';

function App() {

  return (
    <BrowserRouter>
        <Navtab />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
