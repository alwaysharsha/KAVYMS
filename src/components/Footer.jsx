const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-4">KAVYMS</h3>
            <p className="text-sm text-gray-300 mb-2 font-semibold">Karnataka Arya Vysya Yuvajana Mahasabha</p>
            <p className="text-gray-200 leading-relaxed">
              Connecting devotees and preserving the heritage of Vasavi temples worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-accent transition-colors">About</a></li>
              <li><a href="/history" className="text-gray-300 hover:text-accent transition-colors">History</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-accent transition-colors">Team</a></li>
              <li><a href="/temples" className="text-gray-300 hover:text-accent transition-colors">Temples</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Contact</h3>
            <p className="text-gray-300">
              For inquiries and contributions, please reach out to the temple community.
            </p>
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
