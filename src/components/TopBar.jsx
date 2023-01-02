import React from 'react';
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs'

export default function Topbar() {
  return (
    <div className='flex justify-between items-center px-4 py-2 '>
       <div className='flex items-center'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>WEEKDAY</h1>
      </div>
      <div className='flex '>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='text-[var(--primary-dark)] mr-2'/>
          <p className='text-sm text-gray-700'>8Am - 5Am</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
         <AiFillPhone size={20} className='text-[var(--primary-dark)] mr-2'/>
         <p className='text-sm text-gray-700'>020-773-050-46</p>
      </div>
     <button className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white'>Get a free </button>
     </div>
     
    
    </div>
  )
}
