import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how POSFlow can help you grow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <Input 
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500" 
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <Input 
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500" 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500" 
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel"
                  className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500" 
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea 
                  className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 min-h-[120px]" 
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's start a conversation
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team is here to help you find the perfect POS solution for your business. 
                Get in touch and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-300">support@posflow.com</p>
                  <p className="text-gray-300">sales@posflow.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-300">
                    123 Business Avenue<br />
                    Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-3">Quick Response Guarantee</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We understand that time is money in business. That's why we guarantee a response 
                to all inquiries within 24 hours, and priority support for existing customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;