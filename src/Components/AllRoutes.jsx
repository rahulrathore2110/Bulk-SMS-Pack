import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import AboutUs from '../Pages/AboutUs'
import ContactUs from '../Pages/ContactUs'
import Blog from '../Pages/Blog'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import NoPageFound from '../Pages/NoPageFound'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NoPageFound />}></Route>
    </Routes>
  )
}

export default AllRoutes;