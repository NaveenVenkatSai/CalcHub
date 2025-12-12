import React from 'react';
import { CalculatorGrid } from './components/CalculatorGrid';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FloatingProfile } from './components/FloatingProfile';
import { CreatorSection } from './components/CreatorSection';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-teal-400/20 animate-gradient"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <CalculatorGrid />
        <CreatorSection />
      </main>
      <Footer />
      
      {/* Floating Profile */}
      <FloatingProfile />
    </div>
  );
}