import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Education from '../pages/Education'
import Project from '../pages/Project'
import Contact from '../pages/Contact'

const Layout = () => {
  return (
    <div className='w-screen h-screen overflow-auto bg_pallet flex items-center flex-col pt-5'>
      <Header />
      <Routes>
        <Route index Component={Home} />
        <Route path='about' Component={About} />
        <Route path='education' Component={Education} />
        <Route path='projects' Component={Project} />
        <Route path='contact' Component={Contact} />
      </Routes>
    </div>
  )
}

export default Layout