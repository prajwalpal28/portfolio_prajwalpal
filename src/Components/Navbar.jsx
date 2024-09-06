import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import github_logo from '../assets/github_logo.png'
import twitter_logo from '../assets/twitter_logo.png'
import linkedin_logo from '../assets/linkedin_logo.png'

export const Navbar = () => {

    const [menu, setMenu] = useState("Prajwal.Pal");

    return ( 
        <div className="fixed top-0 left-0 w-full z-50">
            <div className='flex justify-center gap-12' >
                <ul className='flex justify-evenly  gap-12 mt-10 bg-navblur bg-opacity-30 text-white p-4 rounded-lg shadow-lg border border-border backdrop-blur-3xl'>
                    <li
                        onClick={() => setMenu("Prajwal.Pal")}
                        className={`hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer ${menu === "Prajwal.Pal" ? "font-bold" : ""}`}
                    >
                        <Link to='/'>Prajwal.Pal</Link>
                    </li>
                    <li
                        onClick={() => setMenu("About")}
                        className={`hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer ${menu === "About" ? "font-bold" : ""}`}
                    >
                        <Link to='/about'>About</Link>
                    </li>

                    <li
                        onClick={() => setMenu("Projects")}
                        className={`hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer ${menu === "Projects" ? "font-bold" : ""}`}
                    >
                        <Link to='/projects'>Projects</Link>
                    </li>

                    <li
                        onClick={() => setMenu("Techstack")}
                        className={`hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer ${menu === "Techstack" ? "font-bold" : ""}`}
                    >
                        <Link to='/techstack'>Techstack</Link>
                    </li>

                    <li
                        onClick={() => setMenu("Contact")}
                        className={`hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer ${menu === "Contact" ? "font-bold" : ""}`}
                    >
                        <Link to='/contact'>Contact</Link>
                    </li>

                </ul>

                <ul className='flex justify-evenly gap-4 mt-10 bg-black bg-opacity-30 text-white p-4 rounded-lg border border-border backdrop-blur-3xl'>
                    <li><a href="https://github.com/prajwalpal28" target="_blank"><img src={github_logo} alt="github" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" /></a></li>
                    <h1 className='font-bold'>|</h1>
                    <li><a href="https://www.linkedin.com/in/prajwalpal28/" target="_blank"><img src={linkedin_logo} alt="linkedin" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" /></a></li>
                    <h1 className='font-bold'>|</h1>
                    <li><a href="https://x.com/Prajwalpal18" target="_blank"><img src={twitter_logo} alt="twitter" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" /></a></li>
                </ul>
            </div>
        </div>
    )
}
