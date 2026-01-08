import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 selection:bg-emerald-500/30 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-stone-950/70 z-10"></div>
            {/* Abstract Background - Simulating nature texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-stone-950 to-stone-950 animate-pulse"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tight mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            AGRO <span className="text-emerald-600 font-light italic">Essence</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 max-w-lg mx-auto mb-12 leading-relaxed font-light tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            Rediscovering the profound beauty of agriculture through a lens of sustainability and art.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            <a href="#gallery" className="px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white text-sm tracking-widest uppercase transition-colors duration-300">
              Explore Gallery
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] uppercase tracking-widest text-stone-500">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <GalleryGrid />

      {/* Philosophy / Mission Section */}
      <section id="our-story" className="py-32 bg-stone-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-amber-500/80 text-xl font-serif italic mb-4 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-5xl text-white font-serif leading-tight mb-8">
                "We believe that every harvest tells a story of <span className="text-emerald-500">resilience</span>, connection, and the earth's timeless rhythm."
            </h2>
            <p className="text-stone-400 leading-relaxed max-w-2xl mx-auto">
                Agro Essence is more than a gallery; it is a tribute to the hands that toil and the soil that gives. 
                We curate visual narratives that bridge the gap between modern consumption and ancient cultivation.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-12">
                <div>
                    <span className="block text-3xl font-light text-white mb-2">01</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500">Cultivate</span>
                </div>
                <div>
                    <span className="block text-3xl font-light text-white mb-2">02</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500">Sustain</span>
                </div>
                <div>
                    <span className="block text-3xl font-light text-white mb-2">03</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500">Inspire</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
