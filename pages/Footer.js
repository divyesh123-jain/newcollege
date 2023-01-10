import React from 'react';
import Image from 'next/image';
import dsi from '../Images/dsi.png'
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.jpg'
import spense from '../Images/spense.jpeg'



const Footer = () => {
  return (
    <div className=''>
      
      <footer class="footer bg-blue-600 relative pt-1 border-b-2 border-blue-700">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                <div className=''>
        <img src='https://www.dsce.edu.in/images/Home/logo_bottom.png' className='w-[70vh] mx-12' alt="" />
        <p className='text-2xl  font-bold pt-5'>
        AN AUTONOMOUS INSTITUTE AFFILIATED TO VTU<br /> <span className=''>APPROVED BY AICTE & UGC </span></p>

 
<p className='text-2xl  font-bold'>ACCREDITED BY NBA & NAAC WITH A GRADE.</p>
        
       
        </div>
                </div>
              
                <div class="flex flex-col">
                <p className='text-3xl text-white pt-4 text-center mx-24 '>Technical Partners</p>
                <div className='relative flex justify-center  m-8 overflow-hidden  rounded-lg'>
                <Image className='rounded-full w-[20vh] mx-1  ' src={logo1} alt="" />
                <Image className='rounded-full w-[20vh] mx-1' src={logo2} alt="" />
                <Image className='rounded-full w-[20vh] mx-1' src={spense} alt="" />
                </div>
               
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-white font-bold mb-2">
                    © 2023 by Department Of Electronics And Telecommunication Engineering
                </p>
            </div>
        </div>
    </div>
</footer>
    </div>
  );
}

export default Footer;
