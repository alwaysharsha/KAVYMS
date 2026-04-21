const History = () => {
  const milestones = [
    {
      year: 'Ancient Times',
      title: 'Origins of Vasavi Worship',
      description: 'The spiritual traditions and worship of Vasavi have deep roots in ancient Indian culture and spirituality.'
    },
    {
      year: 'Medieval Period',
      title: 'Temple Establishment',
      description: 'The first dedicated Vasavi temples were established, becoming centers of community worship and cultural activities.'
    },
    {
      year: 'Modern Era',
      title: 'Global Expansion',
      description: 'Vasavi temples spread across different regions and countries, serving devotees worldwide.'
    },
    {
      year: 'Present Day',
      title: 'Digital Connection',
      description: 'The community embraces technology to connect devotees globally while preserving traditional values.'
    }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-secondary mb-8">
          Our History
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="card mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The history of Vasavi temples is a testament to enduring faith, cultural preservation, and community dedication. Through centuries, devotees have maintained and expanded these sacred spaces, ensuring that future generations can continue to experience the spiritual richness of our traditions.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Historical Milestones</h2>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="card border-l-4 border-primary">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <span className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Legacy and Tradition</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Each Vasavi temple carries its own unique history and significance within the community. These sacred spaces have served not only as places of worship but also as centers for cultural education, social gatherings, and community support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we honor this rich heritage by maintaining these temples, supporting their activities, and ensuring that the spiritual and cultural traditions continue to thrive for generations to come.
            </p>
          </div>

          <div className="card mt-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-2xl font-bold text-secondary mb-4 text-center">
              Preserving Our Heritage
            </h2>
            <p className="text-lg text-gray-700 text-center">
              This platform is part of our ongoing commitment to document, preserve, and share the history of Vasavi temples with devotees worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
