import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1623211267269-5e53a12cf20d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkfGVufDF8fHx8MTc2MTcxNTk4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Farmer in field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6">
            Empowering Farmers with Knowledge & Resources
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            FarmAid Foundation is dedicated to helping farmers access vital information about seeds, 
            sustainable farming practices, and agricultural innovations. Together, we're building a 
            stronger farming community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={scrollToServices}
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-green-800"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
