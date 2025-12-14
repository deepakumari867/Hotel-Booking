import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'


const Feature = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

       <Title title='Featured Destination' />
<div className='text-gray-500 items-center text-center mt-2'>'Discover our handpicked selection of exceptional properties around the world, <br /> offering unparalleled luxury and unforgettable experiences.'</div>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>

     <button 
  onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} 
  className='mt-12 px-6 py-3 bg-white text-black rounded-md border border-black font-medium transition-all'
>
  View All Destinations
</button>

    </div>
  )
}

export default Feature
