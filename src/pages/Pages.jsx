import React from 'react'
import Home from './Home'
import Cusine from './Cusine'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/cusine' element={<Cusine/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Pages
