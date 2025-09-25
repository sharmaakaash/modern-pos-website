import React from 'react';
import { Monitor, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">POSFlow</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses worldwide with cutting-edge POS solutions that drive growth and simplify operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Live Chat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">System Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 POSFlow. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;