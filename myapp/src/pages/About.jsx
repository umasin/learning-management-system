import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <Navbar/>
      {/* Page Content */}
      <main className="pt-32 px-8 pb-16 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">About LearnFlow</h1>
        <p className="text-xl text-white/80 leading-relaxed">
          LearnFlow is your personalized learning companion, offering curated courses designed by industry experts,
          practical hands-on projects, and a community-driven environment.
          <br /><br />
          Whether you're a student, a professional upskilling, or a curious learner, LearnFlow empowers you to learn
          flexibly, effectively, and affordably.
          <br /><br />
          We're committed to making education accessible to all, no matter where you are.
        </p>
      </main>
    </div>
  );
};
export default About;