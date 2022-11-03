import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <div>
      <div className='text-center my-10'>
        <p className='text-xl font-bold text-orange-700'>Service</p>
        <h1 className='text-5xl font-bold'>Our Service Area</h1>
        <p className=''>
          the majority have suffered alteration in some form, <br /> by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
              {
                  services.map(service => <ServiceCard
                      key={service._id}
                      service={service}
                  ></ServiceCard>
                    )
              }
      </div>
    </div>
  )
}

export default Services
