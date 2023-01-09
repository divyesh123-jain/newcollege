import React from 'react';

const Registeration = () => {
  return (
    <>

    <div className='bg-blue-100 pt-20 pb-16'>
       <h3 className='text-3xl text-[red] mx-12'>Registration</h3>
      <p className='text-xl mx-12'>
        The corresponding author of the accepted paper is instructed to send final camera ready paper, copyright form and payment transfer
        acknowledgment screenshot to the conference email
  </p>
      <p className='text-xl mx-12'>The instructions to prepare the aforementioned documents are given below:</p>
    
      <h5 className='text-xl mx-12'>Preparing Camera-Ready paper</h5>
      <ul>
        <li className='text-xl mx-12'>Improve the manuscript according to the reviewers&rsquo; comments</li>
        <li className='text-xl mx-12'>Pages are to be finally formatted according the Manuscript Style Information mentioned in the conference submission guidelines.</li>
        <li className='text-xl mx-12'>Authors should send the source file [Doc/Docx/LaTex] along with final updated PDF file.</li>
      </ul>
     
      <h5 className='text-3xl mx-12 text-[red] pt-4'>Copyright Form</h5>
      <ul>
        <li className='text-xl mx-12'>
          In order for the paper to be published in ICAETIS-2023 conference proceedings, a signed Copyright Form must be submitted for each paper.
        </li>
        <li className='text-xl mx-12'>The below attached file allows the user to do an electronic completion of the copyright transferring process.</li>

        <li className='text-xl mx-12'>
          The author should mandatorily fill the following details: Complete list of Author[s] with Affiliation, Paper Title and finally the form
          should be signed by the corresponding author.
        </li>
        <li className='text-xl mx-12'>
          In case it fails, an email will be sent to the author at a later time with information on how to make another copyright submission attempt.
        </li>
      </ul>
      <p className='text-xl mx-12'>
        Note: No paper can be published in the proceedings without being accompanied by a completed Copyright Transfer Form. The completed form must
        be submitted to have the paper included in the conference proceedings.
      </p>
      
      <h4 className='text-3xl mx-12 text-[red]'>Registration Fee</h4>
      <p className='text-xl mx-12'>All the registration fees for UG/PG Students,Research Scholar,Faculty and Industry people are given in this Google Form </p>
<a href="https://forms.gle/QK1GykfyjiQc74r16"><span className=' mx-12 text-xl text-[red]'>ICAETIS Registration Form</span> </a> 
      <p className='text-xl mx-12'>After the successful payment transfer. Take a screenshot of the transaction and save it as a PNG, IMG file.</p>
     
      <h5 className='text-3xl mx-12 text-[red]'>Presentation Guidelines</h5>
      <p className='text-xl mx-12'>
        After submitting the registration documents, the paper will be added in the ICAETIS-2023 Conference Presentation Schedule, which will be
        uploaded in the Conference Website Homepage and also it will be sent to the author via email 7-10 days before the conference start date.
      </p>
      <p className='text-xl mx-12'>
        There is no particular template for preparing a PPT file to present in the conference event but the presentation time is limited to 15 minutes
        for a papers. Authors should manage the time accordingly to complete the presentation. The presentation will be followed by a 5-minute Q&amp;A
        Session.
      </p>
  
      

</div>

    </>
  );
}

export default Registeration;
