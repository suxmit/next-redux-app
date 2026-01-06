import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              NEXT<span className="text-blue-500">REDUX</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building the next generation of web applications with premium aesthetics and powerful state management.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Integrations', 'Pricing', 'Changelog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NextRedux Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Twitter', 'GitHub', 'Discord'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
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
