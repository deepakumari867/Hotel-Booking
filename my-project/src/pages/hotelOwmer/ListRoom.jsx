import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'

const ListRoom = () => {

  const [rooms, setRooms] = useState(roomsDummyData)

  return (
    <div>

      {/* TITLE + SUBTITLE */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Room Listings
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          View, edit, or manage all listed rooms. Keep the information
          up-to-date to provide the best experience for users.
        </p>
      </div>

      <p>All Rooms</p>

      <div className="w-full max-w-3xl border border-gray-300 rounded-lg max-h-80 overflow-y-auto mt-3">
        <table className="w-full text-left">

          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 font-medium text-gray-800">
                Name
              </th>
              <th className="py-3 px-4 font-medium text-gray-800 max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 font-medium text-gray-800 text-center">
                Price / night
              </th>
              <th className="py-3 px-4 font-medium text-gray-800 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>

                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.name}
                </td>

                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(', ')}
                </td>

                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  ₹{item.pricePerNight}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 text-center">
                  <label className="relative inline-flex items-center cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      readOnly
                    />

                    <div className="w-12 h-7 bg-slate-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200">
                      <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </div>
                  </label>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default ListRoom
