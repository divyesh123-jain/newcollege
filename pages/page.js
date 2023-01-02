import React from 'react';

const Page = () => {
  return (<>
  <div className='bg-gray-800 text-white'>
  <div className='text-3xl pt-8  flex-col text-center font-bold text-[red] '>About College</div>
    <section className='flex  md:flex-row flex-col items-center'>


    <section className='min-h-screen flex py-10 md:flex-row flex-col items-center'>

{/* Image section */}

<div className='mx-7 flex-1 pt-5'>
<img src="https://imgs.search.brave.com/loPsv8rYKsKaZC6GoMEHdwqiQb8ndjwsGhbWG9NqNSw/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9wYXJl/bnRib29zdGVyLm9y/Zy9kaXNrL3MzL2lt/YWdlcy9tZXRhLzIv/QWRvYmVTdG9ja18x/MDUzNDIyNTYuanBl/Zw"  alt="" className='w-100 h-full  object-cover  '/>
</div>

{/* Text section */}


<div className='flex-1'>
<div>
<h1 className='mx-32 md:text-5xl text-2xl md:leading-normal leading-10 font-bold '>
<p className='text-center text-xl align items-center '>Dayananda Sagar College of Engineering (DSCE) is approved by All India Council for Technical Education (AICTE), Govt. of India and affiliated to Visvesvaraya Technological University. It has widest choice of engineering branches having 18 Under Graduate courses & 9 Post Graduate courses. In addition, it has 20 Research Centres in different branches of Engineering catering to research scholars for obtaining Ph. D under VTU in which 116 candidates have registered for Ph.D. program. 
DSCE is accredited by National Assessment and Accreditation Council (NAAC) with ‘A’ Grade and is  ISO 9001:2015 Certified. 
DSCE had the privilege of receiving a National Mission Project from Department of Science and Technology (DST) to implement “Indigenous Magnetic Resonance Imaging (IMRI). Institution is recognized by DSIR – Department of Scientific and Industrial Research. 
</p>

</h1>
</div>
</div>

</section>
  

{/* <div className='flex-1  '>

</div> */}






</section>
</div>
</>
);
}
   
export default Page;
