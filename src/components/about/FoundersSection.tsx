import Image from 'next/image';

const founders = [
  {
    name: "Pratham Singh Chouhan",
    title: "Founder, LUXAGRO TAUREA LLP",
    message: (
      <>
        <p>
            Growing up in a family closely connected to farming, I witnessed from an early age the dedication, resilience, and pride that Indian farmers bring to the land. Those experiences shaped my respect for agriculture and inspired a vision that stayed with me since my high school years—to one day take the richness of Indian agricultural produce beyond our borders and share it with the world. To pursue this goal, I studied Business Administration with a specialization in International Business Management, and later moved to the United Kingdom to complete my MSc in International Business, gaining global exposure and a deeper understanding of international trade.
        </p>
        <p>
            With this foundation, I established <strong>LUXAGRO TAUREA LLP</strong> with a clear purpose: to connect the hard work of Indian farmers with global markets while maintaining the highest standards of quality, transparency, and trust. For me, agriculture is not just a business—it is a legacy, a responsibility, and a bridge between cultures. Our commitment remains simple yet powerful: to bring the best quality from Indian farmers to global tables while building lasting relationships across international markets.
        </p>
      </>
    )
  },
  {
    name: "Jayvardhan Singh Patel",
    title: "Co-Founder, LUXAGRO TAUREA LLP",
    message: (
      <>
        <p>
            Coming from a family where the rhythm of life was dictated by the harvest, I learned early on that agriculture is the backbone of our identity. My journey as an entrepreneur has always been driven by a single question: How can we ensure the world recognizes the true value of what our farmers produce?
        </p>
        <p>
            At LUXAGRO TAUREA LLP, my mission as Co-Founder is to transform that heritage into a world-class supply chain. For me, this venture is about more than logistics; it is about honoring our roots by implementing modern standards of excellence. We aren’t just exporting goods; we are exporting the integrity and hard work of the Indian soil. I am proud to work alongside Pratham to ensure that every product we deliver reflects the trust our farmers have placed in us and the quality our global partners deserve.
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
                <span className="text-gold text-sm font-bold tracking-widest uppercase mb-4 block">Leadership</span>
                <h2 className="text-3xl md:text-5xl font-serif text-ivory">Bridging Roots to the World</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {founders.map((founder, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 hover:bg-white/10 transition-colors"
                    >
                       <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg font-light leading-relaxed text-white/80 text-justify sm:text-left mb-10 block flex-grow">
                           {founder.message}
                       </div>

                       <div className="mt-auto border-t border-white/20 pt-6">
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
