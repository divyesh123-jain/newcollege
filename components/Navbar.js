import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import dsi from '../Images/dsi.png'
import re from '../Images/re.png'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
 import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
   const [position, setPosition] = useState('fixed')
   const router = useRouter();

  useEffect(() => {
     if (
       router.asPath === '/property' ||
       router.asPath === '/crypto' ||
       router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
       setNavBg('transparent');
       setLinkColor('#ecf0f3');
     } else {
       setNavBg('#ecf0f3');
       setLinkColor('#1f2937');
     }
   }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: 'white' }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <div className='flex mx-5'>
        <Image src={dsi} className="rounded-full w-[10vh]" alt="" />
        <Image src={re} className="rounded-full w-[10vh] mx-5" alt="" />
        
      </div>
        <Link href='/'>
          
        </Link>
        <div>
          <ul style={{ color: 'black' }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/conference'>About Conference</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/committie'>Committee</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/Callforpapers'>Call For Papers</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/Keynote'>Keynote</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/Submission'>Submission</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/Registeration'>Registration</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/Venue'>Venue</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/Contact'>Contact Us</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} color="white" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
               
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-black-900 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
             
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase '>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/conference'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About Conference
                </li>
              </Link>
              <Link href='/committie'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Committee
                </li>
              </Link>
              <Link href='/Callforpapers'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Call For Papers
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Keynote
                </li>
              </Link>
              <Link href='/Submission'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Submission
                </li>
              </Link>
              <Link href='/Registeration'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Registration
                </li>
              </Link>
              <Link href='/Venue'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Venue
                </li>
              </Link>
              <Link href='/Contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;