import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/UserContext/AuthProvider'
import OrdersDetails from './OrdersDetails'

const Orders = () => {
  const { user, logout } = useContext(AuthContext)
  const [ordersInfo, setOrdersInfo] = useState([])
  useEffect(() => {
    fetch(
      `https://genius-car-server-one-gamma.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          return logout()
        }
        return res.json()
      })
      .then((data) => setOrdersInfo(data))
  }, [user?.email, logout])

  const handleDelete = (id) => {
    const procced = window.confirm('Are you sure you want to delete this order')
    if (procced) {
      fetch(`https://genius-car-server-one-gamma.vercel.app/orders/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount > 0) {
            const remaing = ordersInfo.filter((or) => or._id !== id)
            setOrdersInfo(remaing)
          }
        })
    }
  }

  const updateOrders = (id) => {
    fetch(`https://genius-car-server-one-gamma.vercel.app/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaing = ordersInfo.filter((ord) => ord._id !== id)
          const approving = ordersInfo.find((or) => or._id === id)
          approving.status = 'Approved'
          const orderRemain = [approving, ...remaing]
          setOrdersInfo(orderRemain)
        }
      })
  }
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
              <OrdersDetails
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                updateOrders={updateOrders}
              ></OrdersDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
