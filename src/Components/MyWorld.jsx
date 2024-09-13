import ContactMe from '../assets/ContactMe.png'
import About from '../assets/Loveme.png'
import ProjectIdea from '../assets/ProjectIdea.png'
import { Link } from 'react-router-dom'

export const MyWorld = () => {
    return (
        <>
            <div className='min-h-screen'>

                <h1 className='text-4xl font-bold text-white ml-8 md:ml-56 mb-10'>Dive into my world.</h1>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4 sm:p-8 max-w-6xl">
                        {/* About Me Card */}
                        <Link to='/about'>
                            <div className="flex justify-between items-center bg-black bg-opacity-40 text-white p-8 sm:p-12 w-full sm:w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300 relative">
                                <div>
                                    <h2 className="text-2xl sm:text-4xl font-bold mb-4">About Me</h2>
                                    <p className="text-gray text-base sm:text-xl">Learn about my journey.</p>
                                </div>
                                <div>
                                    <img src={About} alt="About" className="w-24 sm:w-32 h-24 sm:h-32 object-contain" />
                                </div>
                            </div>
                        </Link>


                        {/* Projects Card */}
                        <Link to='/projects'>
                            <div className="flex justify-between items-center bg-black bg-opacity-40 text-white p-8 sm:p-12 w-full sm:w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300 relative">
                                <div>
                                    <h2 className="text-2xl sm:text-4xl font-bold mb-4">Projects</h2>
                                    <p className="text-gray text-base sm:text-xl">Check out my projects.</p>
                                </div>
                                <div>
                                    <img src={ProjectIdea} alt="Projects" className="w-24 sm:w-32 h-24 sm:h-32 object-contain" />
                                </div>
                            </div>
                        </Link>

                        {/* Contact Me Card */}
                        <Link to='/contact'>
                            <div className="flex justify-between items-center bg-black bg-opacity-40 text-white p-8 sm:p-12 w-full sm:w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300 relative">
                                <div>
                                    <h2 className="text-2xl sm:text-4xl font-bold mb-4">Contact</h2>
                                    <p className="text-gray text-base sm:text-xl">Reach out to me.</p>
                                </div>
                                <div>
                                    <img src={ContactMe} alt="Contact" className="w-24 sm:w-32 h-24 sm:h-32 object-contain" />
                                </div>
                            </div>
                        </Link>

                        {/* Techstack Card */}
                        <Link to='/techstack'>
                            <div className="flex justify-between items-center bg-black bg-opacity-40 text-white p-8 sm:p-12 w-full sm:w-[500px] h-[200px] border border-gray border-opacity-20 rounded-lg shadow-lg hover:shadow-[0px_0px_75px_3px_#1a202c] transition-shadow duration-300 relative">
                                <div>
                                    <h2 className="text-2xl sm:text-4xl font-bold mb-4">Techstack</h2>
                                    <p className="text-gray text-base sm:text-xl">See my technology stack.</p>
                                </div>
                                <div>
                                    <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs&perline=2" alt="Techstack" className="w-24 sm:w-32 h-24 sm:h-32 object-contain" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
