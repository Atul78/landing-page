import React, { useState } from "react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./SocialIcons";
import { MenuIcon } from "./MenuIcon";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImageUrl =
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg";
  const profileImageUrl =
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg";

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <span className="text-indigo-600 font-bold text-xl">Logo</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-gray-700">
              <button>Home</button>
              <button>About</button>
              <button>Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <span className="block">Home</span>
            <span className="block">About</span>
            <span className="block">Contact</span>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="bg-indigo-600 text-white flex items-center justify-center p-10 md:w-1/2">
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span>Welcome to Our</span>
              <br />
              <span className="text-indigo-200">Amazing Landing Page</span>
            </h1>

            <p className="mt-6 text-indigo-100">
              Discover the power of Tailwind CSS with this beautifully crafted
              landing page. Responsive, modern, and easy to customize.
            </p>

            <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
              Get started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={heroImageUrl}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Profile Card */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />

          <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>

          <p className="text-gray-500">Web Developer & Designer</p>

          <p className="text-gray-500 mt-4">
            Passionate about creating beautiful and functional web experiences
            using the latest technologies.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-gray-500">
            <span>
              <GithubIcon />
            </span>
            <span>
              <TwitterIcon />
            </span>
            <span>
              <LinkedInIcon />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
