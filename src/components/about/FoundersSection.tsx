import Image from 'next/image';

const founders = [
  {
    name: "Pratham Singh Chouhan",
    title: <>Founder</>,
    message: (
      <>
        <p>
            Growing up in a farming family, I witnessed firsthand the dedication of Indian farmers. This inspired my vision to share India's agricultural richness with the world. After studying International Business Management and completing my MSc in the UK, I gained the global insights needed to make this a reality.
        </p>
        <p>
            I established <strong className="text-gold font-semibold">LUXAGRO TAUREA LLP</strong> to bridge the gap between Indian farmers and global markets, upholding the highest standards of quality and trust. To me, agriculture is a legacy and a responsibility. Our commitment is simple: bringing the best of Indian farming to global tables while building lasting international partnerships.
        </p>
      </>
    )
  },
  {
    name: "Jayvardhan Singh Patel",
    title: <>Co-Founder</>,
    message: (
      <>
        <p>
            Coming from a family guided by the harvest, I learned early that agriculture is the backbone of our identity. As an entrepreneur, my goal has always been simple: ensuring the world recognizes the true value of our farmers produce.
        </p>
        <p>
            As a Co-Founder of <strong className="text-gold font-semibold">LUXAGRO TAUREA LLP</strong>, my mission is to transform that heritage into a world-class supply chain. This venture is about honoring our roots through modern standards of excellence. We aren’t just exporting goods, we are taking the integrity of Indian soil global. I take pride to ensure our products reflect both the farmers trust and the quality our partners deserve.
        </p>
      </>
    )
  }
];

export default function FoundersSection() {
  return (
    <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-20">
             <Image 
                src="/founder-bg.png"
                alt="Agricultural texture"
                fill
                className="object-cover"
             />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-gold text-lg font-bold tracking-widest uppercase mb-4 block">Leadership</span>
                <h2 className="text-3xl md:text-5xl font-serif text-ivory">Bridging Roots to the World</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {founders.map((founder, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 hover:bg-white/10 transition-colors"
                    >
                       <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg font-light leading-relaxed text-white/80 text-center md:text-justify mb-10 flex-grow">
                           {founder.message}
                       </div>

                       <div className="mt-auto border-t border-white/20 pt-6 text-center">
                           <h4 className="text-xl tracking-wide font-medium text-gold mb-1">— {founder.name}</h4>
                           <p className="text-sm uppercase tracking-wider text-white/50">{founder.title}</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
