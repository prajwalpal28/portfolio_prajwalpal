import React from 'react';
import Hero_imgg from '../assets/Hero_imgg.png';

export const Hero_com = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen mx-auto py-16 px-4 md:px-8 lg:px-16 xl:px-24 pt-28 md:pt-40">

            <div className="flex flex-col gap-6 bg-black bg-opacity-40 text-white py-10 px-6 sm:px-8 md:px-10 rounded-lg shadow-lg border border-opacity-15 border-gray max-w-full md:max-w-2xl">

                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                        <span className="text-gray-light">I'am</span> Prajwal Pal
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                        I am a web developer with a strong focus on React, currently
                        <br /> expanding my expertise into backend development to become
                        <br /> a well-rounded full-stack developer.
                    </p>
                </div>

                <div className="flex flex-wrap space-x-4 sm:space-x-6 md:space-x-8">
                    <button className="border-2 border-gray-800 rounded-lg px-3 py-2 text-gray cursor-pointer hover:text-gray-200 hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform shadow-[0px_0px_55px_2px_#1a202c]">
                        <a href="https://docs.google.com/document/d/1UMP-q0cg3g-6ioganaBhF0Dsoa0ByrqWWEaNSGZiX9s/edit?usp=drive_link" target='_blank' rel='noopener noreferrer'>
                            See my resume
                        </a>
                    </button>
                    <button className="bg-transparent border-2 border-gray text-indigo-500 py-2 px-3 sm:px-4 md:px-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform shadow-[0px_0px_55px_2px_#1a202c]">
                        <a href="">Get in touch</a>
                    </button>
                </div>
            </div>

            <div className="mt-12 md:mt-0 md:ml-16 flex-shrink-0 shadow-[0px_0px_55px_10px_#1a202c]">
                <div className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg border border-opacity-15 border-gray">
                    <img src={Hero_imgg} alt="Prajwal's Photo" className="w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover" />
                </div>
            </div>
        </div>
    );
};
