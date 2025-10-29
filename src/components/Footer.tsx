import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Mission & Vision', href: '#mission' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'Seed Database', href: '#' },
    { name: 'Educational Materials', href: '#' },
    { name: 'Farmer Community', href: '#' },
    { name: 'Mobile App', href: '#' },
    { name: 'Blog & News', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <Sprout className="w-6 h-6 text-green-600" />
              </div>
              <span>FarmAid Foundation</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering farmers with knowledge, resources, and support since 2010. 
              We're committed to building sustainable farming communities and ensuring 
              food security for future generations.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">123 Agricultural Boulevard</p>
                  <p className="text-gray-300">Green Valley, GV 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@farmaid.org</p>
                  <p className="text-gray-300">support@farmaid.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-green-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-4 text-center md:text-left">Follow Us</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">Office Hours</p>
              <p className="text-white">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-white">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} FarmAid Foundation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
