import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Facebook } from 'lucide-react'
import logo from '../../images/logo/KAVYMS_Logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/history', label: 'History' },
    { path: '/team', label: 'Team' },
    { path: '/services', label: 'Services' },
    { path: '/temples', label: 'Temples' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200" title="Karnataka Arya Vysya Yuvajana Mahasabha">
            <img 
              src={logo} 
              alt="KAVYMS Logo" 
              className="h-12 w-12 object-contain rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">KAVYMS</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-300">
              <a
                href="https://www.facebook.com/KAVYMS/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                title="Follow us on Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white font-semibold shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <a
                href="https://www.facebook.com/KAVYMS/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              >
                <Facebook size={24} />
                <span className="font-semibold">Follow us on Facebook</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
