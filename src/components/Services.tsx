import { Leaf, BookOpen, Users, Smartphone, Database, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Database,
      title: 'Seed Information Database',
      description: 'Comprehensive database of seed varieties, including details on climate suitability, yield potential, disease resistance, and cultivation practices.',
      features: [
        'Over 5,000 seed varieties',
        'Regional recommendations',
        'Quality certification info',
        'Supplier directory',
      ],
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Free access to agricultural guides, video tutorials, and expert articles on modern farming techniques and best practices.',
      features: [
        'Video tutorials',
        'Downloadable guides',
        'Expert webinars',
        'Case studies',
      ],
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with fellow farmers, share experiences, and get advice from agricultural experts through our community platform.',
      features: [
        'Farmer forums',
        'Expert Q&A sessions',
        'Peer mentorship',
        'Success stories',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Access',
      description: 'Access our services on-the-go with our mobile application designed for farmers with limited internet connectivity.',
      features: [
        'Offline mode',
        'SMS notifications',
        'Voice search',
        'Local language support',
      ],
    },
    {
      icon: LineChart,
      title: 'Market Intelligence',
      description: 'Stay informed with real-time market prices, demand trends, and strategic insights to maximize your profits.',
      features: [
        'Price alerts',
        'Demand forecasting',
        'Crop planning tools',
        'Export opportunities',
      ],
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Learn and implement eco-friendly farming methods that protect the environment while increasing productivity.',
      features: [
        'Organic farming guides',
        'Water conservation',
        'Soil health management',
        'Integrated pest control',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to support farmers at every stage of their agricultural journey
          </p>
        </div>

        {/* Featured Service */}
        <Card className="mb-16 border-0 shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759421278662-3c0b5adbbdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMHBsYW50aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYxNzEzMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Seeds and planting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-green-800 mb-4">Featured: Seed Finder Tool</h3>
              <p className="text-gray-700 mb-6">
                Our flagship Seed Finder Tool helps you discover the perfect seed varieties for your 
                specific soil type, climate conditions, and farming goals. Get personalized recommendations 
                based on scientific data and local success stories.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Filter by crop type, season, and region</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Compare varieties side-by-side</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Access detailed cultivation guidelines</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg self-start transition-colors">
                Try Seed Finder
              </button>
            </div>
          </div>
        </Card>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
