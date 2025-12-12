import React from 'react';
import { Instagram, Github, Linkedin, Mail, Award } from 'lucide-react';
import profileImage from 'figma:asset/8b1d6de78cdf5c6c166f73f9d224b79a4781a3ac.png';

export function CreatorSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@navanitham415',
      icon: Instagram,
      url: 'https://instagram.com/navanitham415',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      name: 'GitHub',
      handle: '@naveenvenkatsai',
      icon: Github,
      url: 'https://github.com/naveenvenkatsai',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      handle: 'Naveen Chebrolu',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/naveenvenkatsai-chebrolu-099429323/',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Email',
      handle: 'naveenvenkatsai28@gmail.com',
      icon: Mail,
      url: 'mailto:naveenvenkatsai28@gmail.com',
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg mb-4">
            <Award className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700">Meet the Creator</span>
          </div>
          <h2 className="text-gray-900 mb-4">About the Organizer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate developer dedicated to creating useful tools and beautiful user experiences.
          </p>
        </div>

        {/* Creator Card */}
        <div className="relative backdrop-blur-lg bg-white/60 border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10"></div>
          
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={profileImage}
                    alt="Naveen Chebrolu"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-gray-900 mb-2">Naveen Chebrolu</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 shadow-lg">
                  <span className="text-sm">Creator & Organizer</span>
                </div>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  Developer and tech enthusiast committed to building innovative solutions. 
                  This calculator hub is designed to make everyday calculations simple and accessible for everyone.
                </p>

                {/* Social Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-xs text-gray-500">{link.name}</div>
                          <div className="text-sm text-gray-700 truncate">{link.handle}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}