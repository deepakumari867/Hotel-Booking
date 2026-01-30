import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'

// OWNER
import Layout from './pages/hotelOwmer/Layout'
import Dashboard from './pages/hotelOwmer/Dashboard'
import AddRoom from './pages/hotelOwmer/AddRoom'
import ListRoom from './pages/hotelOwmer/ListRoom'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const isOwnerPath = useLocation().pathname.startsWith('/owner')
 const {showHotelReg} = useAppContext();
  return (
    <div>
      <Toaster/>
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg/>}

      <div className="min-h-[70vh]">
        <Routes>
          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* OWNER ROUTES */}
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App
