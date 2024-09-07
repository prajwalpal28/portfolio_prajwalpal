import React from 'react';
import Hero_imgg from '../assets/Hero_imgg.png';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="w-full bg-transparent p-8 pt-12">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-6 gap-x-12 text-center">
                <a href="#" className='text-gray text-xl hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer' >
                    <Link to='/'>Prajwal.Pal</Link>
                </a>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <a
                            href="#"
                            className="text-gray transition-colors hover:text-white focus:text-white font-normal"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray transition-colors hover:text-white focus:text-white font-normal"
                        >
                            Project's
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray transition-colors hover:text-white focus:text-white font-normal"
                        >
                            Collaborate
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray transition-colors hover:text-white focus:text-white font-normal"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-gray" />
            <p className="text-gray text-center font-normal">
                &copy; 2024 Prajwal.Pal
            </p>
        </footer>
    );
}
