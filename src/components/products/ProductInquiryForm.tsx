'use client';

import { useState } from 'react';
import { Product } from '@/data/products';

interface ProductInquiryFormProps {
  product: Product;
}

const ProductInquiryForm = ({ product }: ProductInquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    variety: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form and show success
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', variety: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-forest/5 border border-forest/10 p-8 rounded-lg backdrop-blur-sm">
      <h3 className="text-2xl font-serif text-forest mb-2">Inquire about {product.name}</h3>
      <p className="text-charcoal/70 mb-6 text-sm">Fill out the form below to get a quote or more information.</p>

      {status === 'success' ? (
        <div className="bg-forest/10 text-forest p-4 rounded text-center animate-pulse border border-forest/20">
            <p className="font-medium">Thank you for your inquiry!</p>
            <p className="text-sm mt-1">We will get back to you shortly.</p>
            <button onClick={() => setStatus('idle')} className="mt-4 text-xs underline uppercase tracking-widest text-gold hover:text-forest transition-colors">Send another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-forest font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-forest/20 focus:border-gold rounded px-4 py-2 text-charcoal outline-none transition-colors placeholder:text-charcoal/40"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-forest font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-forest/20 focus:border-gold rounded px-4 py-2 text-charcoal outline-none transition-colors placeholder:text-charcoal/40"
                  placeholder="john@example.com"
                />
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-forest font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-forest/20 focus:border-gold rounded px-4 py-2 text-charcoal outline-none transition-colors placeholder:text-charcoal/40"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="variety" className="text-xs uppercase tracking-widest text-forest font-medium">Select Variety</label>
                <select
                  id="variety"
                  name="variety"
                  required
                  value={formData.variety}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-forest/20 focus:border-gold rounded px-4 py-2 text-charcoal outline-none transition-colors appearance-none"
                >
                  <option value="" disabled className="text-charcoal/40">Select a variety</option>
                  {product.varieties.map((v, idx) => (
                    <option key={idx} value={v.name} className="bg-ivory text-charcoal">{v.name}</option>
                  ))}
                  <option value="other" className="bg-ivory text-charcoal">Other / General Inquiry</option>
                </select>
              </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-forest font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/50 border border-forest/20 focus:border-gold rounded px-4 py-2 text-charcoal outline-none transition-colors resize-none placeholder:text-charcoal/40"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-forest hover:bg-gold hover:text-forest text-ivory font-medium py-3 rounded uppercase tracking-widest text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-forest hover:border-gold shadow-sm"
            >
              {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProductInquiryForm;
