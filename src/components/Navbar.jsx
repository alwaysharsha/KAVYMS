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
    <nav className="bg-white/90 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group" title="Karnataka Arya Vysya Yuvajana Mahasabha">
            <div className="relative">
              <img 
                src={logo} 
                alt="KAVYMS Logo" 
                className="h-14 w-14 object-contain rounded-xl ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300"
              />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">KAVYMS</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary transition-colors p-2.5 rounded-xl hover:bg-primary/5"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'text-gray-700 hover:bg-primary/5 hover:text-primary hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2 pl-4 border-l-2 border-gray-200">
              <a
                href="https://www.facebook.com/KAVYMS/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                title="Follow us on Facebook"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3.5 px-5 rounded-xl transition-all duration-300 font-medium ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                    : 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t-2 border-gray-200">
              <a
                href="https://www.facebook.com/KAVYMS/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3.5 px-5 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
              >
                <Facebook size={22} />
                <span className="font-medium">Follow us on Facebook</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
