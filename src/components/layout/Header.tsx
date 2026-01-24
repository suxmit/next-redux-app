'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductDropdown from './ProductDropdown';
import { products } from '@/data/products';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-forest text-gold text-xs py-2 px-4 border-b border-gold/20 flex justify-between items-center font-sans tracking-wide">
        <div className="max-w-7xl mx-auto w-full flex justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4">
                <span className="opacity-90">info@luxagrotaurea.com</span>
            </div>
            <div className="hidden sm:flex gap-4">
                <span className="uppercase tracking-widest text-[0.65rem]">Premium Agricultural Exports</span>
            </div>
        </div>
      </div>
      <header className="fixed top-9 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-forest/10 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="group flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="h-10 w-10 relative flex items-center justify-center bg-forest rounded-sm text-gold">
                    {/* Abstract Leaf/Crown Logo Placeholder */}
                     <span className="text-2xl">🌿</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-serif font-bold tracking-widest text-forest group-hover:text-gold transition-colors">
                        TAUREA
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gold font-medium">
                        Lux Agro
                    </span>
                </div>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex items-center gap-8">
                {/* Products Dropdown */}
                <li>
                  <ProductDropdown />
                </li>
                {[
                    { name: 'Catalogue', href: '/#products' },
                    { name: 'Our Story', href: '/#our-story' },
                    { name: 'Contact', href: '#contact' }
                ].map((item) => (
                    <li key={item.name}>
                    <Link href={item.href} className="text-charcoal/80 hover:text-forest transition-colors text-sm font-medium tracking-wide uppercase hover:underline decoration-gold underline-offset-4 decoration-1 flex items-center">
                        {item.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button 
                  className="text-forest hover:text-gold p-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                {isMobileMenuOpen ? (
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu Drawer - Full Screen */}
        {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-[100] bg-white h-screen w-screen flex flex-col animate-[fadeIn_0.2s_ease-out]">
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-forest/10">
                    <Link href="/" className="group flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="h-8 w-8 relative flex items-center justify-center bg-forest rounded-sm text-gold">
                             <span className="text-lg">🌿</span>
                        </div>
                        <span className="text-lg font-serif font-bold tracking-widest text-forest">
                            TAUREA
                        </span>
                    </Link>
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-forest hover:text-gold transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto p-6 pb-32">
                    <nav className="flex flex-col space-y-8">
                        {/* Standard Links - Prioritized */}
                        <div className="flex flex-col space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Catalogue', href: '/#products' },
                                { name: 'Our Story', href: '/#our-story' },
                                { name: 'Contact', href: '#contact' }
                            ].map((item) => (
                                 <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className="text-2xl font-serif text-forest hover:text-gold transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                 >
                                    {item.name}
                                 </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-forest/10"></div>

                        {/* Products Grid */}
                        <div className="space-y-4">
                            <span className="text-xs font-bold tracking-widest uppercase text-charcoal/50">
                                Product Categories
                            </span>
                             <div className="grid grid-cols-1 gap-3">
                                {products.map((category) => (
                                    <Link 
                                        key={category.id} 
                                        href={`/products/${category.slug}`}
                                        className="text-lg font-medium text-charcoal/80 hover:text-forest flex items-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-gold">›</span> {category.name}
                                    </Link>
                                ))}
                             </div>
                        </div>
                    </nav>
                </div>
            </div>
        )}
      </header>
    </>
  );
};

export default Header;
