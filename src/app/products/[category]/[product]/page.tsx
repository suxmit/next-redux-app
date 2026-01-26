import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductInquiryForm from '@/components/products/ProductInquiryForm';

// Define params type as a Promise for Next.js 15+
type Params = Promise<{ category: string; product: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { category: categorySlug, product: productSlug } = await params;
  
  const category = products.find(c => c.slug === categorySlug);
  const product = category?.products.find(p => p.slug === productSlug);

  if (!category || !product) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/60 mb-12 font-medium">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/products/${category.slug}`} className="hover:text-forest transition-colors">{category.name}</Link>
            <span>/</span>
            <span className="text-gold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Details */}
            <div>
                <h1 className="text-4xl md:text-6xl font-serif text-forest mb-6">
                {product.name}
                </h1>
                <div className="h-1 w-20 bg-gold mb-8"></div>
                
                {/* Product Hero Image - Use Image component if image exists, else fallback */}
                {product.image ? (
                   <div className="relative aspect-video rounded-sm overflow-hidden mb-12 border border-forest/10 shadow-lg">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority
                      />
                   </div>
                ) : (
                  <div className="aspect-video bg-forest/5 border border-forest/10 rounded-sm flex items-center justify-center p-8 text-center mb-12">
                     <span className="text-xs uppercase tracking-widest text-forest/40">Image Coming Soon</span>
                  </div>
                )}

                <p className="text-lg text-charcoal/80 leading-relaxed mb-12 font-light">
                    {product.description}
                </p>

                <div className="mb-12">
                    <h3 className="text-xl font-serif text-forest mb-6">Available Varieties</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {product.varieties.map((vari, idx) => (
                            <li key={idx} className="group border border-forest/10 p-4 rounded-sm bg-white shadow-sm hover:shadow-md hover:border-gold/30 transition-all">
                                {vari.image ? (
                                    <div className="relative h-48 w-full mb-4 rounded-sm overflow-hidden">
                                        <Image
                                            src={vari.image}
                                            alt={vari.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-24 bg-forest/5 rounded-sm flex items-center justify-center mb-4">
                                        <span className="text-charcoal/40 text-[10px] uppercase">No Image</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                                    <span className="text-sm tracking-wide text-charcoal font-medium group-hover:text-forest transition-colors">{vari.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:pl-8 lg:border-l lg:border-forest/10">
                <div className="sticky top-32">
                     <ProductInquiryForm product={product} />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
