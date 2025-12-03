import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import VapiWidget from './components/VapiWidget';
import VoiceflowWidget from './components/VoiceflowWidget';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-light text-stone-800">
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />

      <footer className="bg-white border-t border-stone-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="block text-lg font-medium tracking-widest text-stone-900 mb-6">RESTORE MASTERS</span>
          
          <div className="flex justify-center space-x-8 mb-8 text-sm text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors">Services</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Process</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
          </div>

          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Restore Masters Demo. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Widgets */}
      <VapiWidget />
      <VoiceflowWidget />
    </div>
  );
}

export default App;