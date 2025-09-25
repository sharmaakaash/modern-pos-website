import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">The Future of </span>
                <span className="text-blue-500">Point of Sale</span>
                <span className="text-white"> Systems</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Streamline your business operations with our powerful, intuitive POS solution. 
                Built for modern businesses, designed for growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 hover:scale-105 group">
                Try Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 hover:scale-105 group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - POS Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Mockup Header */}
                <div className="bg-blue-600 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
                  </div>
                  <div className="text-white font-semibold">POSFlow Dashboard</div>
                  <div className="w-16"></div>
                </div>

                {/* Mockup Content */}
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">$12,450</div>
                      <div className="text-sm text-gray-600">Today's Sales</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">156</div>
                      <div className="text-sm text-gray-600">Transactions</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">23</div>
                      <div className="text-sm text-gray-600">Items Sold</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Coffee - Large</span>
                      <span className="font-semibold text-gray-800">$4.50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Sandwich - Club</span>
                      <span className="font-semibold text-gray-800">$8.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-gray-700">Total</span>
                      <span className="font-bold text-blue-600 text-lg">$13.49</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;