import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>


            <div className='w-full flex flex-col md:flex-row items-start justify-between'>


                <div className='md:w-1/2 flex flex-col items-start'>
                    <Title align='left' title='Exclusive Offers' />
                    <p className='text-gray-500 text-left mt-1 leading-relaxed'>
                        Take Advantages of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                    </p>
                </div>


                <button className='flex items-center gap-2 mt-4 md:mt-0'>
                    View All Offers
                    <img
                        src={assets.arrowIcon}
                        alt="arrow-icon"
                        className='group-hover:translate-x-1 transition-all'
                    />
                </button>

            </div>


            <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>

                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        className='group relative flex flex-col items-start gap-1 p-6 rounded-xl text-white bg-no-repeat bg-cover bg-center'
                        style={{ backgroundImage: `url(${item.image})` }}
                    >

                        <p className='text-sm font-medium bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md'>
                            {item.priceOff}% OFF
                        </p>

                        <div className='mt-4'>
                            <p className='text-xl font-semibold'>{item.title}</p>
                            <p className='text-sm mt-1'>{item.description}</p>
                            <p className='text-xs text-white/70 mt-3'>Expires {item.expiry}</p>
                        </div>

                        <button className='flex items-center gap-2 font-medium cursor-pointer mt-4'>
                            View Offers
                            <img
                                className='invert group-hover:translate-x-1 transition-all'
                                src={assets.arrowIcon}
                                alt="arrow-icon"
                            />
                        </button>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default ExclusiveOffers
