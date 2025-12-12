import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  glowColor: string;
  onOpen: () => void;
}

export function CalculatorCard({ title, description, icon: Icon, gradient, glowColor, onOpen }: CalculatorCardProps) {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative h-full p-6 rounded-2xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/70">
        {/* Glow Effect on Hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
        
        {/* Icon Container */}
        <div className="relative mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="mb-2 text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {description}
          </p>

          {/* Button */}
          <button 
            onClick={onOpen}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${gradient} text-white transition-all duration-300 hover:shadow-lg group-hover:shadow-${glowColor}-500/50 transform hover:scale-105`}
          >
            <span className="text-sm">Open Calculator</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}