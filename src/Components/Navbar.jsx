import React from 'react'
import github_logo from '../assets/github_logo.png'
import twitter_logo from '../assets/twitter_logo.png'
import linkedin_logo from '../assets/linkedin_logo.png'

export const Navbar = () => {
    return (
        <div >
            <div className='flex justify-center gap-6' >
                <ul className='flex gap-8 mt-10 bg-black bg-opacity-50 text-white p-4 rounded-lg'>
                    <li className='hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer font-bold'>Prajwal.Pal</li>
                    <li className='hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer font-bold'>About</li>
                    <li className='hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer font-bold'>Projects</li>
                    <li className='hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer font-bold'>Techstack</li>
                    <li className='hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer font-bold'>Contact</li>
                </ul>

                <ul className='flex gap-4 mt-10 bg-black bg-opacity-50 text-white p-4 rounded-lg'>
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
