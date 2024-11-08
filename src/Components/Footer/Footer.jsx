import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 relative">
      {/* Newsletter */}
      <div className="absolute -top-20 left-0 right-0 w-3/4 h-[90px] mx-auto border rounded-xl p-2 bg-base-100">
        <div className="bg-gradient-to-r from-blue-300 via-white to-yellow-300 p-6 rounded-xl shadow-lg text-center text-black">
          <h2 className="text-2xl font-semibold mb-2">Subscribe to our Newsletter</h2>
          <p className="text-gray-700 mb-4">Get the latest updates and news right in your inbox!</p>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg w-10/12 md:w-64 text-gray-700 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white px-4 py-3 rounded-r-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-10 mt-28 pt-10 md:pt-0">
        <img src="/logo-footer.png" alt="Footer Logo" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {/* Left column */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm md:w-9/12">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* Middle column */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right column */}
        <div className="w-10/12">
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-sm mb-4 w-10/12">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy;2024 Dream11 BPL Hub All Rights Reserved.</p>
      </div>
    </footer>
  );
}
