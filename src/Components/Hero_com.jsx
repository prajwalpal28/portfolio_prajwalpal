import { useState } from 'react';
import Hero_imgg from '../assets/Hero_imgg.png';
import { Link } from 'react-router-dom';
import { MdOutlineDocumentScanner } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { FiMenu, FiX } from 'react-icons/fi'; // Using react-icons for the toggle button




export const Hero_com = () => {

    const [resumeOpen, setResumeOpen] = useState(false);

    const toggleResume = () => {
        setResumeOpen(!resumeOpen);
    };

    return (
        <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center min-h-screen mx-auto py-40 px-4 md:px-8 lg:px-16 xl:px-24 pt-28 md:pt-40">

            {/* Left Section */}
            <div className="flex flex-col justify-center gap-6 bg-black bg-opacity-40 text-white py-10 px-6 sm:px-8 md:px-10 rounded-lg shadow-lg border border-opacity-15 border-gray max-w-full md:max-w-2xl">

                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                        <span className="text-gray-light">I&apos;am</span> Prajwal Pal
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                        I am a web developer with a strong focus on React, currently
                        <br /> expanding my expertise into backend development to become
                        <br /> a well-rounded full-stack developer.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">

                    <button
                        onClick={toggleResume}
                        className="flex items-center gap-2 border-2 border-gray-800 rounded-lg px-3 py-2 text-gray cursor-pointer hover:text-gray-200 hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform shadow-[0px_0px_55px_2px_#1a202c]"
                    >
                        {resumeOpen ? <MdOutlineDocumentScanner className="h-5 w-5" /> : <TiDocumentText className="h-5 w-5" />}
                        See my resume
                    </button>


                    <Link to='/contact'>
                        <button className="bg-transparent border-2 border-gray text-indigo-500 py-2 px-3 sm:px-4 md:px-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform shadow-[0px_0px_55px_2px_#1a202c]">
                            Get in touch
                        </button>
                    </Link>
                </div>
            </div>

            <div className={`${resumeOpen ? 'block' : 'hidden'} p-4 rounded-lg shadow-lg border border-border backdrop-blur-3xl text-white absolute md:right-44 right-10 top-10 transition-all duration-300 z-50`}>

                <div className="md:max-w-lg md:w-full md:h-auto max-w-80 w-full h-auto mx-auto p-3 shadow-md rounded-lg">
                    <button onClick={toggleResume} className="text-white focus:outline-none absolute top-1 right-3">
                        {resumeOpen ? <FiX className="h-10 w-10" /> : <FiMenu className="h-10 w-10" />}
                    </button>
                    <div className="text-center">
                        <h1 className="text-xl font-bold">Prajwal Pal</h1>
                        <p className="mt-1 text-gray-600 text-xs">
                            +91 8080480114 | palprajwal18@gmail.com <br />
                            <a href="https://www.linkedin.com/in/prajwalpal28/" className="text-indigo-500">LinkedIn</a> |
                            <a href="https://github.com/prajwalpal28" className="text-indigo-500">GitHub</a> |
                            <a href="https://portfolio-prajwalpal.vercel.app/" className="text-indigo-500">Portfolio</a>
                        </p>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-800">Summary</h2>
                        <p className="mt-2 text-gray-600 text-xs">
                            I&apos;m a final-year IT student with a big interest in full-stack web development and experience in creating web applications.
                        </p>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
                        <ul className="list-disc list-inside text-gray-600 mt-1 text-xs">
                            <li><strong>Frontend:</strong> JavaScript, React JS, HTML, CSS, Tailwind CSS, Bootstrap CSS</li>
                            <li><strong>Backend:</strong> Node.js, Express.js</li>
                            <li><strong>Database:</strong> MongoDB, MySQL</li>
                            <li><strong>Programming:</strong> C/C++, JavaScript</li>
                            <li><strong>Version Control:</strong> Git/GitHub</li>
                            <li><strong>UI/UX:</strong> Figma, Canva</li>
                        </ul>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-800">Education</h2>
                        <p className="mt-2 text-gray-600 text-xs">
                            G H Raisoni College Of Engineering, Pune - Bachelor in Information Technology (7.88 CGPA)
                            <br />
                            Dec 2021 - July 2025
                        </p>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-800">Projects</h2>

                        <div className="mt-3">
                            <h3 className="font-semibold text-gray-800 text-sm">Portfolio Website</h3>
                            <p className="text-gray-600 text-xs">
                                Technologies: React, Node.js, MongoDB, Tailwind CSS, JavaScript <br />
                                Created a professional portfolio showcasing full-stack development projects.
                            </p>
                            <a href="https://github.com/prajwalpal28/portfolio_prajwalpal" className="text-indigo-500 text-xs">GitHub Link</a>
                        </div>

                        <div className="mt-3">
                            <h3 className="font-semibold text-gray-800 text-sm">DesiDhaga - Clothing Brand Website</h3>
                            <p className="text-gray-600 text-xs">
                                Technologies: React, Tailwind CSS, JavaScript<br />
                                Developed an e-commerce platform with a fully responsive design.
                            </p>
                            <a href="https://github.com/prajwalpal28/DesiDhaga-ClothingBrand" className="text-indigo-500 text-xs">GitHub Link</a>
                        </div>

                        <div className="mt-3">
                            <h3 className="font-semibold text-gray-800 text-sm">Sundown Studio - Animated Website</h3>
                            <p className="text-gray-600 text-xs">
                                Technologies: HTML5, CSS3, JavaScript, Animation Libraries <br />
                                Designed a highly interactive and visually appealing website using advanced animation libraries.
                            </p>
                            <a href="https://github.com/prajwalpal28/Sundown_Studio-Animated-Website" className="text-indigo-500 text-xs">GitHub Link</a>
                        </div>
                    </div>
                </div>


            </div>


            {/* Right Section (Image) */}
            <div className="mt-12 md:mt-0 md:ml-16 flex-shrink-0 flex items-center justify-center shadow-[0px_0px_55px_10px_#1a202c] w-full md:w-auto">
                <div className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg border border-opacity-15 border-gray h-full">
                    <img src={Hero_imgg} alt="Prajwal's Photo" className="w-48 h-48 sm:w-56 sm:h-56 md:w-96 md:h-96 object-cover" />
                </div>
            </div>
        </div >
    );
};
