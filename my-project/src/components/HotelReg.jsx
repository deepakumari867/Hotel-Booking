import React from 'react'
import { assets } from '../assets/assets'

// Cities list (FIXED ERROR)
const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Hyderabad',
  'Kolkata'
]

const HotelReg = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      
      <form className="relative flex w-full max-w-4xl bg-white rounded-xl overflow-hidden">
        
        {/* LEFT IMAGE */}
        <img
          src={assets.regImage}
          alt="Register Hotel"
          className="w-1/2 object-cover hidden md:block"
        />

        {/* RIGHT CONTENT */}
        <div className="relative w-1/2 p-6 max-md:w-full">

          {/* CLOSE ICON */}
          <img
            src={assets.closeIcon}
            alt="Close"
            className="absolute top-4 right-4 w-4 cursor-pointer"
          />

          <p className="text-xl font-semibold mb-4">
            Register Your Hotel
          </p>

          {/* HOTEL NAME */}
          <div className="w-full mt-3">
            <label className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* PHONE */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">
              Phone
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* ADDRESS */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">
              Address
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* CITY SELECT */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label className="font-medium text-gray-500">
              City
            </label>
            <select
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white mr-auto px-6 py-2 rounded mt-6"
          >
            Register
          </button>

        </div>
      </form>
    </div>
  )
}

export default HotelReg
