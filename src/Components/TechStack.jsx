import React from 'react';

export const TechStack = () => {
    return (
        <div className="text-white w-full max-w-screen-lg mx-auto py-8 pt-44 ">
            <div className="mb-8 text-left">
                <h1 className="text-4xl font-bold">Techstack</h1>
                <p className="text-gray text-sm sm:text-xl mt-2">See my technology stack.</p>
            </div>
            <hr className="border-gray-dark mb-4" />

            <div className="space-y-8">
                {/* Programming Languages Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Programming Languages</h1>
                    <ul className="flex flex-wrap gap-6 justify-left">
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=c" alt="C" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">C</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">C++</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">JavaScript</h2>
                        </li>
                    </ul>
                </div>

                {/* Frontend Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Frontend</h1>
                    <ul className="flex flex-wrap gap-6 justify-left">
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">JavaScript</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=react" alt="React JS" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">React JS</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=html" alt="HTML" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">HTML</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=css" alt="CSS" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">CSS</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">Tailwind CSS</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">Bootstrap</h2>
                        </li>
                    </ul>
                </div>

                {/* Backend Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Backend</h1>
                    <ul className="flex flex-wrap gap-6 justify-left">
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=nodejs" alt="Node JS" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">Node JS</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=express" alt="Express JS" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">Express JS</h2>
                        </li>
                    </ul>
                </div>

                {/* Database Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Database</h1>
                    <ul className="flex flex-wrap gap-6 justify-left">
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">MongoDB</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">MySQL</h2>
                        </li>
                    </ul>
                </div>

                {/* Other Tools Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Other Tools</h1>
                    <ul className="flex flex-wrap gap-6 justify-left">
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">VS Code</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=git,github" alt="Git/Github" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">Git/Github</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=postman" alt="Postman" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">Postman</h2>
                        </li>
                        <li className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg w-32 sm:w-40 text-center hover:scale-105 transform transition-transform">
                            <img src="https://skillicons.dev/icons?i=npm" alt="NPM" className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2" />
                            <h2 className="text-sm sm:text-lg">NPM</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
