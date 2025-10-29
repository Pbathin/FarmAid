import { Target, Eye, Compass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function MissionVision() {
  const values = [
    {
      title: 'Empowerment',
      description: 'We believe in empowering farmers with knowledge and tools to make informed decisions.',
    },
    {
      title: 'Sustainability',
      description: 'We promote environmentally friendly farming practices for long-term food security.',
    },
    {
      title: 'Innovation',
      description: 'We embrace technology and innovation to modernize agriculture and improve productivity.',
    },
    {
      title: 'Community',
      description: 'We foster strong farming communities where knowledge and resources are shared freely.',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our interactions and programs.',
    },
    {
      title: 'Accessibility',
      description: 'We ensure that our resources and services are accessible to all farmers, regardless of size or location.',
    },
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to farming communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <Card className="border-2 border-green-200 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-800">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                To empower farmers with comprehensive, accurate, and timely information about seeds, 
                sustainable farming practices, and agricultural technologies, enabling them to make 
                informed decisions that improve their livelihoods and contribute to food security.
              </p>
              <p className="text-gray-700">
                We strive to bridge the information gap in agriculture by providing accessible resources, 
                training programs, and community support systems that transform farming from a struggle 
                into a sustainable and profitable venture.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 border-green-200 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-800">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A world where every farmer has access to the knowledge, resources, and support they need 
                to thrive. We envision prosperous farming communities that practice sustainable agriculture, 
                leverage modern technology, and contribute to global food security.
              </p>
              <p className="text-gray-700">
                We see a future where informed farmers lead agricultural innovation, preserve biodiversity, 
                and create resilient food systems that benefit both present and future generations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="bg-green-600 p-3 rounded-lg">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-green-800">Our Core Values</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h4 className="text-green-700 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
