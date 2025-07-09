"use client"
import React, { useState } from 'react';

// Main App component
const NicoSafe = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeepMePosted = () => {
    // Handle the "Keep Me Posted" submission logic here
    console.log('Email submitted:', email);
    alert('Thank you for your interest! We will keep you posted.');
    setEmail(''); // Clear the input after submission
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Navigation Bar */}
     <div className=''>
       <nav className="absolute maxWidth top-0 left-0 right-0 z-10 p-4 md:p-6 flex items-center ">
        <div className="flex items-center space-x-2">
          {/* NikoSafe Logo and Text */}
          <img src="/nikosafe-logo.png" alt="" />
        </div>
        {/* You can add navigation links here if needed for desktop */}
        {/* <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">About Us</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div> */}
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0">
          <img
            src="nikosafe-banner.png"
            alt="Concert background"
            className="w-full h-full object-cover opacity-70"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/1920x1080/1a202c/ffffff?text=Fallback+Image";
            }}
            // Added the inline style for the background gradient
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.12) 62.98%, rgba(0, 0, 0, 0.00) 100%), url("/nikosafe-banner.png") lightgray 50% / cover no-repeat',
              backgroundSize: 'cover', // Ensure the background image covers the elemente
              backgroundPosition: '50%', // Center the background image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 maxWidth px-4 md:px-8">
        
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Drink Smarter. Live Better.
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            A revolutionary app that blends social drinking, real-time tracking, and AI-powered
            insights – all while promoting responsible choices.
          </p>
          <ul className="text-left text-gray-300 space-y-2 mb-12">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">&#x2022;</span> Order & pay for drinks via QR code
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">&#x2022;</span> Track your alcohol intake & estimate BAC
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">&#x2022;</span> Safe rides home with Uber/Lyft integration
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">&#x2022;</span> Discover exclusive deals from local bars
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">&#x2022;</span> Access on-demand wellness & health services
            </li>
          </ul>
        </div>
      </header>

      {/* Keep Me Posted Section */}
      <section
        className="py-16 px-4 md:px-8 text-center"
        style={{
          background: 'linear-gradient(180deg, #2A3D45 0%, #1F2C33 100%)',
        }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Be the First to Experience the Future of Drinking
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our waitlist to get exclusive early access, special perks, and stay updated as we prepare to launch.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-2/3 p-3  rounded-[27px]  bg-[#FFFFFF1A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            onClick={handleKeepMePosted}
            className="w-full md:w-auto px-6 py-3 rounded-[27px] border border-[#fff] hover:bg-blue-700 transition duration-300 ease-in-out font-semibold shadow-lg"
          >
            Keep Me Posted
          </button>

          
        </div>
      </section>
     </div>
    </div>
  );
};

export default NicoSafe;