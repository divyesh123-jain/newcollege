import React from 'react';

const Contact = () => {
  return (<>
  <div className='pt-40 pb-36 mx-7'>
   <div class="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0">
          
              <div className='flex'>
          <div>
              <div class="flex justify-center items-center  mb-4 w-400 h-400  rounded-full dark:bg-primary-900">
            
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
              
               Dr. Smitha Sasi</h3>
              <div class="border-b-4 border-indigo-500 ..."></div>
              <p class="text-gray-500 dark:text-gray-400">Contact Number:- +91-9945800645,
              <br />Associate Professor<br />
              Dayananda Sagar College of Engineering, <br /> 
SHAVIGE MALLESHWARA HILLS, KUMARSWAMY LAYOUT, BANGALORE - 560 111. <br /></p>
             
           
          </div>
      
         </div>
         <div>
              <div class="flex justify-center items-center  mb-4 w-400 h-400  rounded-full dark:bg-primary-900">
            
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
              
              Dr. Swetha Ravikanti</h3>
              <div class="border-b-4 border-indigo-500 ..."></div>
              <p class="text-gray-500 dark:text-gray-400">Contact Number:- +91-9491228595,
              <br />Assistant Professor<br />
              Dayananda Sagar College of Engineering, <br /> 
SHAVIGE MALLESHWARA HILLS, KUMARSWAMY LAYOUT, BANGALORE - 560 111. <br /></p>
             
           
          </div>
      
          </div>
 <div className='pt-4 text-xl'>
  <p className='text-gray-500 dark:text-gray-400'>For more contact information send it to
 <a href = "mailto: nconaetis2023@dayanandasagar.edu"><span className='text-[red]'>Send Email</span></a></p>
 </div>
   
    </div>
   
   
    </>
  );
}

export default Contact;
