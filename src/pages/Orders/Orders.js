import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/UserContext/AuthProvider'
import OrdersDetails from './OrdersDetails'

const Orders = () => {
  const { user } = useContext(AuthContext)
  const [ordersInfo, setOrdersInfo] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrdersInfo(data))
  }, [user?.email])
  return (
    <div>
      <h1 className='text-5xl text-center my-3'>
        {' '}
        You have -{ordersInfo.length} Orders
      </h1>
      <div className='overflow-x-auto w-full my-3'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th>Name</th>
              <th>Service Details</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ordersInfo.map((order) => (
              <OrdersDetails key={order._id} order={order}></OrdersDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
