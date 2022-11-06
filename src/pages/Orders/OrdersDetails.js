import React, { useEffect, useState } from 'react'

const OrdersDetails = ({ order, handleDelete, updateOrders }) => {
  const { _id, serviceName, service, price, phone, email, customer, status } =
    order
  const [orderDes, setOrderDes] = useState({})
  useEffect(() => {
    fetch(`https://genius-car-server-one-gamma.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderDes(data))
  }, [service])

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className='btn btn-circle btn-outline'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-24 h-24'>
              {orderDes?.img && (
                <img src={orderDes?.img} alt='Avatar Tailwind CSS Component' />
              )}
            </div>
          </div>
          <div>
            <div className='font-bold'>{customer}</div>
            <div className='text-sm opacity-50'>{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className='badge badge-ghost badge-sm'>{price}$</span>
      </td>
      <td>{email}</td>
      <th>
        <button
          onClick={() => updateOrders(_id)}
          className='btn btn-ghost btn-xs'
        >
          {status ? status : 'Pending'}
        </button>
      </th>
    </tr>
  )
}

export default OrdersDetails
