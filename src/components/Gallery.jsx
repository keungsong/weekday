import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4 font-bold'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/16/4b/21/2f/le-bel-air-resort-luang.jpg" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/1a/7a/99/5f/img-20191229-170349-largejpg.jpg" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/16/4b/21/54/le-bel-air-resort-luang.jpg" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://media-cdn.tripadvisor.com/media/photo-s/16/92/47/f2/my-dream-boutique-resort.jpg" alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://pix10.agoda.net/hotelImages/263/263777/263777_16101416590047766508.jpg?ca=6&ce=1&s=1024x768" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Gallery