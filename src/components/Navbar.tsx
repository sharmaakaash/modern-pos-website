import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Monitor } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">POSFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#blog" className="text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <a href="#home" className="block text-white hover:text-blue-500 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#features" className="block text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="block text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#blog" className="block text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium">
                Blog
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-500 px-3 py-2 text-sm font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;