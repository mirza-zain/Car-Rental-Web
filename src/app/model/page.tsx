'use client'

import React, { useState } from 'react';
import Image, {StaticImageData} from 'next/image';
import BMW from '../Images/bmw.png';
import BMWSUV from '../Images/bmwsuv.png';
import RollsRoyce from '../Images/rollsroyalcullinan.png';
import Mercedes from '../Images/mercedesamg.png';

type VehicleKey = 'bmw' | 'bmwsuv' | 'rollsroyce' | 'mercedes';

const vehicles: Record<VehicleKey, {
  image: StaticImageData;
  model: string;
  rent: string;
  text: string;
  doors: number;
  seats: number;
  transmission: string;
}> = {
  bmw: {
    image: BMW,
    model: 'BMW C Series',
    rent: '$55',
    text: 'rent per day',
    doors: 4,
    seats: 5,
    transmission: 'Automatic',
  },
  bmwsuv: {
    image: BMWSUV,
    model: 'BMW SUV',
    rent: '$65',
    text: 'rent per day',
    doors: 4,
    seats: 5,
    transmission: 'Automatic',
  },
  rollsroyce: {
    image: RollsRoyce,
    model: 'Rolls Royce',
    rent: '$95',
    text: 'rent per day',
    doors: 4,
    seats: 5,
    transmission: 'Automatic',
  },
  mercedes: {
    image: Mercedes,
    model: 'Mercedes AMG',
    rent: '$75',
    text: 'rent per day',
    doors: 4,
    seats: 5,
    transmission: 'Automatic',
  },
};

const ModelPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleKey>('bmw');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const vehicle = vehicles[selectedVehicle];

  return (
    <div className='w-full h-screen flex flex-col flex-1 justify-center items-center mt-3 p-2'>
      <h1 className='text-3xl font-semibold p-2 text-center '>Vehicle Models - <span className=' text-2xl font-medium'>Our rental fleet at a glance</span></h1>
      <div id='line' className='px-36 py-0.5 bg-[red] self-center md:block hidden'></div>
      <div className='w-full flex flex-col md:flex-row justify-between items-center p-5'>
        <div className="w-2/5">
          <div className="md:hidden">
            <button
              className="w-full py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              Select Vehicle
            </button>
            {dropdownVisible && (
              <ul className="w-full flex flex-col justify-between items-center gap-3 mt-2">
                <li className='w-full py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
                  <a href='#bmw' onClick={() => { setSelectedVehicle('bmw'); setDropdownVisible(false); }}>BMW</a>
                </li>
                <li className='w-full py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
                  <a href='#bmwsuv' onClick={() => { setSelectedVehicle('bmwsuv'); setDropdownVisible(false); }}>BMW SUV</a>
                </li>
                <li className='w-full py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
                  <a href='#rollsroyce' onClick={() => { setSelectedVehicle('rollsroyce'); setDropdownVisible(false); }}>Rolls Royce Ghost</a>
                </li>
                <li className='w-full py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
                  <a href='#mercedes' onClick={() => { setSelectedVehicle('mercedes'); setDropdownVisible(false); }}>Mercedes AMG</a>
                </li>
              </ul>
            )}
          </div>
          <ul className="hidden md:flex w-full flex-col justify-between items-center gap-3">
            <li className='w-1/2 py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
              <a href='#bmw' onClick={() => setSelectedVehicle('bmw')}>BMW</a>
            </li>
            <li className='w-1/2 py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
              <a href='#bmwsuv' onClick={() => setSelectedVehicle('bmwsuv')}>BMW SUV</a>
            </li>
            <li className='w-1/2 py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
              <a href='#rollsroyce' onClick={() => setSelectedVehicle('rollsroyce')}>Rolls Royce Cullinan</a>
            </li>
            <li className='w-1/2 py-3 text-center border-2 border-[gray] ease-in-out duration-300 hover:bg-[gray] hover:text-[red]'>
              <a href='#mercedes' onClick={() => setSelectedVehicle('mercedes')}>Mercedes AMG</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-3/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <Image src={vehicle.image} className="w-full md:w-3/5 h-1/2" alt={vehicle.model} />
          <div className='flex flex-col justify-between items-center gap-5'>
            <table className="w-full">
              <tbody>
                <tr className='border border-[gray]'>
                  <th className="text-xl">{vehicle.rent} <span className='text-lg font-medium'>{vehicle.text}</span></th>
                </tr>
                <tr className='border border-[gray] text-lg'>
                  <td>Model</td>
                  <td>{vehicle.model}</td>
                </tr>
                <tr className='border border-[gray] text-lg'>
                  <td>Doors</td>
                  <td>{vehicle.doors}</td>
                </tr>
                <tr className='border border-[gray] text-lg'>
                  <td>Seats</td>
                  <td>{vehicle.seats}</td>
                </tr>
                <tr className='border border-[gray] text-lg'>
                  <td>Transmission</td>
                  <td>{vehicle.transmission}</td>
                </tr>
              </tbody>
            </table>
            <button title='reserve' className='w-full py-2 bg-[red] text-white hover:bg-white hover:text-black border-2 hover:border-[red]'>Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;