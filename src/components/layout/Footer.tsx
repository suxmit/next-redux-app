import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-wider text-white mb-6 block">
              AGRO <span className="text-emerald-600">ESSENCE</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Curating the finest agricultural visuals and sustainable stories from around the globe.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Explore</h3>
            <ul className="space-y-4">
              {['The Gallery', 'Artists', 'Collections', 'Exhibitions'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-stone-500 hover:text-emerald-500 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Company</h3>
            <ul className="space-y-4">
              {['Our Mission', 'Sustainability', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-stone-500 hover:text-emerald-500 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Newsletter</h3>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-stone-900/50 border border-stone-800 text-stone-300 px-4 py-3 focus:outline-none focus:border-emerald-600 transition-colors text-sm w-full"
              />
              <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-3 transition-colors text-sm font-medium tracking-wide">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-xs tracking-wider">
            © {new Date().getFullYear()} AGRO ESSENCE GALLERY.
          </p>
          <div className="flex space-x-8">
            {['Instagram', 'Pinterest', 'LinkedIn'].map((item) => (
              <a key={item} href="#" className="text-stone-600 hover:text-emerald-500 text-xs tracking-wider uppercase transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
