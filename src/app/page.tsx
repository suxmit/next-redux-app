'use client';

import CategoryGrid from '@/components/gallery/CategoryGrid';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-sans text-charcoal bg-white w-full overflow-x-hidden">
      
      {/* Tizara-Style Hero Section (Split Layout) */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[104px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-20 bg-white order-2 lg:order-1">
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
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto text-center px-8 py-3 bg-forest text-gold border border-forest font-medium hover:bg-forest/90 transition-colors rounded-sm shadow-md"
                >
                    Get in Touch
                </button>
                <Link href="#products" className="w-full sm:w-auto text-center px-8 py-3 border border-forest/20 text-forest font-medium hover:border-gold hover:text-gold transition-colors rounded-sm">
                    View Products
                </Link>
            </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[50vh] lg:h-auto bg-ivory order-1 lg:order-2 min-h-[400px]">
            <div className="absolute inset-0">
                <Image 
                    src="/hero-premium.png"
                    alt="Premium Indian Agricultural Exports - Pulses, Grains, and Spices"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
        </div>
      </section>

      {/* Intro Section - Tizara Style "Who We Are" */}
      <section className="py-24 bg-ivory px-6">
        <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-forest mb-8 text-center">About LuxAgro Taurea</h2>
             <div className="flex flex-col gap-6 text-lg text-charcoal/80 leading-relaxed font-light text-justify sm:text-center">
                 <p>
                    <strong className="font-semibold text-forest">LUXAGRO TAUREA</strong> evolved from <strong>Shree Subh Agro & Organic</strong>, our foundational brand that supplied premium organic products across India. Years of hands-on cultivation, sourcing, and domestic distribution helped us build deep expertise in farming practices and trusted relationships from farm to market.
                 </p>
                 <p>
                    As our vision expanded globally, we transitioned into LUXAGRO TAUREA. This new identity carries forward our agricultural heritage while bringing India's finest agricultural and allied products to the international stage. We combine traditional farming wisdom with modern processing and export logistics to deliver traceability and reliability worldwide.
                 </p>
                 <p className="text-xl font-medium text-forest mt-4 text-center italic">
                    From Shree Subh Agro to LUXAGRO TAUREA, our purpose remains unchanged: to honor our farming legacy and responsibly bring the work of Indian farmers to global tables.
                 </p>
             </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <CategoryGrid />

      {/* Global Presence / Stats Section */}
      {/* <section className="py-24 bg-white border-t border-forest/10">
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
      </section> */}

      {/* Vision & Mission Section */}
      <section id="our-story" className="py-24 bg-forest text-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
                <div className="flex flex-col md:pr-12 md:border-r border-ivory/20 pb-12 border-b md:pb-0 md:border-b-0 md:border-t-0">
                    <span className="text-gold text-lg font-medium mb-4 block text-center md:text-left">Our Mission</span>
                    <h2 className="text-xl md:text-2xl font-light leading-relaxed text-center md:text-left italic">
                        "To supply high-quality agricultural and allied products to domestic and international markets through responsible sourcing, strict quality control, and reliable export practices, while supporting farmers and promoting sustainable agriculture."
                    </h2>
                </div>

                {/* Vision */}
                <div className="flex flex-col md:pl-12 pt-12 md:pt-0">
                    <span className="text-gold text-lg font-medium mb-4 block text-center md:text-left">Our Vision</span>
                    <h2 className="text-xl md:text-2xl font-light leading-relaxed text-center md:text-left italic">
                        "To become a globally trusted agricultural export company, recognised for heritage, quality, transparency, and long-term partnerships, while representing Indian agriculture with pride in international markets."
                    </h2>
                </div>
             </div>
        </div>
      </section>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
