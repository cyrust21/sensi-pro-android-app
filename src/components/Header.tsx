
import React from 'react';
import { Menu, Download, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://iili.io/3pCmLNa.png" 
              alt="FF TOOLSPRO+ Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-white">FF TOOLSPRO+</h2>
              <p className="text-xs text-purple-300">v2.0 Premium</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download APK</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all duration-300">
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Rate</span>
            </button>
            <button className="p-2 text-white hover:text-purple-300 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
