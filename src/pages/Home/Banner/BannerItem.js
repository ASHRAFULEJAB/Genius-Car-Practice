import React from 'react';

const BannerItem = ({ slider }) => {
    const { image, id, prev, next } = slider
    return (
        <div id={`slide${id}`} className='carousel-item relative w-full'>
        <div className='banner-pic' ><img src={image} alt='' className='w-full rounded-xl' /></div>
        <div className='absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4'>
          <h1 className=' text-6xl font-bold text-white'>
            Affordable <br />
            Price For Car <br /> Servicing
          </h1>
        </div>
        <div className='absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2'>
          <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className='absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4'>
        <button className="btn btn-success  mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
        </div>
        <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
          <a href={`#slide${prev}`} className='btn btn-circle mr-5'>
            ❮
          </a>
          <a href={`#slide${next}`} className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;