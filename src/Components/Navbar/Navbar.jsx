import React, { useState } from 'react';

export default function Navbar({ coins }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/80">
      <div className="max-w-screen-lg mx-auto p-4 flex items-center justify-between">
        
        {/* logo and coins */}
        <div className="flex justify-between items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto rounded-lg" />
        </div>
       <ul className="hidden md:flex gap-8 text-base font-medium text-gray-700">
          <li><a href="">Home</a></li>
          <li><a href="">Fixture</a></li>
          <li><a href="">Teams</a></li>
          <li><a href="">Schedules</a></li>
        </ul>
        <button className=" btn navbar-end w-40 ">
            <span className="font-semibold">{coins}</span>
            <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/1490/1490853.png" alt="" />
          </button >

        {/* hamburger menu */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* dropdown menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-start p-4 ">
          <li><a href="" className="block py-2">Home</a></li>
          <li><a href="" className="block py-2">Fixture</a></li>
          <li><a href="" className="block py-2">Teams</a></li>
          <li><a href="" className="block py-2">Schedules</a></li>
        </ul>
      )}
    </div>
  );
}
