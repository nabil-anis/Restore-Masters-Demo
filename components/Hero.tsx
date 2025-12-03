import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-100">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-90"
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80"
          alt="Minimal interior"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-light text-stone-900 tracking-tight leading-tight mb-8">
          Restoring <span className="font-serif italic text-stone-700">balance</span> to <br/> your environment.
        </h1>
        <p className="text-lg md:text-xl text-stone-700 max-w-xl mx-auto font-light leading-relaxed mb-10">
          Expert restoration services delivered with precision and care. Water, fire, and structural recovery for the modern home.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#contact"
            className="px-8 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Recovery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;