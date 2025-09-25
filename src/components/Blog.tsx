import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways POS Systems Boost Restaurant Profits",
      excerpt: "Discover how modern POS technology can streamline operations, reduce costs, and increase revenue for your restaurant business.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Restaurant",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "The Future of Retail: Omnichannel POS Solutions",
      excerpt: "Learn how integrated POS systems are revolutionizing retail by connecting online and offline customer experiences seamlessly.",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Retail",
      image: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Data-Driven Decisions: Analytics for Small Business",
      excerpt: "Harness the power of POS analytics to make informed decisions that drive growth and optimize your business operations.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Analytics",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in the POS industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 font-medium group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;