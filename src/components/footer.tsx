
import React from 'react';
import { GiSofa } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="">
      <footer className="text-gray-600 body-font">
        <div className="py-10 md:py-24">
          <div className="flex flex-wrap md:flex-nowrap md:text-center text-center justify-center">
            <div className="w-full md:w-64 flex-shrink-0 mx-auto mb-6 md:mb-0">
              <a className="flex title-font font-medium items-center justify-center text-gray-900">
                <GiSofa className="text-emerald-600 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                <span className="ml-3 text-xl">Comforty</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">Vivamus tristique odio sit amet veilt semper,eu posuere turpis interdum. cras egestas purus</p>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORY</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">Sofa</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Arm Chair</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Wing Chair</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Desk Chair</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Wooden Chair</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Park Bench</a></li>
              </nav>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">Help & Support</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Term & Condition</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Help</a></li>
              </nav>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0 space-y-2">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NEWSLETTER</h2>
              <div className="flex flex-wrap justify-center items-end">
                <div className="relative w-full sm:w-40 md:w-auto mb-3 md:mb-0">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg- border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br className="lg:block hidden" />Nullam tincidunt erat enim</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}