import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center  px-4 md:px-16 lg:px-24 xl:px-32 gap-6 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
     <p class="text-sm uppercase bg-[#49B9FF] tracking-wide px-2 rounded-full mt-20 py-1">
    The Ultimate Hotel Experience
  </p>

  <h1 class="text-5xl md:font-extrabold font-playflair  mb-3">
    Stay Where Comfort Meets Paradise
  </h1>

  <p class=" text-lg max-w-130 mt-2 md-text-base">
    Sun-kissed mornings, peaceful nights, and hospitality that feels like home — <br />
    welcome to a stay you’ll never forget.
  </p>

  <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />

                <datalist id='destinations'>
                    {cities.map((city,index)=>(
<option value={city} key={index}>

</option>
                    ))}
                    </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                 <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                   <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
               <img src={assets.calenderIcon} alt="" className='h-7'/>
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Hero
