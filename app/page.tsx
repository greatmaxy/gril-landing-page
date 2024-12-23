import React from 'react';
import { Cloud, Menu, Headphones, Laptop, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const LandingPage = () => {
  const features = [
    {
      icon: <Menu className="w-6 h-6 mb-2 text-orange-500" />,
      title: "Intuitive Menu Configuration",
      description: "Set up and modify your menus with ease. Our user-friendly interface makes menu management a breeze, not a burden."
    },
    {
      icon: <Laptop className="w-6 h-6 mb-2 text-orange-500" />,
      title: "User-Friendly Interface",
      description: "Designed with restaurant staff in mind - minimal training required. Get your team up and running in minutes, not days."
    },
    {
      icon: <Headphones className="w-6 h-6 mb-2 text-orange-500" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock expert support when you need it. Our team is always ready to help keep your operations running smoothly."
    },
    {
      icon: <Cloud className="w-6 h-6 mb-2 text-orange-500" />,
      title: "Cloud-Based Solution",
      description: "Access your restaurant data from anywhere, anytime. Zero local storage needed - we handle all the data security."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-7xl font-bold text-orange-500 lowercase tracking-tight">
                gril
              </h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Future of Restaurant Management
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              A revolutionary cloud-based platform that simplifies restaurant operations. 
              Join the waitlist to be among the first to experience it.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-12 text-base"
                />
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap text-base font-medium">
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2 font-light">
                Be the first to know when we launch. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 tracking-tight">
            Built for Modern Restaurants
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              We're putting the finishing touches on something amazing. 
              Join our waitlist to receive exclusive early access and special launch offers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
              <div className="flex items-start gap-2">
                <Shield className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold tracking-tight">Secure & Private</h3>
                  <p className="text-sm text-gray-600 font-light">Your data stays yours</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Cloud className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold tracking-tight">Cloud-Native</h3>
                  <p className="text-sm text-gray-600 font-light">Access anywhere</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Headphones className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold tracking-tight">Always Available</h3>
                  <p className="text-sm text-gray-600 font-light">24/7 expert support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Be Part of the Revolution
          </h2>
          <p className="text-xl mb-8 text-orange-50 leading-relaxed font-light">
            Join the waitlist today and get exclusive early access
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-12 bg-white text-base"
              />
              <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50 whitespace-nowrap text-base font-medium">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;