"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <nav className="flex items-center justify-between font-medium px-4 py-2">
      {/* Logo */}
      <NavLink to="/" className="text-decoration-none">
        <img src={assets.logo || "/placeholder.svg"} alt="Logo" className="w-40" />
      </NavLink>

      {/* Navbar Links and Buttons */}
      <div className="hidden sm:flex items-center text-center gap-6 ml-auto mt-1">
        {/* Navbar Links */}
        <ul className="flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </NavLink>
          <NavLink to="/About" className="flex flex-col items-center gap-1">
            <p>About Us</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </NavLink>
          <NavLink to="/Services" className="flex flex-col items-center gap-1">
            <p>Services</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </NavLink>
          <NavLink to="/Contact" className="flex flex-col items-center gap-1">
            <p>Contact Us</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </NavLink>
          <NavLink to="/Blog" className="flex flex-col items-center gap-1">
            <p>Blog</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </NavLink>
        </ul>

        {/* Schedule a Meeting Button */}
        <NavLink
          to="/Events"
          className="hidden sm:block px-5 py-2 text-sm text-white rounded-md"
          style={{
            background: "linear-gradient(90deg, #ffde59, #ff914d)",
            backgroundSize: "200% 200%",
            animation: "gradient-animation 3s ease infinite",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            marginRight: "20px",
          }}
        >
          Events
        </NavLink>

        <a href="#schedule-meeting" className="px-5 py-2 text-sm text-white rounded-md gradient-animation mr-5">
          Schedule a Meeting
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon || "/placeholder.svg"}
          alt="Menu"
          className="w-5 cursor-pointer"
        />
      </div>

      {/* Sidebar Menu for Mobiles */}
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-white transition-all duration-300 ${visible ? "translate-x-0" : "translate-x-full"} z-50`}
      >
        <div className="flex flex-col text-yellow-400">
          <div className="flex items-center gap-4 p-3 cursor-pointer" onClick={() => setVisible(false)}>
            <img src={assets.dropdown_icon || "/placeholder.svg"} alt="Close" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/About">
            About Us
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/Services">
            Services
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/Contact">
            Contact Us
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/Blog">
            Blog
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/Events">
            Events
          </NavLink>
        </div>
      </div>

      {/* CSS for Gradient Animation */}
      <style>{`
                .gradient-animation {
                    background: linear-gradient(90deg, #ffde59, #ff914d);
                    background-size: 200% 200%;
                    animation: gradient-animation 3s ease infinite;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                }

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
    </nav>
  )
}

export default Navbar

