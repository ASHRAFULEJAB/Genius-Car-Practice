import React from 'react'

const ServiceCard = ({ service }) => {
  const { img, title, price, description } = service
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={img} alt='Shoes' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>{description.slice(0, 30)}</p>
        <p className='font-bold text-2xl text-yellow-600'>{price}$</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
