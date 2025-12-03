import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">RM</span>
             </div>
             <span className="font-semibold text-lg tracking-wider text-stone-900">RESTORE MASTERS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Process</a>
            <a href="#testimonials" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Stories</a>
            <a href="#contact" className="text-sm font-medium bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;