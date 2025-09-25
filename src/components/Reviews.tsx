import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Restaurant Owner",
      company: "Bistro Delights",
      rating: 5,
      review: "POSFlow transformed our restaurant operations. The intuitive interface and real-time reporting have increased our efficiency by 40%. Best investment we've made!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "Retail Manager",
      company: "Tech Gadgets Plus",
      rating: 5,
      review: "The inventory management features are outstanding. We've reduced stock-outs by 60% and the customer support team is incredibly responsive.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Café Owner",
      company: "Coffee Corner",
      rating: 5,
      review: "Simple setup, powerful features. Our staff learned the system in one day, and we're already seeing improved customer flow and sales tracking.",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied business owners who've transformed their operations with POSFlow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer relative overflow-hidden"
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.position} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;