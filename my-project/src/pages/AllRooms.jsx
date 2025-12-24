import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const StarRating = ({ rating = 4 }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.377-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ))}
  </div>
)

const CheckBox = ({ label }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
    <input type="checkbox" />
    <span className="font-light select-none">{label}</span>
  </label>
)

const RadioButton = ({ label }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
    <input type="radio" name="sortOption" />
    <span className="font-light select-none">{label}</span>
  </label>
)

const AllRooms = () => {
  const navigate = useNavigate()
  const [openFilters, setOpenFilters] = useState(true)

  const roomTypes = [
    'Single Bed',
    'Double Bed',
    'Luxury Room',
    'Family Suite',
  ]

  const priceRanges = [
    '0 – 500',
    '500 – 1000',
    '1000 – 2000',
    '2000 – 3000',
  ]

  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low',
    'Newest First',
  ]

  return (
    <div className="pt-28 px-4 md:px-16 lg:px-24 xl:px-32">
      <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>

      <p className="text-gray-500 max-w-2xl mt-3 mb-12">
        Carefully curated hotel rooms designed for comfort, elegance, and calm.
      </p>

      <div className="flex gap-10 items-start">
        {/* LEFT — ROOMS */}
        <div className="flex flex-col gap-8 flex-1">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-xl shadow-md p-4 max-w-xl hover:shadow-lg transition"
            >
              <div className="flex gap-8">
                <img
                  src={room.images?.[0]}
                  alt="room"
                  className="w-48 h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => navigate(`/rooms/${room._id}`)}
                />

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs text-gray-500">{room.hotel?.city}</p>

                    <h2 className="text-lg font-semibold">
                      {room.hotel?.name}
                    </h2>

                    <div className="flex items-center text-xs mt-1">
                      <StarRating />
                      <span className="ml-2 text-gray-400">200+ reviews</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                    <img
                      src={assets.locationIcon}
                      className="w-3.5 h-3.5"
                      alt=""
                    />
                    <span>{room.hotel?.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-3">
                    {room.amenities?.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F5FF]/70"
                      >
                        <img
                          src={facilityIcons[item]}
                          className="w-4 h-4"
                          alt=""
                        />
                        <p className="text-xs">{item}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-lg font-semibold text-gray-700 mt-4">
                    ${room.pricePerNight} / night
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — FILTERS */}
        <div className="bg-white w-80 border border-gray-300 rounded-xl text-gray-600 sticky top-32">
          <div className="flex justify-between px-5 py-3 border-b">
            <p className="font-medium text-gray-800">FILTERS</p>
            <span
              className="text-xs cursor-pointer text-indigo-600"
              onClick={() => setOpenFilters(!openFilters)}
            >
              {openFilters ? 'HIDE' : 'SHOW'}
            </span>
          </div>

          {openFilters && (
            <>
              <div className="px-5 py-4">
                <p className="font-medium mb-2">Room Type</p>
                {roomTypes.map((room, i) => (
                  <CheckBox key={i} label={room} />
                ))}
              </div>

              <div className="px-5 py-4">
                <p className="font-medium mb-2">Price Range</p>
                {priceRanges.map((range, i) => (
                  <CheckBox key={i} label={range} />
                ))}
              </div>

              <div className="px-5 py-4">
                <p className="font-medium mb-2">Sort By</p>
                {sortOptions.map((opt, i) => (
                  <RadioButton key={i} label={opt} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllRooms
