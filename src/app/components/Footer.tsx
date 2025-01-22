import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full h-1/2 bg-black text-white flex flex-col flex-1 justify-center items-center p-5'>
      <div className='flex flex-col justify-center gap-3'>
        <h2 className='text-xl'>Stay In Touch With Us</h2>
        <ul className='flex justify-around'>
          <li className='text-2xl'>
            <a href='/' title='social' className='hover:text-[red] ease-in-out duration-300'><i className="ri-github-line"></i></a>
          </li>
          <li className='text-xl'>
            <a href='/' title='social' className='hover:text-[red] ease-in-out duration-300'><i className="ri-linkedin-fill"></i></a>
          </li>
          <li className='text-xl'>
            <a href='/' title='social' className='hover:text-[red] ease-in-out duration-300'><i className="ri-instagram-fill"></i></a>
          </li>
        </ul>
      </div>
      <p className='p-2 text-lg font-semibold'>GearUp &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;