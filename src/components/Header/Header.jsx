import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header className="shadow sticky z-50 top-0 h-full w-full bg-indigo-500 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 backdrop-saturate-100 backdrop-contrast-75">
			<nav className="h-full w-full px-4 lg:px-6 py-[1.5vh]">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

					{/* <Link to="/" className="flex items-center">
						<img
							src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
							className="mr-3 h-12"
							alt="Logo"
						/>
					</Link> */}

					<div className="flex items-center lg:order-2 gap-5">

						<a href="https://www.instagram.com/dhairyawankumartiwari">
							<img width="32" height="32" src="https://img.icons8.com/glyph-neue/64/instagram-new--v1.png" alt="instagram-new--v1" /></a>

						<a href="https://www.linkedin.com/in/dhairyawan-kumar-tiwari-b5888328b">
							<img width="32" height="32" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" /></a>

						<a href="https://github.com/dhairyawan">
							<img width="32" height="32" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github" /></a>

					</div>

					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-large lg:flex-row lg:space-x-8 lg:mt-0">
							{/* <li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Home
								</NavLink> 
							</li> */}
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-black" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
									}
								>
									About
								</NavLink>
							</li>
							{/* <li>
								<NavLink
									to="/techstacks"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Techstacks
								</NavLink>
							</li> */}
							<li>
								<NavLink
									to="/projects"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-black" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
									}
								>
									Projects
								</NavLink>
							</li>
							<li>
								{/* <NavLink
									to="/resume"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-black" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
									}
								>
									Resume
								</NavLink> */}
							</li>


						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
