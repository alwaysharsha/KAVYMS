const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-secondary mb-8">
          About KAVYMS
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Karnataka Arya Vysya Yuvajana Mahasabha
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a unified global community of Vasavi temple devotees, preserving our rich cultural and spiritual heritage while embracing modern connectivity and accessibility.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              KAVYMS (Karnataka Arya Vysya Yuvajana Mahasabha) serves as a central hub for devotees worldwide, providing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Comprehensive information about Vasavi temples across the globe</li>
              <li>A platform for connecting devotees and sharing experiences</li>
              <li>Preservation and promotion of our spiritual traditions</li>
              <li>Support for temple activities and community events</li>
              <li>Educational resources about our heritage and practices</li>
            </ul>
          </div>

          <div className="card mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a dedicated group of volunteers and devotees committed to serving the Vasavi temple community. Our team works tirelessly to maintain this platform, gather accurate information about temples, and facilitate connections among devotees worldwide.
            </p>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Devotion</h3>
                <p className="text-gray-700">
                  Deep reverence and dedication to our spiritual practices and traditions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Unity</h3>
                <p className="text-gray-700">
                  Bringing together devotees from all backgrounds and locations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Preservation</h3>
                <p className="text-gray-700">
                  Safeguarding our cultural and spiritual heritage for future generations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Service</h3>
                <p className="text-gray-700">
                  Selfless dedication to serving the community and supporting temples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
