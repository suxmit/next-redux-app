'use client';

import CategoryGrid from '@/components/gallery/CategoryGrid';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal selection:bg-gold/30 selection:text-forest font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
            {/* Base */}
            <div className="absolute inset-0 bg-forest/20 z-10"></div>
            {/* Abstract Background - Forest Green Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-forest/40 via-ivory to-ivory opacity-60 animate-pulse"></div>
            {/* Texture/Pattern Overlay (optional css pattern) */}
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="mb-4 inline-block opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
             <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold border-b border-gold pb-2">Luxagro Taurea</span>
          </div>
            
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-forest tracking-tight mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] leading-none">
            Harvesting <span className="italic font-light text-gold/80">Heritage</span>.<br/> 
            Delivering <span className="italic font-light text-gold/80">Excellence</span>.
          </h1>

          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            From Indian Farmers To Global Tables. Rediscovering the profound beauty of agriculture through a lens of sustainability and trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
            <a href="#products" className="px-8 py-4 bg-forest hover:bg-gold text-ivory hover:text-forest text-sm tracking-[0.15em] uppercase transition-all duration-300 shadow-xl border border-forest">
              Discover Products
            </a>
            <a href="#our-story" className="px-8 py-4 bg-transparent border border-forest/30 text-forest hover:border-forest text-sm tracking-[0.15em] uppercase transition-all duration-300">
              Our Story
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce cursor-pointer" onClick={() => document.getElementById('products')?.scrollIntoView()}>
            <span className="text-[10px] uppercase tracking-widest text-forest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-forest to-transparent"></div>
        </div>
      </section>

      {/* Category Grid Section */}
      <CategoryGrid />

      {/* Brand Story Section */}
      <section id="our-story" className="py-32 bg-forest relative overflow-hidden text-ivory">
         {/* Background Graphic */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="text-gold text-xl font-serif italic mb-4 block">Our Brand Story</span>
                <h2 className="text-4xl md:text-5xl text-ivory font-serif leading-tight mb-8">
                    Deep-rooted agricultural heritage meeting global standards.
                </h2>
                <div className="h-1 w-20 bg-gold mb-10"></div>
             </div>
             <div>
                <p className="text-ivory/80 leading-relaxed mb-6 font-light text-lg">
                    LUXAGRO TAUREA LLP was founded on a deep-rooted agricultural heritage shaped by years of hands-on farming and trusted domestic distribution across India. Our journey began in the fields, where knowledge of the land, respect for nature, and commitment to quality were cultivated over generations.
                </p>
                <p className="text-ivory/80 leading-relaxed font-light text-lg">
                    Today, we expand beyond borders, bringing the richness of Indian agriculture to global markets. By combining traditional agricultural wisdom with modern processing, packaging, and export logistics, we deliver premium-quality products that meet international standards.
                </p>
             </div>
        </div>
      </section>

      {/* Strengths / Why Choose Us */}
      <section className="py-24 bg-ivory border-t border-forest/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-serif text-forest mb-4">Why Choose Taurea</h2>
                <p className="text-charcoal/60">Built on a legacy of trust and quality.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: 'Farming Heritage', desc: 'Years of direct involvement in cultivation and supply.', icon: '🌱' },
                    { title: 'Trusted Sourcing', desc: 'Strong network ensuring reliability and consistency.', icon: '🤝' },
                    { title: 'Export Compliant', desc: 'Modern processing & packaging meeting global norms.', icon: '🌍' },
                    { title: 'Quality Focus', desc: 'Traceability and excellence from seed to harvest.', icon: '⭐' }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-forest/5 hover:border-gold/30 hover:shadow-md transition-all group text-center">
                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        <h3 className="text-xl font-serif text-forest mb-3">{item.title}</h3>
                        <p className="text-charcoal/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
             </div>
         </div>
      </section>
      
      {/* Vision Quote */}
      <section className="py-20 bg-gold/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto text-center px-4">
              <span className="text-gold text-5xl font-serif opacity-40">"</span>
              <h3 className="text-2xl md:text-4xl font-serif text-forest italic leading-relaxed -mt-4">
                  To build long-term global partnerships by delivering trusted Indian agricultural products with integrity and excellence.
              </h3>
              <div className="mt-8 text-xs tracking-[0.2em] uppercase text-charcoal/60 font-semibold">
                  Our Vision
              </div>
          </div>
      </section>
    </div>
  );
}

