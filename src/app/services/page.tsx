import React from 'react';

const page = () => {
  return (
    <>
    <div id='service' className='w-full h-screen flex flex-1 flex-col justify-center items-center p-5'>
      <h1 className='text-4xl font-bold mt-5'>Customer Services</h1>
      <div id='line' className='px-14 py-0.5 bg-[red]'></div>
      <div id='cards' className='flex flex-col md:flex-row justify-center item-center text-black mt-12 flex-wrap'>

        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 border-2 border-[gray] bg-[#f1f1f1]'>
          <div className='w-full flex justify-start md:justify-center items-center md:gap-4'>
            <i className="text-2xl ri-user-heart-line"></i>
            <h2 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h2>
          </div>
          <div className='mx-20 px-1 py-0.5 bg-[red] opacity-50'></div>
          <p className="text-sm font-medium text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 border-2 border-[gray] bg-[#f1f1f1]'>
          <div className='w-full flex justify-start md:justify-center items-center md:gap-4'>
            <i className="text-2xl ri-user-heart-line"></i>
            <h2 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h2>
          </div>
          <div className='mx-20 px-1 py-0.5 bg-[red] opacity-50'></div>
          <p className="text-sm font-medium text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 border-2 border-[gray] bg-[#f1f1f1]'>
          <div className='w-full flex justify-start md:justify-center items-center md:gap-4'>
            <i className="text-2xl ri-user-heart-line"></i>
            <h2 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h2>
          </div>
          <div className='mx-20 px-1 py-0.5 bg-[red] opacity-50'></div>
          <p className="text-sm font-medium text-justify p-2 mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
        <div className='w-full md:w-[35%] h-1/2 flex-col p-8 me-4 mt-5 border-2 border-[gray] bg-[#f1f1f1]'>
          <div className='w-full flex justify-start md:justify-center items-center md:gap-4'>
            <i className="text-2xl ri-user-heart-line"></i>
            <h2 className="text-lg md:text-xl font-semibold">Special Rates on Car Booking</h2>
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