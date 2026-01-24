'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="text-charcoal/80 hover:text-forest transition-colors text-sm font-medium flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
      >
        Products
        <svg 
          className={`w-4 h-4 transition-transform duration-200 text-gold ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`
          absolute top-full -left-4 w-64 pt-4
          transition-all duration-300 transform origin-top
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
        `}
      >
        <div className="bg-ivory border border-forest/10 shadow-xl rounded-sm overflow-hidden flex flex-col">
           {products.map((category) => (
             <div key={category.id} className="relative group/item">
                <Link 
                  href={`/products/${category.slug}`}
                  className="block px-6 py-3 text-charcoal/80 hover:text-forest hover:bg-forest/5 border-b border-forest/5 last:border-0 text-sm transition-colors duration-200"
                >
                  {category.name}
                </Link>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;
