import Services from "./services/page";
import Model from './model/page';
import Contact from './contact/page'
import Image from "next/image";
import Hero from "./Images/hero.png";

export default function Home() {
  return (
    <>
      <div id="home" className="w-full h-screen flex flex-col md:flex-row flex-1 justify-center items-center bg-black text-white p-5">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="mt-20 md:mt-0">
              <h2 className="text-4xl font-semibold">Plan Your Trip Now</h2>
              <p className="text-lg font-medium mt-1">Get 20% OFF on your 1st Trip</p>
              <button className="px-4 py-2 border-4 border-[red] hover:bg-[red] mt-4" title="booknow">Book Now</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 place-items-center">
            <Image className="mt-24 md:mt-0 object-cover w-full h-full md:w-4/5 " src={Hero} alt="dodge" />
          </div>
      </div>
      <Services />
      <div className="w-full py-16 bg-black">
        <h2 className="text-2xl text-center text-white font-bold p-4 md:p-0">Book Now! Own the road, one ride at a time</h2>
      </div>
      <Model />
      <div className="w-full py-5 bg-black"></div>
      <Contact />
    </>
  );
}
