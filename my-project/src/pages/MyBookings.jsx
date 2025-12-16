import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'    

const MyBookings = () => {

  const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div className="py-28 md:pt-32 md:pb-35 px-4 md:px-16 lg:px-24 xl:px-32">

      <div className="flex flex-col items-start">

        <Title title="My Bookings" align="left" />

        <div className="max-w-2xl mt-2">
          <p className="text-sm text-gray-500 leading-relaxed">
            Easily manage your past, current, and upcoming hotel reservations in one place.
            Plan your trips seamlessly with just a few clicks.
          </p>
        </div>

        <div className="max-w-6xl mt-8 w-full text-gray-800">

          <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
            <div>Hotels</div>
            <div>Date & Timings</div>
            <div>Payment</div>
          </div>

          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-4 md:py-6 items-center"
            >

              {/* hotel details */}
              <div className="flex flex-col md:flex-row gap-4">

                {/* ✅ IMAGE SIZE FIXED */}
                <img
                  src={booking.room.images[0]}
                  alt="hotel-img"
                  className="w-full md:w-40 h-32 md:h-28 rounded-lg shadow object-cover"
                />

                <div className="flex flex-col gap-1.5 mt-2 md:mt-0 md:ml-2">
                  <p className="font-playfair text-2xl">
                    {booking.hotel.name}
                    <span className="font-inter text-sm ml-1">
                      ({booking.room.roomType})
                    </span>
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <img
                      src={assets.locationIcon}
                      alt="location-icon"
                      className="w-4 h-4"
                    />
                    <span>{booking.hotel.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <img
                      src={assets.guestsIcon}
                      alt="guests-icon"
                      className="w-4 h-4"
                    />
                    <span>{booking.guests}</span>
                  </div>

                  <p className="text-base">Total: ${booking.totalPrice}</p>
                </div>
              </div>

              {/* Date & Timings */}
              <div></div>

              {/* payment status */}
              <div></div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default MyBookings
