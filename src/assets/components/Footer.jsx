import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { assets } from "../assets/assets"
import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-yellow-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <NavLink to="/">
              <img src={assets.logo || "/placeholder.svg"} alt="Logo" className="h-24 w-auto" />
            </NavLink>
            <p className="mt-2 text-center font-bold md:text-left text-sm text-black max-w-xs">
              We make HVAC systems <span className="text-green-700">green</span>, <span className="text-blue-800">sustainable</span> & <span className="text-orange-600">highly effective</span>
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <NavLink to="/" className="text-black hover:text-white transition-colors">
              Home
            </NavLink>
            <NavLink to="/About" className="text-black hover:text-white transition-colors">
              About Us
            </NavLink>
            <NavLink to="/Services" className="text-black hover:text-white transition-colors">
              Services
            </NavLink>
            <NavLink to="/Contact" className="text-black hover:text-white transition-colors">
              Contact Us
            </NavLink>
            <NavLink to="/Blog" className="text-black hover:text-white transition-colors">
              Blog
            </NavLink>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition-colors"
            >
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition-colors"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white transition-colors"
            >
              <MessageCircle size={24} />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-black">© {new Date().getFullYear()} All Rights Reserved</div>
      </div>
    </footer>
  )
}

