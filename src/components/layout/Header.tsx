'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductDropdown from './ProductDropdown';
import { products } from '@/data/products';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-md backdrop-saturate-150 border-b border-white/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all">
        <div className="bg-forest text-white/90 py-2 sm:py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center justify-between text-[10px] sm:text-xs md:text-sm">
                <div className="font-medium tracking-wide">
                  Premium Agricultural Exports <span className="hidden sm:inline">from India</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-8 justify-end flex-shrink-0">
                   <a href="tel:+917879780962" className="flex items-center gap-2 hover:text-gold transition-colors p-1 sm:p-0">
                     <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     <span className="hidden sm:inline">+91 78797 80962</span>
                   </a>
                   <a href="mailto:info@luxagrotaurea.com" className="flex items-center gap-2 hover:text-gold transition-colors p-1 sm:p-0">
                     <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                     <span className="hidden sm:inline">info@luxagrotaurea.com</span>
                   </a>
                </div>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="group flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative h-16 w-56">
                     <Image 
                        src="/logo-header-unified.png" 
                        alt="Lux Agro Taurea Logo" 
                        fill
                        className="object-contain object-left"
                        priority
                     />
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
                    { name: 'About', href: '/about' },
                    { name: 'Contact', href: '#contact' }
                ].map((item) => (
                    <li key={item.name}>
                    <Link href={item.href} className="text-charcoal/80 hover:text-forest transition-colors text-sm font-medium flex items-center">
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
                        <div className="relative h-12 w-56">
                            <Image 
                                src="/logo-header-unified.png" 
                                alt="Lux Agro Taurea" 
                                fill
                                className="object-contain object-left"
                            />
                        </div>
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
                                { name: 'About', href: '/about' },
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
                                Products
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
