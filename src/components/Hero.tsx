import React from 'react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg mb-6">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm text-gray-700">Modern Calculator Suite</span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-gray-900">
          All-in-One Calculator Hub
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Choose a tool and start calculating instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:brightness-110">
            Explore Calculators
          </button>
          <button className="px-8 py-3 backdrop-blur-sm bg-white/60 border border-white/40 text-gray-700 rounded-full hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
