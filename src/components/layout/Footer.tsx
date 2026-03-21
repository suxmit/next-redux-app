import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-forest border-t border-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 block relative h-20 w-64">
                <Image 
                    src="/logo-footer-unified.png" 
                    alt="Lux Agro Taurea" 
                    fill
                    className="object-contain object-left"
                />
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">
              Bridging the gap between Indian farmers and global markets with premium quality agricultural exports.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-gold font-semibold mb-6 tracking-wide text-sm uppercase">Our Products</h3>
            <ul className="space-y-4">
              {[
                { name: 'Pulses & Legumes', href: '/products/pulses-legumes' },
                { name: 'Cereals & Grains', href: '/products/cereals-grains' },
                { name: 'Spices', href: '/products/spices' },
                { name: 'Vegetables', href: '/products/vegetables' },
                { name: 'Fruits', href: '/products/fruits' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-ivory/70 hover:text-gold text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gold font-semibold mb-6 tracking-wide text-sm uppercase">Company</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                // { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-ivory/70 hover:text-gold text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-gold font-semibold mb-6 tracking-wide text-sm uppercase">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-forest/60 text-xs font-bold uppercase tracking-wider bg-gold/10 inline-block px-2 py-1 rounded w-fit text-ivory/80">
                    India Office 🇮🇳
                </span>
                <p className="text-ivory/70 text-sm leading-relaxed mb-1">
                  Old AB Road Khalghat, District - Dhar,<br />
                  454552, Madhya Pradesh, India
                </p>
                <a href="tel:+917879780962" className="text-ivory/90 hover:text-gold text-sm transition-colors font-medium">
                   +91 78797 80962
                </a>
              </li>
              <li className="flex flex-col gap-1 mt-4">
                <span className="text-forest/60 text-xs font-bold uppercase tracking-wider bg-gold/10 inline-block px-2 py-1 rounded w-fit text-ivory/80">
                    UK Office 🇬🇧
                </span>
                <p className="text-ivory/70 text-sm leading-relaxed mb-1">
                  115, Forum House, Empire Way,<br />
                  Wembley Park, HA9 0HJ
                </p>
                <a href="tel:+447407051321" className="text-ivory/90 hover:text-gold text-sm transition-colors font-medium">
                   +44 7407 051321
                </a>
              </li>
              <li className="flex flex-col gap-1 mt-4">
                 <span className="text-ivory/50 text-xs uppercase tracking-wider">Email</span>
                 <a href="mailto:info@luxagrotaurea.com" className="text-ivory/90 hover:text-gold text-sm transition-colors font-medium">
                    info@luxagrotaurea.com
                 </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-ivory/50 text-xs tracking-wider">
            © {new Date().getFullYear()} LUX AGRO TAUREA.
          </p>
          <div className="flex space-x-8">
            {/* {['Instagram', 'Pinterest', 'LinkedIn'].map((item) => (
              <a key={item} href="#" className="text-ivory/60 hover:text-gold text-xs tracking-wider uppercase transition-colors">
                {item}
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
