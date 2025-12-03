import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Water Mitigation",
    description: "Advanced drying technology to preserve the integrity of your structure.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  },
  {
    title: "Fire Restoration",
    description: "Meticulous soot removal and purification for a clean slate.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
  },
  {
    title: "Mold Remediation",
    description: "Scientific containment and elimination of biological hazards.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Expertise</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-stone-900">Curated Restoration</h2>
          </div>
          <p className="max-w-md text-stone-500 font-light">
             We combine artisanal care with industrial efficiency to return your property to its original state.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;