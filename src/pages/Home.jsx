import { Link } from 'react-router-dom'
import { MapPin, Users, History, Info } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Info size={48} />,
      title: 'About Us',
      description: 'Learn about the Vasavi temple community and our mission',
      link: '/about',
      color: 'bg-primary'
    },
    {
      icon: <History size={48} />,
      title: 'Our History',
      description: 'Discover the rich heritage and traditions of Vasavi temples',
      link: '/history',
      color: 'bg-secondary'
    },
    {
      icon: <Users size={48} />,
      title: 'Our Team',
      description: 'Meet the dedicated members serving our community',
      link: '/team',
      color: 'bg-accent'
    },
    {
      icon: <MapPin size={48} />,
      title: 'Find Temples',
      description: 'Explore Vasavi temples across different locations',
      link: '/temples',
      color: 'bg-primary'
    }
  ]

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6TTI1IDEzNWg3djFoLTd6TTE1IDEzNmg3djFoLTd6TTUgMTM3aDd2MUg1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTI0KSIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-sm md:text-base font-medium">Karnataka Arya Vysya Yuvajana Mahasabha</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">KAVYMS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Connecting devotees and preserving the sacred heritage of Vasavi temples worldwide
          </p>
          <Link
            to="/temples"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
          >
            Explore Temples
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4">
              Discover Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the various aspects of our vibrant community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`${feature.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-background-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                KAVYMS (Karnataka Arya Vysya Yuvajana Mahasabha) is dedicated to preserving and promoting the spiritual and cultural heritage of Vasavi temples around the world. We strive to connect devotees, share knowledge, and support temple activities across all locations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join us in our mission to keep the traditions alive and foster a strong, united community of devotees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
