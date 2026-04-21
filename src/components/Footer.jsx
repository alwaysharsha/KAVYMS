import { Facebook, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-12 mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-4">KAVYMS</h3>
            <p className="text-sm text-gray-300 mb-2 font-semibold">Karnataka Arya Vysya Yuvajana Mahasabha</p>
            <p className="text-gray-200 leading-relaxed">
              Connecting devotees and preserving the heritage of Vasavi temples worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-accent transition-colors">About</a></li>
              <li><a href="/history" className="text-gray-300 hover:text-accent transition-colors">History</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-accent transition-colors">Team</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-accent transition-colors">Services</a></li>
              <li><a href="/temples" className="text-gray-300 hover:text-accent transition-colors">Temples</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Social Sites</h3>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/KAVYMS/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-blue-600 transition-colors">
                  <Facebook size={20} />
                </div>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Contact</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              For inquiries and contributions, please reach out to us.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:kavymsmedia@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-accent transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-sm">kavymsmedia@gmail.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=12.979737675735%2C77.578496913344"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-accent transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-accent transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-sm leading-relaxed">
                  16, Sheshadri Road,<br />
                  Bangalore, Karnataka<br />
                  India
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-light mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} KAVYMS - Karnataka Arya Vysya Yuvajana Mahasabha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
