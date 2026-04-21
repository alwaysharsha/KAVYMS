import { Heart, Users, BookOpen, Utensils, GraduationCap, HandHeart } from 'lucide-react'

const ServiceActivities = () => {
  const activities = [
    {
      icon: Heart,
      title: 'Community Welfare',
      description: 'Supporting community members in need through various welfare programs and initiatives.',
      highlights: [
        'Medical assistance programs',
        'Financial aid for families in need',
        'Emergency relief support',
        'Senior citizen care'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Educational Support',
      description: 'Empowering youth through education and skill development programs.',
      highlights: [
        'Scholarship programs',
        'Career guidance workshops',
        'Skill development training',
        'Educational material distribution'
      ]
    },
    {
      icon: Utensils,
      title: 'Food Distribution',
      description: 'Organizing food drives and meal distribution programs for the underprivileged.',
      highlights: [
        'Regular food donation drives',
        'Festival meal programs',
        'Community kitchen initiatives',
        'Annadanam at temples'
      ]
    },
    {
      icon: BookOpen,
      title: 'Cultural Preservation',
      description: 'Preserving and promoting our rich cultural heritage and traditions.',
      highlights: [
        'Cultural events and festivals',
        'Traditional arts workshops',
        'Heritage documentation',
        'Youth cultural programs'
      ]
    },
    {
      icon: Users,
      title: 'Youth Engagement',
      description: 'Engaging youth in community service and leadership development.',
      highlights: [
        'Youth leadership programs',
        'Community service projects',
        'Sports and recreation activities',
        'Mentorship programs'
      ]
    },
    {
      icon: HandHeart,
      title: 'Social Initiatives',
      description: 'Various social welfare programs aimed at community development.',
      highlights: [
        'Health awareness campaigns',
        'Environmental initiatives',
        'Women empowerment programs',
        'Blood donation camps'
      ]
    }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-secondary mb-8">
          Service Activities
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="card text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              KAVYMS is committed to serving the community through various social, educational, and cultural initiatives. 
              Our service activities aim to uplift and support community members while preserving our rich heritage.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon
            return (
              <div
                key={index}
                className="card hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                    <IconComponent size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3 text-center">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {activity.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Key Initiatives:</h4>
                  <ul className="space-y-2">
                    {activity.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">
              Get Involved
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
              We welcome volunteers and supporters who share our vision of community service. 
              Whether through donations, volunteering, or participation in our programs, 
              every contribution makes a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Families Supported</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-600">Events Organized</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-gray-600">Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-secondary mb-4 text-center">
              Upcoming Activities
            </h2>
            <p className="text-gray-700 text-center">
              Stay connected with us to learn about upcoming service activities and events. 
              Follow our announcements and join us in making a positive impact in our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceActivities
