import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl
                    px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30
                    bg-gray-900 text-white">

      {/* Title */}
      <Title title="Stay Inspired" />

      {/* Subtitle – separate flex container */}
      <div className="flex items-center justify-center max-w-2xl mt-3 text-center">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Join our Newsletter and be the first to discover new destinations,
          exclusive offers, and travel inspiration.
        </p>
      </div>

      {/* Input + Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full">
        <input
          type="email"
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded
                     outline-none w-full max-w-md text-sm placeholder:text-gray-400"
          placeholder="Enter your email"
        />

        <button
          className="flex items-center justify-center gap-2 group
                     bg-white text-black px-5 md:px-7 py-2.5 rounded
                     active:scale-95 transition-all font-medium"
        >
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-3.5 invert group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Footer text */}
      <p className="text-gray-500 mt-6 text-xs text-center max-w-xl">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>

    </div>
  )
}

export default NewsLetter
