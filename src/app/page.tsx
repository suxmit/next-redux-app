'use client';

import CategoryGrid from '@/components/gallery/CategoryGrid';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans text-charcoal bg-white">
      
      {/* Tizara-Style Hero Section (Split Layout) */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-20">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 bg-white order-2 lg:order-1">
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4">
                Global Agricultural Exports
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-forest leading-tight mb-8">
                Harvesting Heritage.<br />
                Delivering Excellence.
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed max-w-lg mb-10">
                Lux Agro Taurea bridges the gap between Indian farmers and global markets, exporting premium quality pulses, spices, and grains with unmatched reliability.
            </p>
            <div className="flex gap-4">
                <Link href="#contact" className="px-8 py-3 bg-forest text-gold border border-forest font-medium hover:bg-forest/90 transition-colors rounded-sm shadow-md">
                    Get in Touch
                </Link>
                <Link href="#products" className="px-8 py-3 border border-forest/20 text-forest font-medium hover:border-gold hover:text-gold transition-colors rounded-sm">
                    View Products
                </Link>
            </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[50vh] lg:h-auto bg-ivory order-1 lg:order-2">
            {/* Using a placeholder or existing abstract pattern until a real port/ship image is available */}
            <div className="absolute inset-0 bg-forest/5 flex items-center justify-center">
                 <div className="text-center p-8">
                    <span className="text-6xl mb-4 block">🌍</span>
                    <span className="text-forest/20 font-bold text-xl uppercase tracking-widest">Global Logistics</span>
                 </div>
            </div>
        </div>
      </section>

      {/* Intro Section - Tizara Style "Who We Are" */}
      <section className="py-24 bg-ivory px-6">
        <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-forest mb-6">About Lux Agro Taurea</h2>
             <p className="text-xl text-charcoal/80 leading-relaxed font-light">
                We are a dedicated export house focused on delivering the finest Indian agricultural produce to the world. 
                With a deep-rooted heritage in farming and modern supply chain management, we ensure that every grain meets 
                international standards of quality and safety.
             </p>
        </div>
      </section>

      {/* Category Grid Section */}
      <CategoryGrid />

      {/* Global Presence / Stats Section */}
      <section className="py-24 bg-white border-t border-forest/10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                  {[
                      { label: "Countries Served", value: "20+" },
                      { label: "Products Exported", value: "50+" },
                      { label: "Farmers Connected", value: "500+" },
                      { label: "Years of Legacy", value: "10+" }
                  ].map((stat) => (
                      <div key={stat.label}>
                          <div className="text-5xl font-bold text-gold mb-2">{stat.value}</div>
                          <div className="text-forest font-medium text-sm uppercase tracking-wide">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Vision Section */}
      <section id="our-story" className="py-24 bg-forest text-ivory">
        <div className="max-w-5xl mx-auto px-6 text-center">
             <span className="text-gold text-lg font-medium mb-4 block">Our Vision</span>
             <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                "To build sustainable global partnerships by delivering trusted Indian agricultural products with integrity."
             </h2>
             <Link href="#contact" className="inline-block border-b border-gold pb-1 text-gold hover:text-white hover:border-white transition-colors">
                Contact Us to Partner →
             </Link>
        </div>
      </section>
    </div>
  );
}
