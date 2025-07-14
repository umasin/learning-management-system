import React, { useState, useEffect } from 'react';
import { Play, Users, BookOpen, Award, TrendingUp, Star, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

const LMSLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
   useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    const features = [
    {
      icon: BookOpen,
      title: "Interactive Courses",
      description: "Engage with multimedia content, quizzes, and hands-on projects designed by industry experts."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers, join study groups, and participate in live discussions and workshops."
     },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and personalized recommendations."
    }
  ];
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Data Scientist",
      content: "This platform transformed my career. The courses are practical and the community is amazing.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "UX Designer",
      content: "The interactive projects helped me build a portfolio that landed me my dream job.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Best investment in my education. The mentorship program is invaluable.",
      rating: 5
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar/>
 {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div 
              className="inline-block animate-bounce"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/25">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
               Learn Without
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Limits
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unlock your potential with our cutting-edge learning management system. 
              Interactive courses, expert mentorship, and a thriving community await you.
            </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to='/dashboard'>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>Start Learning Today</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
        {/*Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Learners" },
              { number: "500+", label: "Expert Courses" },
              { number: "95%",  label: "Success Rate" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/60 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Features Section*/}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {"  "}LearnFlow
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience learning like never before with our innovative features designed for modern learners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/50 shadow-2xl shadow-purple-500/10'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Learners Say
              </span>
            </h2>
          </div>
         <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-300">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg p-12 rounded-3xl border border-white/10">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join thousands of learners who have already started their journey to success. 
              Your next career breakthrough is just one click away.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Start Your Journey Now
            </button>
          </div>
        </div>
      </section>
        {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">LearnFlow</span>
            </div>
             <div className="flex space-x-8 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 LearnFlow. All rights reserved. Empowering learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LMSLanding;