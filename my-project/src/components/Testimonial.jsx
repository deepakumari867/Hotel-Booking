import React from 'react'
import Title from './Title'
import {testimonials} from '../assets/assets'
const Testimonial = () => {
  return (
    <div className='flex flex items-center px-6 md:px-16 lg:px-24 bg0slate-50 pt-20 pb-30'>
      <Title title="What Our Guests Say" subTitle="Discover why discrening travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."/>

       <div className="flex flex-wrap items-center  gap-6 py-16">
                {testimonials.map((testimonial, index) => (
                    <div key={index} ref={(el) => (cardRefs.current[index] = el)}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                        className="relative border border-gray-200 rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        {tooltip.visible && tooltip.text === testimonial.name && (
                            <span className="absolute px-2.5 py-1 text-sm rounded text-nowrap bg-indigo-500 text-white pointer-events-none transition-all duration-300"
                                style={{ top: tooltip.y + 8, left: tooltip.x + 8, transition: 'all 0.3s ease-out', animationDelay: '0.2s', }} >
                                {tooltip.text}
                            </span>
                        )}

                        <div className="flex flex-col items-center justify-center p-8 text-center">
                            <div className="mb-4 text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900">Very easy to integrate</h3>
                                <p className="my-4 text-sm line-clamp-3">{testimonial.message}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img className="rounded-full w-9 h-9"
                                    src={testimonial.image}
                                    alt={`${testimonial.name} profile`}
                                />
                                <div className="space-y-0.5 font-medium text-left ml-3">
                                    <p>{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Testimonial
