import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const StarRating = ({ rating = 4 }) => {
  return (
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
}

const AllRooms = () => {
  const navigate = useNavigate()

  return (
    <div className="pt-28 px-4 md:px-16 lg:px-24 xl:px-32">

      {/* Heading */}
      <h1 className="font-playfair text-4xl md:text-[40px]">
        Hotel Rooms
      </h1>

      {/* Paragraph after heading */}
      <p className="text-gray-500 max-w-2xl mt-3 mb-12">
        Discover thoughtfully designed hotel rooms that blend comfort,
        elegance, and modern living — crafted for travelers who value both
        peace and style.
      </p>

      {/* Rooms List */}
      <div key={room._id} className="flex flex-col gap-8">
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex gap-5 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            {/* Small Image on Left */}
            <img
              src={room.images?.[0]}
              alt="room"
              className="w-40 h-32 object-cover rounded-lg cursor-pointer"
              onClick={() => {
                navigate(`/rooms/${room._id}`)
                window.scrollTo(0, 0)
              }}
            />

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs text-gray-500">
                  {room.hotel?.city}
                </p>

                <h2
                  className="text-lg font-semibold cursor-pointer hover:underline"
                  onClick={() => {
                    navigate(`/rooms/${room._id}`)
                    window.scrollTo(0, 0)
                  }}
                >
                  {room.hotel?.name}
                </h2>

                <div className="flex items-center text-xs mt-1">
                  <StarRating rating={4} />
                  <span className="ml-2 text-gray-400">
                    200+ reviews
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                <img
                  src={assets.locationIcon}
                  alt="location"
                  className="w-3.5 h-3.5"
                />
                <span>{room.hotel?.address}</span>
              </div>

              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
               {room.amenities.map((item,index)=>(
                <div key={index} className='flex item-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF
               ]/70'>
                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                    <p className='text-xs'>{item}</p>
                </div>
               )
            )}

              </div>
{/* room price per night */}
              <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}/night</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AllRooms
