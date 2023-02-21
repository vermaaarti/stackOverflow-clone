import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'

const AllRoutes = () => {
  return (
    <Routes>
         <Route exact path='/' component={<Home />} /> 
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Questions' element={<Questions />} />
    </Routes>
  )
}

export default AllRoutes