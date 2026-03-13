import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

const CategoryGrid = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
             {/* <h2 className="text-gold font-bold tracking-widest uppercase text-xs mb-2">Our Offerings</h2> */}
                <h3 className="text-3xl md:text-5xl font-bold text-forest tracking-tight">Products</h3>
            </div>
            {/* <Link href="/products/pulses-legumes" className="hidden md:block text-charcoal/60 hover:text-forest transition-colors text-sm font-medium border-b border-charcoal/20 hover:border-forest pb-1">
                View All Categories
            </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((category) => {
             const firstProductImage = category.products[0]?.image || category.products[0]?.varieties[0]?.image;
             
             return (
                <Link key={category.id} href={`/products/${category.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 mb-4">
                        {firstProductImage ? (
                            <Image 
                                src={firstProductImage} 
                                alt={category.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                <span className="text-4xl">🌿</span>
                            </div>
                        )}
                        
                        {/* Subtle Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-forest group-hover:text-gold transition-colors mb-1">
                        {category.name}
                    </h4>
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                        {category.products.length} Products &rarr;
                    </span>
                </Link>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
