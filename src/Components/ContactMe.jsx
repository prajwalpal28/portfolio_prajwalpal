import React from 'react';

export const ContactMe = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto py-8 pt-44 text-white px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">Let's Connect</h1>
        <p className="text-gray text-base sm:text-xl mt-2">
          Have a question or want to work together? Fill out the form or reach out directly.
        </p>
      </div>
      <hr className="border-gray-dark mb-4" />

      <div className="p-6 rounded-lg bg-black bg-opacity-40 text-white mb-4 shadow-lg">
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="name" className="block text-sm font-bold text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full px-3 py-2 bg-input-box-gray border border-gray rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="block text-sm font-bold text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="mt-1 block w-full px-3 py-2 bg-input-box-gray border border-gray rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="block text-sm font-bold text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows={5}
              className="mt-1 block w-full px-3 py-2 bg-input-box-gray border border-gray rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
          </div>
        </form>
      </div>
      <div className="p-4 border-t border-gray">
        <button
          type="submit"
          className="bg-transparent border-2 border-gray text-indigo-500 py-2 px-3 sm:px-4 md:px-6 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 hover:scale-110 transform shadow-[0px_0px_55px_2px_#1a202c]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
