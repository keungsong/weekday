import React from 'react'

function Booking() {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
       <form action="" className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2 py-2'>
            <label htmlFor="">Destination</label>
            <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                <option >Luangparbang</option>
                <option >Vangvieng</option>
            </select>
        </div>
        <div className='flex w-full'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor="">Check In</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor="">Check Out</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
        </div>
        <div className='flex flex-col my-2 p-2 w-full'>
            <label htmlFor="">Search</label>
            <button className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white'>Rates and Availibilities</button>
        </div>
       </form>
   </div>
  )
}

export default Booking