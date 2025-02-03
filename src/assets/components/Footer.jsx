import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { assets } from "../assets/assets"

export default function Footer() {
  return (
    <div className="relative z-20 bg-[#FFD700] py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            The future of
            <br />
            HVAC
          </h2>
          <div className="space-y-6">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-black/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <a href="/" className="mb-6 md:mb-0">
            <img src={assets.logo} alt="ProSensia" className="h-20 w-auto" />
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a href="/" className="text-black hover:text-gray-700 transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-black hover:text-gray-700 transition-colors font-medium">
              About Us
            </a>
            <a href="/services" className="text-black hover:text-gray-700 transition-colors font-medium">
              Services
            </a>
            <a href="/contact" className="text-black hover:text-gray-700 transition-colors font-medium">
              Contact Us
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Facebook size={28} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Instagram size={28} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <MessageCircle size={28} />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

