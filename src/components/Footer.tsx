import React from 'react';
import { Calculator, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 mt-20 backdrop-blur-md bg-white/40 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-800">CalcHub</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              Your all-in-one calculator suite for everyday calculations. Fast, accurate, and beautifully designed.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a href="https://github.com/naveenvenkatsai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg backdrop-blur-sm bg-white/60 border border-white/40 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 text-gray-600">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/naveenvenkatsai-chebrolu-099429323/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg backdrop-blur-sm bg-white/60 border border-white/40 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 text-gray-600">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:naveenvenkatsai28@gmail.com" className="w-9 h-9 rounded-lg backdrop-blur-sm bg-white/60 border border-white/40 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 text-gray-600">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">All Calculators</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            © 2025 CalcHub. Created with <Heart className="w-4 h-4 text-red-500 fill-current" /> by <span className="font-medium text-gray-700">Naveen Chebrolu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}