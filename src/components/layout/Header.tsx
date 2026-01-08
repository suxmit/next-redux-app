import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-950 text-emerald-100/80 text-xs py-2 px-4 border-b border-white/5 flex justify-between items-center font-sans tracking-wide">
        <div className="max-w-7xl mx-auto w-full flex justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4">
                <span>info@luxagrotaurea.com</span>
            </div>
            <div className="hidden sm:flex gap-4">
                <span>Premium Agricultural Exports</span>
            </div>
        </div>
      </div>
      <header className="fixed top-9 left-0 right-0 z-40 bg-stone-950/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="group flex items-center gap-3">
                <div className="h-10 w-10 relative flex items-center justify-center">
                    {/* Abstract Leaf/Crown Logo Placeholder */}
                     <span className="text-3xl">🌿</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-serif font-bold tracking-widest text-stone-200 group-hover:text-white transition-colors">
                        TAUREA
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-emerald-600">
                        Lux Agro
                    </span>
                </div>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-10">
                {['Gallery', 'Products', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-stone-400 hover:text-emerald-400 transition-colors text-sm font-medium tracking-wide uppercase">
                        {item}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
                <Link href="#contact" className="px-6 py-2.5 bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-medium text-sm transition-all tracking-wider uppercase hover:border-emerald-500">
                Inquire Now
                </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <button className="text-stone-400 hover:text-emerald-400 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
