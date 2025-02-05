import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Blog from './assets/pages/Blog'
import Contact from './assets/pages/Contact'
import Services from './assets/pages/Services'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer' // Import Footer

const App = () => {
  return (
    <div className='px-4 sm:px-[3vw] lg:px-[0vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </div>
  )
}

export default App
