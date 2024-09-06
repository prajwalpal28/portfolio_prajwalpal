import React from 'react'
import Hero_imgg from '../assets/Hero_imgg.png';


export const Hero_com = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-center min-h-screen mx-auto py-28 pt-40">

            <div className="flex flex-col gap-10 bg-black bg-opacity-40 text-white pt-10 pb-24 px-8 rounded-lg shadow-lg border border-opacity-15 border-gray max-h-6xl max-w-2xl ">

                <div >
                    <h1 className="text-5xl font-bold text-white mb-6">
                        <span className="text-gray-light">I'am</span> Prajwal Pal
                    </h1>
                    <p className="text-xl leading-relaxed mb-6">
                        I am a web developer with a strong focus on React, currently
                        <br /> expanding my expertise into backend development to become
                        <br /> a well-rounded full-stack developer.
                    </p>
                </div>

                <div className="flex space-x-8">
                    <button className="border-2 border-gray-800 rounded-lg px-3 py-2 text-gray cursor-pointer  hover:text-gray-200 hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer shadow-[0px_0px_55px_2px_#1a202c]">
                        <a href="https://docs.google.com/document/d/1UMP-q0cg3g-6ioganaBhF0Dsoa0ByrqWWEaNSGZiX9s/edit?usp=drive_link" target='_blank'>
                            See my resume
                        </a>
                    </button>
                    <button className="bg-transparent border-2 border-gray text-indigo-500 py-2 px-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer shadow-[0px_0px_55px_2px_#1a202c]">
                        <a href="">Get in touch</a>
                    </button>
                </div>
            </div>

            <div className="mt-12 md:mt-0 md:ml-16 flex-shrink-0 shadow-[0px_0px_55px_10px_#1a202c]">

                <div className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg border border-opacity-15 border-gray">
                    <img src={Hero_imgg} alt="Prajwal's Photo" className="w-72 h-72 md:w-96 md:h-96 object-cover" />
                </div>

            </div>
        </div>
    );
};