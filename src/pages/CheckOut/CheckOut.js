import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext/AuthProvider'

const CheckOut = () => {
  const services = useLoaderData()
  const { _id, title, price } = services
  const { user } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = user?.email || 'unregistered'
    const phone = form.phone.value
    const messeage = form.message.value

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      messeage,
    }
    if (phone.length < 11) {
      alert('Number must be 11 digit')
    } else {
      fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(order),
      }).then((res) =>
        res.json().then((data) => {
          console.log(data)
          if (data.acknowledged) {
            alert('order submitted')
            form.reset()
          }
        })
      )
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='text-4xl text-center font-bold'>
          {' '}
          You are ordering::{title}
        </h1>
        <p className='text-3xl font-bold text-center text-orange-600'>
          Price:{price}
        </p>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 my-5'>
          <input
            type='text'
            name='firstName'
            placeholder='Type your First Name'
            className='input input-bordered input-success w-full '
          />
          <input
            type='text'
            name='lastName'
            placeholder='Type Your Last name'
            className='input input-bordered input-success w-full '
          />
          <input
            type='text'
            name='phone'
            required
            placeholder='Type your phone number'
            className='input input-bordered input-success w-full '
          />
          <input
            type='text'
            name='email'
            defaultValue={user?.email}
            readOnly
            placeholder='Type your email'
            className='input input-bordered input-success w-full '
          />
        </div>
        <textarea
          className='textarea textarea-bordered h-24 w-full my-5'
          name='message'
          required
          placeholder='Type your feedback to us'
        ></textarea>
        <input
          className='btn btn-warning justify-center my-5'
          type='submit'
          value='Place Your Order'
        />
      </form>
    </div>
  )
}

export default CheckOut
