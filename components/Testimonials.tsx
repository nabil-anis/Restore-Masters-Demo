import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="bg-stone-50 py-32 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-light text-center text-stone-900 mb-20">Client Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { text: "Absolute perfection in handling our water damage. Quiet, efficient, and respectful.", author: "Sarah Jenkins" },
            { text: "They turned a disaster into a seamless recovery process. The team felt like family.", author: "Michael Ross" },
            { text: "Minimal disruption to our daily life. Highly recommended for their attention to detail.", author: "Emily Tao" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <p className="text-stone-600 font-light leading-relaxed mb-8 italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
                   <img className="w-full h-full object-cover grayscale opacity-80" src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&q=80`} alt="" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-900">{item.author}</div>
                  <div className="text-xs text-stone-400 uppercase tracking-wide">Homeowner</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;