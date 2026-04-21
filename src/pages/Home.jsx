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
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to KAVYMS
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto">
            Karnataka Arya Vysya Yuvajana Mahasabha
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting devotees and preserving the sacred heritage of Vasavi temples worldwide
          </p>
          <Link
            to="/temples"
            className="inline-block bg-accent hover:bg-accent-light text-secondary font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Explore Temples
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">
            Discover Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="card hover:scale-105 transition-transform duration-200"
              >
                <div className={`${feature.color} text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              KAVYMS (Karnataka Arya Vysya Yuvajana Mahasabha) is dedicated to preserving and promoting the spiritual and cultural heritage of Vasavi temples around the world. We strive to connect devotees, share knowledge, and support temple activities across all locations.
            </p>
            <p className="text-lg text-gray-700">
              Join us in our mission to keep the traditions alive and foster a strong, united community of devotees.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
