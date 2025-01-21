import React from 'react';

const page = () => {
  return (
    <>
    <div id='service' className='w-full h-screen flex flex-1 flex-col justify-center items-center p-5'>
      <h2 className='text-4xl font-bold mt-5'>Customer Services</h2>
      <div id='line' className='px-14 py-0.5 bg-[red]'></div>
      <div id='cards' className='flex flex-col md:flex-row justify-center item-center text-black mt-12 flex-wrap'>

        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 bg-[gray]'>
          <div className='flex justify-center items-center'>
            <i className="text-[red] text-2xl ri-user-heart-line"></i>
            <h3 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h3>
          </div>
          <div className='mx-20 px-1 py-0.5 bg-[red] opacity-50'></div>
          <p className="text-sm font-medium text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 bg-[gray]'>
          <div className='flex justify-center items-center'>
            <i className="text-[red] text-2xl ri-user-heart-line"></i>
            <h3 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h3>
          </div>
          <div className='mx-20 px-1 py-0.5 bg-[red] opacity-50'></div>
          <p className="text-sm font-medium text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 bg-[gray]'>
          <div className='flex justify-center items-center'>
            <i className="text-[red] text-2xl ri-user-heart-line"></i>
            <h3 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h3>
          </div>
          <div className='mx-20 px-1 py-0.5 bg-[red] opacity-50'></div>
          <p className="text-sm font-medium text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 bg-[gray]'>
          <div className='flex justify-center items-center'>
            <i className="text-[red] text-2xl ri-user-heart-line"></i>
            <h3 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h3>
          </div>
          <div className='mx-20 px-1 py-0.5 bg-[red] opacity-50'></div>
          <p className="text-sm font-medium text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default page