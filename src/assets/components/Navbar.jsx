import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [visible, SetVisible] = useState(false);

    return (
        <div className="flex items-center justify-between font-medium">
            {/* Logo */}
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="w-40"
                    style={{
                        // marginLeft: '-40px', 
                    }}
                />
            </NavLink>

            {/* Navbar Links and Button */}
            <div className="flex items-center text-center gap-6 ml-auto mt-1"> {/* Push links and button to the right */}
                {/* Navbar Links */}
                <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>Home</p>
                        <hr hidden className="w-2/4 border-none h-[1.5px] bg-yellow-400" />
                    </NavLink>
                    <NavLink to="/About" className="flex flex-col items-center gap-1">
                        <p>About Us</p>
                        <hr hidden className="w-2/4 border-none h-[1.5px] bg-yellow-400" />
                    </NavLink>
                    <NavLink to="/Services" className="flex flex-col items-center gap-1">
                        <p>Services</p>
                        <hr hidden className="w-2/4 border-none h-[1.5px] bg-yellow-400" />
                    </NavLink>
                    <NavLink to="/Contact" className="flex flex-col items-center gap-1">
                        <p>Contact Us</p>
                        <hr hidden className="w-2/4 border-none h-[1.5px] bg-yellow-400" />
                    </NavLink>
                    <NavLink to="/Blog" className="flex flex-col items-center gap-1">
                        <p>Blog</p>
                        <hr hidden className="w-2/4 border-none h-[1.5px] bg-yellow-400" />
                    </NavLink>
                </ul>

                {/* Schedule a Meeting Button */}
                <a
                    href="#schedule-meeting"
                    className="hidden sm:block px-5 py-2 text-sm text-white rounded-md"
                    style={{
                        background: 'linear-gradient(90deg, #ffde59, #ff914d)',
                        backgroundSize: '200% 200%',
                        animation: 'gradient-animation 3s ease infinite',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        marginRight: '20px'
                    }}
                >
                    Schedule a Meeting
                </a>
            </div>

            {/* CSS for Gradient Animation */}
            <style>{`
                @keyframes gradient-animation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>

            {/* Mobile Menu Icon */}
            <div>
                <img
                    onClick={() => SetVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                />
            </div>

            {/* Sidebar Menu for Mobiles */}
            <div
                className={`absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} z-50`}
            >
                <div className="flex flex-col text-yellow-400">
                    <div className="flex items-center gap-4 p-3 cursor-pointer">
                        <img
                            onClick={() => SetVisible(false)}
                            src={assets.dropdown_icon}
                            className="h-4 rotate-180"
                        />
                        <p>Back</p>
                    </div>
                    <NavLink
                        onClick={() => SetVisible(false)}
                        className="py-2 pl-6 border"
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        onClick={() => SetVisible(false)}
                        className="py-2 pl-6 border"
                        to="/About"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        onClick={() => SetVisible(false)}
                        className="py-2 pl-6 border"
                        to="/Services"
                    >
                        Services
                    </NavLink>
                    <NavLink
                        onClick={() => SetVisible(false)}
                        className="py-2 pl-6 border"
                        to="/Contact"
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        onClick={() => SetVisible(false)}
                        className="py-2 pl-6 border"
                        to="/Blog"
                    >
                        Blog
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
