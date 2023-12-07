import Image from 'next/image';
import Defacto from "@/public/works/defacto/Capture.PNG";
import Weber from "@/public/works/weber/Capture.PNG";
import Piazza from "@/public/works/piazza/Capture.PNG";
import FordOtosan from "@/public/works/fordotosan/powerful-headlights-particle-view-modern-luxury-cars-parked-indoors-daytime.jpg";
import TurkiyeBasketbol from "@/public/works/turkiyebasketbol/silhouette-view-basketball-player-holding-basket-ball-black-background.jpg";
import AvcilarHospital from "@/public/works/avcilarhospital/young-handsome-physician-medical-robe-with-stethoscope.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

function Works() {
  return (
    <div className='w-full py-10'>
      <h2 className='text-center h2-baslik font-bold'>WORKS</h2>
      <div className='grid grid-cols-3 pr-20 gap-6'>
        <div className='relative cursor-pointer group'>
        <Image src={Defacto} alt='defacto' className='h-[450px] rounded-xl '/>
        <div className='w-full'>
        <div className='w-full absolute bottom-0 imgBottom rounded-b-xl'>
        <h4 className='text-xl font-bold h2-baslik  text-white px-5 py-5 leading-[50px]'>Defacto</h4>
        <div className='flex px-5'>
        <p className='text-white pr-3 pb-5 relative overflow-hidden group-hover:before:block'>
        Yapılan İşe Git
        <span className='absolute bg-white h-0.5 bottom-4 left-0 w-full transition-all duration-300 group-hover:left-0 group-hover:w-0'></span>
        </p>
        <FaArrowRightLong className='text-white mt-1 transition-all duration-300 group-hover:ml-3'/>
        </div>
        </div>
        </div>
        </div>

        <div className='relative cursor-pointer group'>
        <Image src={Weber} alt='defacto' className='h-[450px] rounded-xl '/>
        <div className='w-full'>
        <div className='w-full absolute bottom-0 imgBottom rounded-b-xl'>
        <h4 className='text-xl font-bold h2-baslik  text-white px-5 py-5 leading-[50px]'>Weber</h4>
        <div className='flex px-5'>
        <p className='text-white pr-3 pb-5 relative overflow-hidden group-hover:before:block'>
        Yapılan İşe Git
        <span className='absolute bg-white h-0.5 bottom-4 left-0 w-full transition-all duration-300 group-hover:left-0 group-hover:w-0'></span>
        </p>
        <FaArrowRightLong className='text-white mt-1 transition-all duration-300 group-hover:ml-3'/>
        </div>
        </div>
        </div>
        </div>


        <div className='relative cursor-pointer group'>
        <Image src={Piazza} alt='defacto' className='h-[450px] rounded-xl '/>
        <div className='w-full'>
        <div className='w-full absolute bottom-0 imgBottom rounded-b-xl'>
        <h4 className='text-xl font-bold h2-baslik  text-white px-5 py-5 leading-[50px]'>Piazza</h4>
        <div className='flex px-5'>
        <p className='text-white pr-3 pb-5 relative overflow-hidden group-hover:before:block'>
        Yapılan İşe Git
        <span className='absolute bg-white h-0.5 bottom-4 left-0 w-full transition-all duration-300 group-hover:left-0 group-hover:w-0'></span>
        </p>
        <FaArrowRightLong className='text-white mt-1 transition-all duration-300 group-hover:ml-3'/>
        </div>
        </div>
        </div>
        </div>


        <div className='relative cursor-pointer group'>
        <Image src={FordOtosan} alt='defacto' className='h-[450px] rounded-xl '/>
        <div className='w-full'>
        <div className='w-full absolute bottom-0 imgBottom rounded-b-xl'>
        <h4 className='text-xl font-bold h2-baslik  text-white px-5 py-5 leading-[50px]'>Ford Otosan</h4>
        <div className='flex px-5'>
        <p className='text-white pr-3 pb-5 relative overflow-hidden group-hover:before:block'>
        Yapılan İşe Git
        <span className='absolute bg-white h-0.5 bottom-4 left-0 w-full transition-all duration-300 group-hover:left-0 group-hover:w-0'></span>
        </p>
        <FaArrowRightLong className='text-white mt-1 transition-all duration-300 group-hover:ml-3'/>
        </div>
        </div>
        </div>
        </div>


        <div className='relative cursor-pointer group'>
        <Image src={TurkiyeBasketbol} alt='defacto' className='h-[450px] rounded-xl '/>
        <div className='w-full'>
        <div className='w-full absolute bottom-0 imgBottom rounded-b-xl'>
        <h4 className='text-xl font-bold h2-baslik  text-white px-5 py-5 leading-[50px]'>Türkiye Basketbol Federasyonu</h4>
        <div className='flex px-5'>
        <p className='text-white pr-3 pb-5 relative overflow-hidden group-hover:before:block'>
        Yapılan İşe Git
        <span className='absolute bg-white h-0.5 bottom-4 left-0 w-full transition-all duration-300 group-hover:left-0 group-hover:w-0'></span>
        </p>
        <FaArrowRightLong className='text-white mt-1 transition-all duration-300 group-hover:ml-3'/>
        </div>
        </div>
        </div>
        </div>

        <div className='relative cursor-pointer group'>
        <Image src={AvcilarHospital} alt='defacto' className='h-[450px] rounded-xl '/>
        <div className='w-full'>
        <div className='w-full absolute bottom-0 imgBottom rounded-b-xl'>
        <h4 className='text-xl font-bold h2-baslik  text-white px-5 py-5 leading-[50px]'>Avcilar Hospital</h4>
        <div className='flex px-5'>
        <p className='text-white pr-3 pb-5 relative overflow-hidden group-hover:before:block'>
        Yapılan İşe Git
        <span className='absolute bg-white h-0.5 bottom-4 left-0 w-full transition-all duration-300 group-hover:left-0 group-hover:w-0'></span>
        </p>
        <FaArrowRightLong className='text-white mt-1 transition-all duration-300 group-hover:ml-3'/>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Works
