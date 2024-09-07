import React from 'react';
import link from '../assets/link.png';
import code from '../assets/code.png';
import DesiDhaga from '../assets/DesiDhaga_image.png';
import SundownStudio from '../assets/SundownStudio_image.png';

export const Projects = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-white ml-8 md:ml-56">Projects</h1>
            <p className="text-gray text-sm sm:text-xl ml-8 md:ml-56 mb-10">Check out my projects.</p>
            <div className="flex flex-col gap-8 items-center justify-center mb-14">

                {/* Project 1: DesiDhaga */}
                <div className="max-w-5xl mx-auto p-6 bg-black bg-opacity-40 text-white pt-10 rounded-lg shadow-lg border border-opacity-15 border-gray backdrop-blur-lg flex flex-col md:flex-row items-center gap-6">
                    {/* Project Text Section */}
                    <div className="w-full md:w-1/2 p-4 text-white">
                        <h2 className="text-3xl font-bold mb-4">DesiDhaga - Clothing Brand</h2>
                        <hr className="border-gray mb-4" />
                        <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis pariatur harum aperiam saepe a beatae repudiandae ad, omnis repellendus.</p>
                        <div className="flex space-x-4">
                            <button className="p-2 rounded-lg bg-transparent border-2 border-gray-dark hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer shadow-[0px_0px_55px_2px_#1a202c]">
                                <a href="https://github.com/prajwalpal28/DesiDhaga-ClothingBrand" target='_blank'>
                                    <img src={code} alt="Source Code" className="h-6 w-6" />
                                </a>
                            </button>
                            <button className="p-2 rounded-lg bg-transparent border-2 border-gray-dark hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer shadow-[0px_0px_55px_2px_#1a202c]">
                                <a href="" target='_blank'>
                                    <img src={link} alt="Visit" className="h-6 w-6" />
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* Project Image Section */}
                    <div className="w-full md:w-1/2 p-4">
                        <img src={DesiDhaga} alt="Project Demo" className="rounded-lg shadow-lg object-cover w-full h-auto" />
                    </div>
                </div>

                {/* Project 2: Sundown Studio */}
                <div className="max-w-5xl mx-auto p-6 bg-black bg-opacity-40 text-white pt-10 rounded-lg shadow-lg border border-opacity-15 border-gray backdrop-blur-lg flex flex-col md:flex-row items-center gap-6">
                    {/* Project Text Section */}
                    <div className="w-full md:w-1/2 p-4 text-white">
                        <h2 className="text-3xl font-bold mb-4">Sundown_Studio - Animated Website</h2>
                        <hr className="border-gray mb-4" />
                        <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis pariatur harum aperiam saepe a beatae repudiandae ad, omnis repellendus.</p>
                        <div className="flex space-x-4">
                            <button className="p-2 rounded-lg bg-transparent border-2 border-gray-dark hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer shadow-[0px_0px_55px_2px_#1a202c]">
                                <a href="https://github.com/prajwalpal28/Sundown_Studio-Animated-Website" target='_blank'>
                                    <img src={code} alt="Source Code" className="h-6 w-6" />
                                </a>
                            </button>
                            <button className="p-2 rounded-lg bg-transparent border-2 border-gray-dark hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer shadow-[0px_0px_55px_2px_#1a202c]">
                                <a href="" target='_blank'>
                                    <img src={link} alt="Visit" className="h-6 w-6" />
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* Project Image Section */}
                    <div className="w-full md:w-1/2 p-4">
                        <img src={SundownStudio} alt="Project Demo" className="rounded-lg shadow-lg object-cover w-full h-auto" />
                    </div>
                </div>

            </div>
        </>
    );
};
