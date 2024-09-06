import React from 'react'

export const MyWorld = () => {
    return (
        <>
            <h1 className='text-4xl font-bold text-white ml-56 '>Dive into my world.</h1>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 max-w-6xl">
                    {/* About Me Card */}
                    <a href="">
                        <div className="bg-black bg-opacity-40 text-white p-12 w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300">
                            <h2 className="text-4xl font-bold mb-4">About Me</h2>
                            <p className="text-gray-300 text-xl">Learn about my journey.</p>
                        </div>
                    </a>

                    {/* Projects Card */}
                    <a href="">
                        <div className="bg-black bg-opacity-40 text-white p-12 w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300">
                            <h2 className="text-4xl font-bold mb-4">Projects</h2>
                            <p className="text-gray-300 text-xl">Check out my projects.</p>
                        </div>
                    </a>

                    {/* Contact Me Card */}
                    <a href="">
                        <div className="bg-black bg-opacity-40 text-white p-12 w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300">
                            <h2 className="text-4xl font-bold mb-4">Contact</h2>
                            <p className="text-gray-300 text-xl">Reach out to me.</p>
                        </div>
                    </a>

                    {/* Techstack Card */}
                    <a href="">
                        <div className="bg-black bg-opacity-40 text-white p-12 w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300">
                            <h2 className="text-4xl font-bold mb-4">Techstack</h2>
                            <p className="text-gray-300 text-xl">See my technology stack.</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
