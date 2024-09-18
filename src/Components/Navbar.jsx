import { useState } from 'react';
import { Link } from 'react-router-dom';
import github_logo from '../assets/github_logo.png';
import twitter_logo from '../assets/twitter_logo.png';
import linkedin_logo from '../assets/linkedin_logo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Using react-icons for the toggle button

export const Navbar = () => {
    const [menu, setMenu] = useState("Prajwal.Pal");
    const [isOpen, setIsOpen] = useState(false); // State for toggling the menu on small screens

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:flex md:flex-row md:justify-center fixed top-0 left-0 w-full z-50">

            {/* Main Navbar Container */}
            <div className='flex justify-center md:justify-between gap-12 items-center px-4 md:px-12 py-4 bg-opacity-30 text-white '>

                {/* Left Section - Name/Logo */}
                <div className='md:flex justify-center gap-12 hidden'>
                    <ul className='flex justify-evenly gap-12 mt-10 bg-navblur bg-opacity-30 text-white p-4 rounded-lg shadow-lg border border-border backdrop-blur-3xl'>
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
                </div>

                {/* Toggle Button for Mobile Devices */}
                <div className="flex gap-44 items-center md:hidden rounded-lg shadow-lg bg-navblur bg-opacity-30 text-white border border-border p-4 backdrop-blur-3xl">
                    <li
                        onClick={() => { setMenu("Prajwal.Pal"); setIsOpen(false); }}
                        className={`hover:scale-110 text-2xl list-none transform transition-transform duration-300 ${menu === "Prajwal.Pal" ? "font-bold" : ""}`}
                    >
                        <Link to='/'>Prajwal.Pal</Link>
                    </li>

                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FiX className="h-10 w-10" /> : <FiMenu className="h-10 w-10" />}
                    </button>

                </div>
            </div>

            {/* Dropdown Menu for Mobile Devices */}
            <ul className={`md:hidden flex flex-col items-center gap-6 p-4 rounded-lg shadow-lg border border-border backdrop-blur-3xl text-white absolute w-1/2 top-16 right-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>

                <li
                    onClick={() => { setMenu("About"); setIsOpen(false); }}
                    className={`hover:scale-110 transform transition-transform duration-300 ${menu === "About" ? "font-bold" : ""}`}
                >
                    <Link to='/about'>About</Link>
                </li>
                <li
                    onClick={() => { setMenu("Projects"); setIsOpen(false); }}
                    className={`hover:scale-110 transform transition-transform duration-300 ${menu === "Projects" ? "font-bold" : ""}`}
                >
                    <Link to='/projects'>Projects</Link>
                </li>
                <li
                    onClick={() => { setMenu("Techstack"); setIsOpen(false); }}
                    className={`hover:scale-110 transform transition-transform duration-300 ${menu === "Techstack" ? "font-bold" : ""}`}
                >
                    <Link to='/techstack'>Techstack</Link>
                </li>
                <li
                    onClick={() => { setMenu("Contact"); setIsOpen(false); }}
                    className={`hover:scale-110 transform transition-transform duration-300 ${menu === "Contact" ? "font-bold" : ""}`}
                >
                    <Link to='/contact'>Contact</Link>
                </li>

                {/* Social Links for Mobile View */}
                <ul className="flex justify-center gap-4 mt-4">
                    <li>
                        <a href="https://github.com/prajwalpal28" target="_blank" rel="noreferrer">
                            <img src={github_logo} alt="github" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" />
                        </a>
                    </li>
                    <h1 className="font-bold">|</h1>
                    <li>
                        <a href="https://www.linkedin.com/in/prajwalpal28/" target="_blank" rel="noreferrer">
                            <img src={linkedin_logo} alt="linkedin" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" />
                        </a>
                    </li>
                    <h1 className="font-bold">|</h1>
                    <li>
                        <a href="https://x.com/Prajwalpal18" target="_blank" rel="noreferrer">
                            <img src={twitter_logo} alt="twitter" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" />
                        </a>
                    </li>
                </ul>
            </ul>

            {/* Social Icons for Desktop View */}
            <ul className="hidden md:flex justify-evenly gap-4 mt-14 mb-4 bg-black bg-opacity-30 text-white p-4 rounded-lg border border-border backdrop-blur-3xl">
                <li>
                    <a href="https://github.com/prajwalpal28" target="_blank" rel="noreferrer">
                        <img src={github_logo} alt="github" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" />
                    </a>
                </li>
                <h1 className="font-bold">|</h1>
                <li>
                    <a href="https://www.linkedin.com/in/prajwalpal28/" target="_blank" rel="noreferrer">
                        <img src={linkedin_logo} alt="linkedin" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" />
                    </a>
                </li>
                <h1 className="font-bold">|</h1>
                <li>
                    <a href="https://x.com/Prajwalpal18" target="_blank" rel="noreferrer">
                        <img src={twitter_logo} alt="twitter" className="h-6 w-6 invert hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer" />
                    </a>
                </li>
            </ul>

        </div>
    );
};
