import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="mx-auto w-full px-44 py-28 h-full">

			<div className=' w-[90%] pb-[2vh]'>
				<h1 className='text-9xl pb-[2vh]'>Hello,
				</h1>
				<p className='text-8xl'>I'm Dhairyawan Kumar Tiwari.</p>
			</div >

			<div className='w-[40%] mr-[15%] inline-block'>
				<h2 className='text-2xl py-[1.5vh] font-bold'>About Me :</h2>
				<h2 className='text-2xl'>I'm a second year Computer Science Engineering student at International Institute of Information Technology, Bhubneshwar. My interest lies in Web Development and Competetive Programming. I am currently learning to work with MERN stack.
					<p>
						My hobbies include playing online games and exploring linux.
					</p>
				</h2>
			</div>
			<img src="https://placehold.co/600x800" alt="" className='inline-block'/>
			<div className='pt-[10vh]'>
				<h2 className='text-2xl  font-bold text-center'>Techstacks :</h2>
				<div className='grid grid-cols-6 py-10 pl-24'>
					<img width="96" height="96" src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-5--v1" className='inline-block' />
					<img width="96" height="96" src="https://img.icons8.com/color/96/css3.png" alt="css3" className='inline-block' />
					<img width="96" height="96" src="https://img.icons8.com/color/96/javascript--v1.png" alt="javascript--v1" className='inline-block'/>
					<img width="96" height="96" src="https://img.icons8.com/color/96/nodejs.png" alt="nodejs" className='inline-block'/>
					<img width="96" height="96" src="https://img.icons8.com/color/96/express-js.png" alt="express-js" className='inline-block'/>
					<img width="80" height="80" src="https://img.icons8.com/ultraviolet/80/react--v1.png" alt="react--v1" className='inline-block'/>
				</div>
			</div>
		</div>
	);
}