import Image from 'next/image';

export const metadata = {
  title: 'About Us | Lux Agro Taurea',
  description: 'Our Journey from Shree Shubh Agro & Organic to a globally trusted Indian agricultural export company.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans text-charcoal bg-white pt-24 sm:pt-32 pb-20">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full mb-20 overflow-hidden">
        <Image 
          src="/about-hero.png"
          alt="Lush green Indian agricultural fields at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold tracking-tight px-4 text-center">
                Our Story
            </h1>
        </div>
      </section>

      {/* Main Content: Company History */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="flex flex-col gap-6 text-lg text-charcoal/80 leading-relaxed font-light text-left md:text-justify">
            <p>
                <strong className="font-semibold text-forest">LUXAGRO TAUREA</strong> is the evolution of a long-standing agricultural journey rooted in hands-on farming and domestic distribution across India. Our story began under the name <strong className="text-forest font-semibold">Shree Shubh Agro & Organic</strong>, through which we supplied agricultural and organic products to markets across the country with a strong focus on quality, reliability, and ethical practices.
            </p>
            <p>
                Operating nationally for many years, we were directly involved in cultivation, sourcing, and distribution. This experience helped us develop a deep understanding of farming practices, crop quality, seasonal cycles, and the importance of maintaining consistent standards from farm to market. Through it, we have built trusted relationships with farmers, suppliers, and domestic buyers, establishing a solid reputation within India.
            </p>
            <p>
                As our vision grew beyond national boundaries, we transitioned into <strong className="text-forest font-semibold">LUXAGRO TAUREA</strong> — a brand created to represent our global ambition. Under this new identity, we are expanding into international markets, bringing premium Indian agricultural and allied products to buyers worldwide, while carrying forward the same values and agricultural heritage.
            </p>
            <p>
                By combining traditional agricultural knowledge with modern processing, packaging, and export logistics, <strong className="text-forest font-semibold">LUXAGRO TAUREA</strong> is committed to delivering quality, traceability, and reliability that meet global expectations. Our journey reflects a natural progression — from serving India with trust to serving the world with excellence.
            </p>
            <p className="text-2xl font-serif text-forest mt-8 text-center md:text-justify italic leading-relaxed px-4 border-l-4 border-gold bg-ivory/30 py-6 rounded-r-md">
                "From it to <strong className="text-forest font-semibold">LUXAGRO TAUREA</strong>, our purpose remains unchanged: to respect our farming legacy and responsibly bring the work of Indian farmers to global tables."
            </p>
        </div>
      </section>

      {/* Vision & Mission Section (Reused from Home but standalone) */}
      <section className="py-24 bg-forest text-ivory overflow-hidden mb-24">
        <div className="max-w-7xl mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
                {/* Mission */}
                <div className="flex flex-col md:pr-12 md:border-r border-ivory/20 pb-12 border-b md:pb-0 md:border-b-0 md:border-t-0">
                    <span className="text-gold text-lg font-medium mb-4 block text-center">Our Mission</span>
                    <h2 className="text-lg md:text-xl font-light leading-relaxed text-center md:text-justify">
                        "To supply high-quality agricultural and allied products to domestic and international markets through responsible sourcing, strict quality control, and reliable export practices, while supporting farmers and promoting sustainable agriculture."
                    </h2>
                </div>

                {/* Vision */}
                <div className="flex flex-col md:pl-12 pt-12 md:pt-0">
                    <span className="text-gold text-lg font-medium mb-4 block text-center">Our Vision</span>
                    <h2 className="text-lg md:text-xl font-light leading-relaxed text-center md:text-justify">
                        "To become a globally trusted agricultural export company, recognised for heritage, quality, transparency, and long-term partnerships, while representing Indian agriculture with pride in international markets."
                    </h2>
                </div>
             </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
            <span className="text-gold text-sm font-bold tracking-widest uppercase mb-4 block">What Drives Us</span>
            <h2 className="text-4xl font-serif text-forest">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
                { title: "Heritage & Responsibility", icon: "🌱" },
                { title: "Quality Excellence", icon: "✨" },
                { title: "Trust & Integrity", icon: "🤝" },
                { title: "Sustainability", icon: "🌍" },
                { title: "Customer Commitment", icon: "⭐" },
            ].map((value, idx) => (
                <div key={idx} className="flex flex-col items-center p-8 bg-ivory rounded-sm shadow-sm border border-black/5 hover:border-gold/50 transition-colors group">
                    <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{value.icon}</div>
                    <h3 className="text-lg font-medium text-forest text-center">{value.title}</h3>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
}
