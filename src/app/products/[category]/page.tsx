import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

// Define params type as a Promise for Next.js 15+
type Params = Promise<{ category: string }>;

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: categorySlug } = await params;
  const category = products.find(c => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/60 mb-12 font-medium">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">{category.name}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-forest mb-6">
          {category.name}
        </h1>
        <div className="h-1 w-20 bg-gold mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map(product => {
            const displayImage = product.image || product.varieties[0]?.image;
            
            return (
            <Link 
              key={product.id} 
              href={`/products/${category.slug}/${product.slug}`}
              className="group relative block bg-white border border-forest/10 hover:border-gold/50 hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm min-h-[380px] flex flex-col justify-end"
            >
              {displayImage && (
                <Image
                  src={displayImage}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${displayImage ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent' : 'bg-gradient-to-b from-forest/5 to-white/90'} transition-opacity duration-300 z-10`}></div>

              <div className="relative z-20 p-8 flex flex-col justify-end">
                <h2 className={`text-2xl font-serif mb-3 transition-colors ${displayImage ? 'text-white group-hover:text-gold' : 'text-charcoal group-hover:text-forest'}`}>
                  {product.name}
                </h2>
                <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${displayImage ? 'text-gray-200' : 'text-charcoal/70'}`}>
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-medium group-hover:gap-4 transition-all mb-6">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.varieties.slice(0, 3).map((variety, idx) => (
                      <span key={idx} className={`inline-block px-2 py-1 text-[10px] uppercase tracking-wide rounded-sm font-medium border ${displayImage ? 'bg-white/10 text-white/90 border-white/20 backdrop-blur-sm' : 'bg-forest/5 text-forest/80 border-forest/5'}`}>
                          {variety.name}
                      </span>
                  ))}
                  {product.varieties.length > 3 && (
                      <span className={`inline-block px-2 py-1 text-[10px] uppercase tracking-wide rounded-sm font-medium border ${displayImage ? 'bg-white/10 text-white/90 border-white/20 backdrop-blur-sm' : 'bg-charcoal/5 text-charcoal/60 border-transparent'}`}>
                          +{product.varieties.length - 3} More
                      </span>
                  )}
                </div>
              </div>
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
}
