import React from 'react';
import Image from 'next/image';
import dsi from '../Images/dsi.png'
import re from '../Images/re.png'
import conference from '../Images/conference.png'
import logo1 from '../Images/logo1.png';
import logo2 from '../Images/logo2.jpg';

const about = () => {
  return (
    <div>
      <div class="text-center sm:text-left bg-blue-500" 
       style={{
        backgroundImage: "url('')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} >
    <header class="absolute inset-x-0 top-0 z-10 w-full">
        <div class="px-4 mx-auto  lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    
                </div>

                
               

                <button type="button" class="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
                   
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

                   
                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <section class="relative lg:min-h-[1000px] pt-24 pb-10  lg:pb-24">
        <div class="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
            
        </div>
        <p class=" text-white text-center sm:text-4xl">Dayananda Sagar College Of Engineering</p>
        <p className='text-center mt-5 pb-4 text-white'>Presents</p>
        <div class="flex justify-center gap-32 pt-2 pb-3 align items-center">
                <Image className='rounded-full  mx-96 ' src={conference} alt="" />

          
         
         
          
          </div>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
        
            <div class="mx-auto text-center">
                <h1 class="text-4xl font-bold sm:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white"> INTERNATIONAL CONFERENCE <br />ON <br />ADVANCES IN ENGINEERING AND TECHNOLOGY FOR INTELLIGENT SYSTEMS<br />(ICAETIS-2023) </span>
                  
                </h1>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                
          </div>

              {/* <div>
                <p className='text-3xl text-white pt-4'>In Association With</p>
                <div className='relative flex justify-center h-64 m-8 overflow-hidden  rounded-lg'>
                <Image className='rounded-full w-[30vh] mx-6 ' src={logo1} alt="" />
                <Image className='rounded-full w-[30vh] mx-6' src={logo2} alt="" />
                </div>
               
               
              </div> */}

               
            </div>
        </div>
    </section>
</div>

    </div>
  );
}

export default about;
