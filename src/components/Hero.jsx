import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-[70vh]'>
      <img className='w-full h-full object-cover' src="https://www.geckoroutes.com/wp-content/uploads/2020/03/luang-prabang-laos.jpg" alt="/" />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='text-4xl font-bold '>Find Your Special Trip</h1>
            <h2 className='text-4xl py-4'>With Weekday</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nihil odit pariatur blanditiis. Quaerat ab molestias aliquam exercitationem, minima saepe!</p>
        </div>
      </div>
    </div>
    
  )
}
