import { Users, Heart, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Farmers Helped' },
    { icon: Heart, value: '200+', label: 'Communities Served' },
    { icon: Award, value: '15+', label: 'Years of Service' },
    { icon: TrendingUp, value: '85%', label: 'Yield Improvement' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our journey and commitment to transforming lives through agricultural support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="mb-6">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              FarmAid Foundation is a non-profit organization established in 2010 with a mission to empower 
              farmers through education, technology, and community support. We believe that informed farmers 
              are the backbone of food security and sustainable agriculture.
            </p>
            <p className="text-gray-700 mb-4">
              Our team consists of agricultural experts, researchers, and passionate volunteers who work 
              tirelessly to provide farmers with accurate information about seeds, crop management, 
              sustainable practices, and market trends.
            </p>
            <p className="text-gray-700">
              We operate across multiple regions, partnering with local communities to deliver tailored 
              solutions that address unique agricultural challenges and opportunities.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759850424842-b73ebe5a8a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYxNjQ0MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Farming community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-green-800 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
