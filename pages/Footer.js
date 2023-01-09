import React from 'react';
import Image from 'next/image';
import dsi from '../Images/dsi.png'
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.jpg'
import spense from '../Images/spense.jpeg'



const Footer = () => {
  return (
    <div className=''>
      
<footer class="p-4 bg-blue-700 text-white sm:w-full dark:bg-gray-900">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a class="flex items-center">
                <Image src={dsi} class="mr-3 h-100 w-[30vh]" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dayananda Sagar<br /> College Of Engineering
                <br />
              <p className='text-xl pt-4'> AN AUTONOMOUS INSTITUTE AFFILIATED TO VTU, APPROVED BY AICTE & UGC</p>  

 
<p className='text-xl'>ACCREDITED BY NBA & NAAC WITH A GRADE.
</p>
 

</span>

            </a>
        </div>
      

    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
       
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <div>
                <p className='text-3xl text-white pt-4 text-center'>Technical Partners</p>
                <div className='relative flex justify-center  m-8 overflow-hidden  rounded-lg'>
                <Image className='rounded-full w-[20vh] mx-3 ' src={logo1} alt="" />
                <Image className='rounded-full w-[20vh] mx-3' src={logo2} alt="" />
                <Image className='rounded-full w-[20vh] mx-3' src={spense} alt="" />
                </div>
               
               
              </div>

           
        </div>
    </div>
   </div>
</footer>

    </div>
  );
}

export default Footer;
