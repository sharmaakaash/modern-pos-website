import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, DollarSign, Settings, Headphones } from 'lucide-react';

const WhyClientsLoveUs = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "Stay ahead with regular updates and cutting-edge features that evolve with your business needs."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, competitive pricing that scales with your business growth."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Simplicity",
      description: "Intuitive design that requires minimal training. Get your team up and running in minutes, not hours."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24hrs Customer Support",
      description: "Round-the-clock expert support to ensure your business never skips a beat."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Our Clients Love Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what sets us apart and why thousands of businesses trust POSFlow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <div className="text-blue-500 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClientsLoveUs;