import React, { useState } from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const Dashboard = () => {

  const [dashboardData] = useState(dashboardDummyData)

  return (
    <div className="w-full">

      {/* TITLE */}
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
      />

      {/* SUBTITLE */}
      <div className="max-w-2xl text-gray-500 text-sm mt-1">
        Monitor your room listings, track bookings, and analyze revenue
        all in one place. Stay updated with real-time insights to ensure
        smooth operations.
      </div>

      {/* STATS */}
      <div className="flex gap-4 my-8 flex-wrap">

        {/* TOTAL BOOKINGS */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4 pr-8 gap-4">
          <img
            src={assets.totalBookingIcon}
            alt="Total Bookings"
            className="h-10 max-sm:hidden"
          />
          <div>
            <p className="text-sm text-gray-500">Total Bookings</p>
            <p className="text-xl font-semibold text-gray-800">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* TOTAL REVENUE */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4 pr-8 gap-4">
          <img
            src={assets.totalRevenueIcon}
            alt="Total Revenue"
            className="h-10 max-sm:hidden"
          />
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-semibold text-gray-800">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* RECENT BOOKINGS */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-4">
        Recent Bookings
      </h2>

      <div className="w-full max-w-3xl border border-gray-300 rounded-lg max-h-80 overflow-y-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 font-medium text-gray-800">
                User Name
              </th>
              <th className="py-3 px-4 font-medium text-gray-800 max-sm:hidden">
                Room Name
              </th>
              <th className="py-3 px-4 font-medium text-gray-800 text-center">
                Total Amount
              </th>
              <th className="py-3 px-4 font-medium text-gray-800 text-center">
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-t border-gray-300 text-gray-700">
                  {item.user.username}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 text-gray-700 max-sm:hidden">
                  {item.room.roomType}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 text-gray-700 text-center">
                  ${item.totalPrice}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 text-center">
                  <span
                    className={`py-1 px-3 text-xs rounded-full ${
                      item.isPaid
                        ? 'bg-green-200 text-green-700'
                        : 'bg-yellow-200 text-yellow-700'
                    }`}
                  >
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard
