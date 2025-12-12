import React, { useState, useEffect } from 'react';
import { Instagram, Github, Linkedin, Mail, X } from 'lucide-react';
import profileImage from 'figma:asset/8b1d6de78cdf5c6c166f73f9d224b79a4781a3ac.png';

export function FloatingProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/navanitham415',
      color: 'hover:text-pink-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/naveenvenkatsai',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/naveenvenkatsai-chebrolu-099429323/',
      color: 'hover:text-blue-700'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:naveenvenkatsai28@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Collapsed State */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="relative group"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50">
            <img
              src={profileImage}
              alt="Naveen Chebrolu"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 animate-ping"></div>
        </button>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="backdrop-blur-lg bg-white/80 border border-white/40 rounded-2xl shadow-2xl p-6 w-80 transform transition-all duration-300 animate-slideIn">
          {/* Close Button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-lg mb-4">
              <img
                src={profileImage}
                alt="Naveen Chebrolu"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-gray-900 mb-1">Naveen Chebrolu</h3>
            <p className="text-sm text-gray-600 mb-1">Creator & Developer</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20">
              <span className="text-xs text-gray-700">Organizer</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-3 rounded-xl bg-white/60 border border-white/40 hover:bg-white/80 transition-all duration-300 hover:shadow-lg ${link.color} group`}
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-700">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}