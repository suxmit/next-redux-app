import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

const CategoryGrid = () => {
  return (
    <section id="products" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
            <div>
                <h2 className="text-gold font-medium tracking-widest uppercase text-xs mb-3">Our Offerings</h2>
                <h3 className="text-3xl md:text-5xl font-serif text-forest tracking-tight">Premium Catalogue</h3>
            </div>
            <Link href="/products/pulses-legumes" className="hidden md:block text-charcoal/60 hover:text-forest transition-colors text-xs tracking-widest uppercase border-b border-charcoal/20 hover:border-forest pb-2">
                View All Products
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((category) => {
             // Fallback image logic or use specific representative images
             // For now we use the first product's image if available, or a default
             const firstProductImage = category.products[0]?.image || category.products[0]?.varieties[0]?.image;
             
             return (
                <Link key={category.id} href={`/products/${category.slug}`} className="group block relative aspect-[4/5] overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Image Layer */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    {firstProductImage ? (
                        <Image 
                            src={firstProductImage} 
                            alt={category.name}
                            fill
                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-forest/5 flex items-center justify-center">
                            <span className="text-forest/20 text-4xl">🌿</span>
                        </div>
                    )}
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-gold text-[10px] font-bold tracking-widest uppercase mb-3 opacity-90">
                            {category.products.length} Products
                        </span>
                        <h4 className="text-ivory text-2xl font-serif tracking-wide group-hover:text-gold transition-colors duration-300">
                            {category.name}
                        </h4>
                        
                        <div className="h-0.5 w-0 group-hover:w-16 bg-gold mt-4 transition-all duration-500 delay-100"></div>
                    </div>
                </Link>
             );
          })}
        </div>

        <div className="mt-16 text-center md:hidden">
            <Link href="/products/pulses-legumes" className="text-charcoal/60 hover:text-forest transition-colors text-xs tracking-widest uppercase border-b border-charcoal/20 hover:border-forest pb-2">
                View All Products
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
