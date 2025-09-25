import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, ChartBar as BarChart3, Users, CreditCard, Package, Smartphone } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "Point of Sale",
      description: "Complete POS solution with inventory tracking, customer management, and real-time reporting."
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Analytics & Reports",
      description: "Detailed insights into your business performance with customizable dashboards and reports."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Customer Management",
      description: "Build lasting relationships with integrated CRM tools and loyalty program features."
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Payment Processing",
      description: "Accept all payment methods with secure, fast processing and competitive rates."
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Inventory Management",
      description: "Track stock levels, manage suppliers, and automate reordering with smart inventory tools."
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Ready",
      description: "Access your business data anywhere with our mobile-optimized platform and native apps."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive POS solutions designed to streamline your operations and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-700 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -mr-10 -mt-10 group-hover:bg-blue-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;