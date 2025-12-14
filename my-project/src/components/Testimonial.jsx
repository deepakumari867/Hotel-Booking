import React, { useRef, useState } from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import { Quote } from 'lucide-react'

const Testimonial = () => {

  const cardRefs = useRef([])
  const [tooltip, setTooltip] = useState({
    visible: false,
    name: '',
    x: 0,
    y: 0
  })

  const handleMouseMove = (e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect()

    setTooltip({
      visible: true,
      name: testimonials[index].name,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false })
  }

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-white pt-24 pb-28">

      <Title title="What Our Guests Say" />

      <div className="max-w-2xl text-center mt-4">
        <p className="text-gray-500 text-sm md:text-base">
          Real voices. Real journeys. Real comfort — trusted worldwide.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 py-16">

        {testimonials.map((t, index) => (
          <div
            key={t.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            className="relative group w-[330px] rounded-2xl p-[1px]
                       bg-gradient-to-br from-indigo-400/40 via-purple-400/30 to-pink-400/40
                       hover:scale-[1.03] transition-all duration-300"
          >

            {/* Hover Name Tooltip */}
            {tooltip.visible && tooltip.name === t.name && (
              <span
                className="absolute z-20 px-3 py-1 text-xs rounded-full
                           bg-indigo-600 text-white shadow-md pointer-events-none"
                style={{ top: tooltip.y + 12, left: tooltip.x + 12 }}
              >
                {tooltip.name}
              </span>
            )}

            {/* Card */}
            <div className="rounded-2xl bg-white p-8 h-full flex flex-col justify-between shadow-sm group-hover:shadow-xl">

              <Quote className="w-8 h-8 text-indigo-500 opacity-40 mb-4" />

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                “{t.review}”
              </p>

              {/* Stars */}
              <div className="flex items-center mt-5">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.377-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>

              {/* User */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full border"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t.address}
                    </p>
                  </div>
                </div>

                <span className="text-xs text-indigo-600 font-medium">
                  ✔ Verified Guest
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
