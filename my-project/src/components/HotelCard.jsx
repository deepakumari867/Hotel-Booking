import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room,index}) => {
  return (
 <Link 
  to={`/rooms/${room._id}`} 
  onClick={() => scrollTo(0, 0)} 
  key={room._id}
  className="block max-w-[280px] w-full bg-white rounded-xl overflow-hidden shadow-md"
>
  <div className="relative">
    <img
      src={room.images[0]}
      alt=""
      className="w-full h-48 object-cover rounded-xl"
    />

    {index % 2 === 0 && (
      <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
        Best Seller
      </p>
    )}
  </div>
<div>
    <div className='flex item-center justify-between mx-2 mt-2'>
        <p className='font-playflair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
        <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt="star-icon" />4.5
        </div>
    </div>

    <div className='flex items-center mx-2 gap-1 text-sm'>
        <img src={assets.locationIcon} alt="star-icon" />
        <span> {room.hotel.address} </span>
    </div>
    <div className='flex mx-6 mt-4 items-center justify-between'>
        <p> <span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>

 <button className="px-3 py-1.5 text-xs font-medium border border-black shadow-sm rounded-md">
  Book Now
</button>


    </div>
</div>
   </Link>
  )
}

export default HotelCard
