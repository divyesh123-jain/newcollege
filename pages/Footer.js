import React from 'react';
import Image from 'next/image';
import dsi from '../Images/dsi.png'
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.jpg'
import spense from '../Images/spense.jpeg'



const Footer = () => {
  return (
    <div className=''>
      
      <footer class="bg-blue-600 text-center lg:text-left">
  <div class="container p-6 text-gray-800">
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="mb-6 md:mb-0">
        <h5 class="font-medium mb-2 uppercase"></h5>

        <p class="mb-4">
        <div>
        <img src='https://www.dsce.edu.in/images/Home/logo_bottom.png' className='w-[100vh]' alt="" />
        <p className='text-2xl text-white font-bold pt-5'>
        AN AUTONOMOUS INSTITUTE AFFILIATED TO VTU,<br /> <span className='mx-24'>APPROVED BY AICTE & UGC </span></p>

 
<p className='text-2xl text-white font-bold'>ACCREDITED BY NBA & NAAC WITH A GRADE.</p>
        
       
        </div>
       
        </p>
      </div>

      <div class="mb-6 md:mb-0 ">
        

        <p class="mb-4 align items-right">
        <p className='text-3xl text-white pt-4 text-center mx-24 '>Technical Partners</p>
                <div className='relative flex justify-center  m-8 overflow-hidden  rounded-lg'>
                <Image className='rounded-full w-[20vh] mx-3 ' src={logo1} alt="" />
                <Image className='rounded-full w-[20vh] mx-3' src={logo2} alt="" />
                <Image className='rounded-full w-[20vh] mx-3' src={spense} alt="" />
                </div>
        </p>
      </div>
    </div>
  </div>

  <div class="text-center text-gray-700 p-4" >
    © 2023 Copyright:
    <a class="text-gray-800" href="https://tailwind-elements.com/">Department OF Electronics And Telecommunication Engineering</a>
  </div>
</footer>

    </div>
  );
}

export default Footer;
