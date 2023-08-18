import { useState } from 'react'
import './App.css'
import React from 'react'
import Landing from './assets/Landing'
import Navbar from './assets/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './assets/Register'
import UpdateUser from './assets/UpdateUser'
import DetailUser from './assets/DetailUser'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/create' element={<AddUser />} />
          <Route path='/update/:id' element={<UpdateUser />} />
          <Route path='/user/:id' element={<DetailUser />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
