import { Facebook, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">KAVYMS</h3>
            <p className="text-sm text-gray-400 mb-3 font-medium">Karnataka Arya Vysya Yuvajana Mahasabha</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Connecting devotees and preserving the heritage of Vasavi temples worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">About</a></li>
              <li><a href="/history" className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">History</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">Team</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">Services</a></li>
              <li><a href="/temples" className="text-gray-400 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">Temples</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></span>
              Connect
            </h3>
            <div className="space-y-4">
              <a 
                href="https://www.facebook.com/KAVYMS/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <Facebook size={20} />
                </div>
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></span>
              Contact
            </h3>
            <p className="text-gray-400 leading-relaxed mb-5 text-sm">
              For inquiries and contributions, please reach out to us.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:kavymsmedia@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-accent transition-all duration-300 group-hover:scale-110">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium">kavymsmedia@gmail.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=12.979737675735%2C77.578496913344"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-accent transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-accent transition-all duration-300 group-hover:scale-110 mt-0.5">
                  <MapPin size={18} />
                </div>
                <span className="text-sm leading-relaxed font-medium">
                  16, Sheshadri Road,<br />
                  Bangalore, Karnataka<br />
                  India
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} KAVYMS - Karnataka Arya Vysya Yuvajana Mahasabha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
