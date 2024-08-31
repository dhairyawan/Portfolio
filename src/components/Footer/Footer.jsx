import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" border-y border-[#26171745]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">

          <div className='w-full'>
            <h2 className=' text-xl font-bold text-center w-full'>Contact Me</h2>
            <div className=' grid-cols-2 grid gap-2 '>

              <span className=' pl-44'>
                <img width="30" height="32" src="https://img.icons8.com/ios-filled/50/apple-phone.png" alt="apple-phone" className='inline-block' />
                Phone :&nbsp;
                <a href="tel:+917396951371" className=' hover:underline'>+91-7396951371</a>
              </span>

              <span className='pl-44'>
                <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/gmail-new.png" alt="gmail-new" className='inline-block' />
                &nbsp;Gmail :&nbsp;
                <a href="mailto:dhairyawankumartiwari@gmail.com" className=' hover:underline'>dhairyawankumartiwari@gmail.com</a>
              </span>

              <span className='pl-44'>
                <img width="28" height="24" src="https://img.icons8.com/material-rounded/48/discord-logo.png" alt="discord-logo" className='inline-block' />&nbsp;Discord :&nbsp;
                <a href="#" className=' hover:underline'>dhairyawan</a>
              </span>

              <span className='pl-44'>
                <img width="28" height="32" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" className='inline-block' />&nbsp;Linkedin :&nbsp;
                <a href="https://www.linkedin.com/in/dhairyawan-kumar-tiwari-b5888328b" className=' hover:underline'>Dhairyawan Kumar Tiwari</a>
              </span>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}