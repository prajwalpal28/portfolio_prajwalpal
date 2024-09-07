import React from 'react'
import Collaborate_img from '../assets/Collaborate.png'

export const Collaborate = () => {
    return (
        <div className="min-h-max flex flex-col gap-64 md:flex-row items-center justify-center pb-10">

            {/* Text Section */}
            <div className="text-white pl-2 text-center md:text-left md:max-w-md">
                <h1 className="text-4xl font-bold mb-4">Let’s Collaborate</h1>
                <p className="text-lg text-gray-300 mb-6">
                    Eager to explore a chance to build something amazing together? I’m available to discuss whenever you are.
                </p>
            </div>

            {/* Button Section */}
            <div className="mt-6 md:mt-0 md:ml-8">
                <a href="">
                    <button className="flex items-center gap-3 border-2 border-gray-800 rounded-lg px-3 py-2 text-gray cursor-pointer  hover:text-gray-200 hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform transition-transform duration-300 hover:cursor-pointer shadow-[0px_0px_55px_2px_#1a202c]">
                        <img src={Collaborate_img} alt="Collaborate" className="w-6 h-6 invert" />
                        Let’s Collaborate
                    </button>
                </a>
            </div>
        </div>
    )
}
