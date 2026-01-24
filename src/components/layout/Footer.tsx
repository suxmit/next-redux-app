import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-forest border-t border-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-wider text-ivory mb-6 block font-serif">
              TAUREA <span className="text-gold text-sm tracking-[0.2em] font-sans block mt-1 font-normal">LUX AGRO</span>
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">
              Curating the finest agricultural visuals and sustainable stories from around the globe.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-gold font-semibold mb-6 tracking-wide text-sm uppercase">Explore</h3>
            <ul className="space-y-4">
              {['The Gallery', 'Artists', 'Collections', 'Exhibitions'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/70 hover:text-gold text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-gold font-semibold mb-6 tracking-wide text-sm uppercase">Company</h3>
            <ul className="space-y-4">
              {['Our Mission', 'Sustainability', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/70 hover:text-gold text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h3 className="text-gold font-semibold mb-6 tracking-wide text-sm uppercase">Newsletter</h3>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-ivory/10 border border-gold/20 text-ivory px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm w-full placeholder:text-ivory/30"
              />
              <button className="bg-gold hover:bg-ivory hover:text-forest text-forest px-4 py-3 transition-colors text-sm font-medium tracking-wide border border-gold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-ivory/50 text-xs tracking-wider">
            © {new Date().getFullYear()} TAUREA LUX AGRO.
          </p>
          <div className="flex space-x-8">
            {['Instagram', 'Pinterest', 'LinkedIn'].map((item) => (
              <a key={item} href="#" className="text-ivory/60 hover:text-gold text-xs tracking-wider uppercase transition-colors">
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
