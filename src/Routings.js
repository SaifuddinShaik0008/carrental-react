import React from 'react'
import Home from './PAGES/Home'
import Detail from './PAGES/Detail'
import Contact from './PAGES/Contact'
import Booking from './PAGES/Booking'

import { Routes, Route } from'react-router-dom'

const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Contact" element={<Contact />} />
    
        </Routes>
    </div>
  )
}

export default Routings