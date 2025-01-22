import Image from 'next/image'
import React from 'react'
import Men from '../Images/pfp1.png'
import Girl from '../Images/pfp2.png'

const page = () => {
  return (
    <div className='w-full h-full flex flex-1 flex-col justify-center items-start p-5 '>
        <h3 className='px-5 text-3xl font-bold mt-5 underline decoration-[red]'>Contact Us</h3>
        <p className='px-5 text-lg font-medium'>You have any questions or need additional information?</p>

        <div className='w-full flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-3/4'>
                <form className="flex flex-col justify-start items-start gap-5 p-5">
                    <div className='w-full flex justify-start items-start gap-5'>
                        <input className='w-full md:w-1/2 py-2 border-2 border-[gray] px-2' type='text' placeholder='First Name' />
                        <input className='w-full md:w-1/2 py-2 border-2 border-[gray] px-2' type='text' placeholder='Last Name' />
                    </div>
                    <div className='w-full flex justify-start items-start gap-5'>
                        <input className='w-full md:w-1/2 py-2 border-2 border-[gray] px-2' type='email' placeholder='Email' />
                        <input className='w-full md:w-1/2 py-2 border-2 border-[gray] px-2' type='tel' placeholder='Telephone Number' />
                    </div>
                    <textarea  className='w-full h-28 border-2 border-[gray] p-2' placeholder='Enter your complain'/>
                    <button className='w-1/2 md:w-1/4 md:place-self-start md:me-20 px-4 py-2 bg-[red] text-white border-2 hover:border-[red] hover:bg-white hover:text-black'>Submit Now</button>
                </form>
            </div>
            <div id='line' className='w-full py-0.5 bg-black md:hidden mb-5'></div>
            <div className='w-full flex flex-col justify-center items-center gap-4 rounded-md mb-10 '>
                <h2 className='md:ms-24 self-start text-xl font-bold underline decoration-[red]'>Customer Center</h2>
                <div className='bg-[#e9e8e8] w-full md:w-3/4 h-1/3 flex justify-center items-center'>
                    <Image src={Men} className='w-1/4 object-cover' alt='men' />
                    <div>
                        <h3 className='text-xl font-bold'>John Smith</h3>
                        <p className='text-[red] font-semibold text-lg md:text-xl'>Phone: <span className='text-black font-medium text-sm md:text-lg'>111-222-333</span></p>
                        <p className='text-[red] font-semibold text-lg md:text-xl'>Email: <span className='text-black font-medium text-sm md:text-lg'>gearuprental@example.com</span></p>
                    </div>
                </div>
                <h2 className='md:ms-24 self-start text-xl font-bold underline decoration-[red]'>Change or Cancel Reservation</h2>
                <div className='bg-[#e9e8e8] w-full md:w-3/4 h-1/3 flex justify-center items-center  '>
                    <Image src={Girl} className='w-1/6 object-cover' alt='girl' />
                    <div>
                        <h3 className='text-xl font-bold'>Smittera</h3>
                        <p className='text-[red] font-semibold text-lg md:text-xl'>Phone: <span className='text-black font-medium text-sm md:text-lg'>111-222-333</span></p>
                        <p className='text-[red] font-semibold text-lg md:text-xl'>Email: <span className='text-black font-medium text-sm md:text-lg'>gearuprental@example.com</span></p>
                    </div>
                </div>
                <div className='bg-[#e9e8e8] w-full md:w-3/4 h-1/3 flex justify-center items-center  '>
                    <Image src={Girl} className='w-1/6 object-cover' alt='girl' />
                    <div>
                        <h3 className='text-xl font-bold'>Hanna</h3>
                        <p className='text-[red] font-semibold text-lg md:text-xl'>Phone: <span className='text-black font-medium text-sm md:text-lg'>111-222-333</span></p>
                        <p className='text-[red] font-semibold text-lg md:text-xl'>Email: <span className='text-black font-medium text-sm md:text-lg'>gearuprental@example.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page