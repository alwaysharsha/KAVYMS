import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/history', label: 'History' },
    { path: '/team', label: 'Team' },
    { path: '/temples', label: 'Temples' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-secondary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-accent flex items-center gap-2" title="Karnataka Arya Vysya Yuvajana Mahasabha">
            <span className="text-3xl">🕉️</span>
            <span>KAVYMS</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-accent transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold py-2 px-4 rounded transition-colors ${
                    isActive(link.path)
                      ? 'bg-accent text-secondary'
                      : 'text-white hover:bg-secondary-light'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
