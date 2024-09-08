import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="w-full bg-transparent p-8 pt-12">
            {/* Container for footer links and logo */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-6 gap-x-12 text-center">
                {/* Logo or home link */}
                <a href="#" className='text-gray text-xl hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer'>
                    <Link to='/'>Prajwal.Pal</Link>
                </a>

                {/* Footer Navigation Links */}
                <ul className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 gap-x-8">
                    <Link to='/about'>
                        <li className="text-gray transition-colors hover:text-white focus:text-white font-normal">
                            About Us
                        </li>
                    </Link>

                    <Link to='/projects'>
                        <li className="text-gray transition-colors hover:text-white focus:text-white font-normal">
                            Project's
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className="text-gray transition-colors hover:text-white focus:text-white font-normal">
                            Collaborate
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className="text-gray transition-colors hover:text-white focus:text-white font-normal">
                            Contact Us
                        </li>
                    </Link>
                </ul>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray" />

            {/* Copyright Section */}
            <p className="text-gray text-center font-normal">
                &copy; 2024 Prajwal.Pal
            </p>
        </footer>
    );
}
