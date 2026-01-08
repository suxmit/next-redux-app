import Image from 'next/image';

const galleryItems = [
  { id: 1, title: 'Fresh Vegetables', category: 'Fresh Produce', image: '/images/fresh_vegetables.png', color: 'bg-emerald-900' },
  { id: 2, title: 'Premium Rice', category: 'Grains', image: '/images/premium_rice.png', color: 'bg-stone-800' },
  { id: 3, title: 'Exotic Spices', category: 'Spices', image: '/images/exotic_spices.png', color: 'bg-amber-900' },
  { id: 4, title: 'Red & Green Chillies', category: 'Spices', image: '/images/chillies.png', color: 'bg-red-900' },
  { id: 5, title: 'Pulses & Lentils', category: 'Grains', image: '/images/pulses.png', color: 'bg-yellow-900' },
  { id: 6, title: 'Cereals & Millets', category: 'Grains', image: '/images/cereals.png', color: 'bg-amber-800' },
  { id: 7, title: 'Premium Cotton', category: 'Raw Materials', image: '/images/cotton.png', color: 'bg-stone-300' },
  { id: 8, title: 'Mineral Water', category: 'Beverages', image: '/images/water.png', color: 'bg-cyan-900' },
  { id: 9, title: 'Organic Fertilizers', category: 'Agri-Inputs', image: '/images/fertilizer.png', color: 'bg-emerald-950' },
];

const GalleryGrid = () => {
  return (
    <section id="gallery" className="py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
            <div>
                <h2 className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-3">Our Collection</h2>
                <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight">Premium Catalogue</h3>
            </div>
            <button className="hidden md:block text-stone-400 hover:text-white transition-colors text-xs tracking-widest uppercase border-b border-stone-800 hover:border-white pb-2">
                Download Brochure
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden bg-stone-900 rounded-sm">
                {/* Image Layer */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                   {/* We use Next/Image but fallback to color if image fails (or handle loading) */}
                   <div className={`w-full h-full ${item.color} relative`}>
                        <Image 
                            src={item.image} 
                            alt={item.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                   </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-3 opacity-90">
                        {item.category}
                    </span>
                    <h4 className="text-white text-2xl font-serif tracking-wide group-hover:text-emerald-200 transition-colors duration-300">
                        {item.title}
                    </h4>
                </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
            <button className="text-stone-400 hover:text-white transition-colors text-xs tracking-widest uppercase border-b border-stone-800 hover:border-white pb-2">
                Download Brochure
            </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
