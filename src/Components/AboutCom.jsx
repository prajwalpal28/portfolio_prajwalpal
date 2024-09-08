import React from 'react';
import HiMimoji from '../assets/HiMimojii.png';

export const AboutCom = () => {
  return (
    <div className="text-white w-full max-w-screen-lg mx-auto py-8 pt-44 px-4 md:px-8">
      {/* Section Heading */}
      <div className="mb-8 text-left">
        <h1 className="text-4xl font-bold">Meet Me</h1>
        <p className="text-gray-400 text-sm sm:text-xl mt-2">
          An Overview of My Skills and Experience
        </p>
      </div>

      <hr className="border-gray-dark mb-4" />

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Text Content */}
        <div className="md:col-span-2">
          <p className="mb-6 leading-relaxed">
            I'm a final-year Information Technology student based in Pune, India.🏙️ In addition to my studies, I'm passionate about cricket🏏 and enjoy playing mobile games🎮 to relax and stay active.💪
          </p>
          <p className="leading-relaxed">
            As a wAs a web developer, I specialize in React⚛️ and am now expanding my skills in backend development. My goal🎯 is to become a versatile full-stack developer, mastering both frontend and backend technologies 💻.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex justify-center ">
          <img src={HiMimoji} alt="HiMimoji" className="w-72 h-auto" />
        </div>
      </div>
    </div>
  );
};
