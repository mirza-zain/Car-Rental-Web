'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const Navbar = () => {
  const path = usePathname()
  const [mobVisible, setMobVisible] = useState(false)

  const toggleButton = () => { setMobVisible(!mobVisible) }

  const handleClick = () => { setMobVisible(false) }

  return (
    <>
      <header id='Desktop' className='w-screen h-1/6 p-4 flex flex-1 justify-between items-center bg-transparent'>
        <Link href="/"><h1 className='font-bold text-2xl ms-5'>GEAR UP <span className='text-[red]'>|</span> RENTAL SERVICES</h1></Link>
        {mobVisible ? (
          <i className="ri-close-fill text-2xl font-bold z-50 md:hidden" onClick={toggleButton}></i>
        ) : (
          <i className="ri-menu-4-line text-2xl font-bold md:hidden" onClick={toggleButton}></i>
        )}
        <div className='md:flex font-medium text-base justify-around items-center gap-6 hidden'>
          <Link href='/' className={`me-2 ${path === '/' ? "red" : "black"}`}>Home</Link>
          <Link href='/services' className={`me-2 ${path === '/services' ? "red" : "black"}`}>Services</Link>
          <Link href='/model'  className={`me-2 ${path === '/model' ? "red" : "black"}`}>Vehical Model</Link>
          <button title="contact" className="px-4 py-2 border-2 border-[red]">Contact Us</button>
        </div>
      </header>
      {mobVisible && (
        <div className='w-full h-screen flex flex-col justify-center items-center fixed md:hidden z-40 bg-white'>
          <nav className="h-1/2 flex flex-col justify-around items-center text-base font-bold">
            <Link href="/" onClick={handleClick} className={`me-2 ${path === '/' ? "red" : "text-black"}`}>Home</Link>
            <Link href="/services" onClick={handleClick} className={`me-2 ${path === '/services' ? "red" : "text-black"}`}>Services</Link>
            <Link href="/model" onClick={handleClick} className={`me-2 ${path === '/model' ? "red" : "text-black"}`}>Vehical Model</Link>
            <button title="contact" className="px-8 py-2 border-2 border-[red]">Contact Us</button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;