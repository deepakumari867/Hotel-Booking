import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'

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

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const selectedRoom = roomsDummyData.find(room => room._id === id)
    selectedRoom && setRoom(selectedRoom)
    selectedRoom && setMainImage(selectedRoom.images[0])
  }, [id])

  return room && (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">

      {/* TITLE + BADGE */}
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-900">
          {room.hotel.name}
          <span className="text-gray-500"> ({room.roomType})</span>
        </h1>

        <span className="inline-block text-[10px] font-semibold px-2 py-0.5 bg-orange-500 text-white rounded-full">
          20% OFF
        </span>
      </div>

      {/* RATING */}
      <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
        <StarRating />
        <p>200+ reviews</p>
      </div>

      {/* ADDRESS */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
        <span>{room.hotel.address}</span>
      </div>

      {/* IMAGES */}
      <div className="flex flex-col lg:flex-row mt-8 gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt="Room"
            className="w-full h-[380px] rounded-xl shadow-lg object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Room"
              onClick={() => setMainImage(image)}
              className={`h-44 w-full rounded-xl object-cover cursor-pointer
              ${mainImage === image ? 'outline outline-2 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="flex flex-col md:flex-row justify-between mt-12 gap-10">
        <div>
          <h2 className="text-3xl font-playfair mb-4">
            Experience Luxury Like Never Before
          </h2>

          <div className="flex flex-wrap gap-3">
            {room.amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
              >
                <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                <p className="text-xs text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-2xl font-semibold text-gray-900">
          ${room.pricePerNight}
          <span className="text-sm font-normal text-gray-500"> / night</span>
        </p>
      </div>

      {/* BOOKING FORM */}
      <form className="flex flex-col md:flex-row items-end justify-between gap-6
        bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.12)]
        p-6 rounded-xl mx-auto mt-16 max-w-6xl">

        <div className="flex flex-wrap gap-6 text-gray-600">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Check-In</label>
            <input type="date" className="rounded border px-3 py-2 mt-1 outline-none" required />
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-300/70" />

          <div className="flex flex-col">
            <label className="text-sm font-medium">Check-Out</label>
            <input type="date" className="rounded border px-3 py-2 mt-1 outline-none" required />
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-300/70" />

          <div className="flex flex-col">
            <label className="text-sm font-medium">Guests</label>
            <input type="number" placeholder="1" className="w-24 rounded border px-3 py-2 mt-1 outline-none" required />
          </div>
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 active:scale-95
          transition-all text-white px-6 py-2.5 rounded-lg font-medium"
        >
          Check Availability
        </button>
      </form>

      {/* COMMON SPECIFICATIONS */}
      <div className="mt-16 space-y-6">
        {roomCommonData.map((spec, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={spec.icon} alt="" className="w-6 h-6 mt-1" />
            <div>
              <p className="text-base font-medium text-gray-900">{spec.title}</p>
              <p className="text-sm text-gray-500">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl border-y border-gray-300 my-12 py-10" />

   {/* HOSTED BY */}
<div className="flex flex-col gap-4 mt-12">
  <div className="flex items-center gap-4">
    <img
      src={
        room?.hotel?.owner?.image ||
        room?.owner?.image ||
        assets.profilePlaceholder
      }
      alt="Host"
      className="h-14 w-14 rounded-full object-cover border"
    />

    <div>
      <p className="text-base font-medium text-gray-900">
        Hosted by {room?.hotel?.owner?.name || room?.owner?.name || room.hotel.name}
      </p>

      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
        <StarRating />
        <span>200+ reviews</span>
      </div>
    </div>
  </div>

  <button
    className="w-fit px-6 py-2 border border-orange-500 text-orange-500
    rounded-lg hover:bg-orange-500 hover:text-white transition-all"
  >
    Contact Now
  </button>
</div>

     
    </div>
  )
}

export default RoomDetails
