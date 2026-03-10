'use client';

import { useEffect, useState } from 'react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  product: string;
  variety: string;
  message: string;
  createdAt: string;
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInquiries = async () => {
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-6 lg:px-12 flex items-center justify-center">
        <p className="font-serif text-forest text-xl animate-pulse">Loading inquiries...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-forest/10">
        <h1 className="text-4xl font-serif text-forest">Product Inquiries</h1>
        <div className="bg-forest/5 px-4 py-2 rounded text-forest font-medium border border-forest/20 shadow-sm">
            Total count: {inquiries.length}
        </div>
      </div>

      {inquiries.length === 0 ? (
        <div className="text-center py-20 bg-forest/5 rounded-lg border border-forest/10">
          <p className="text-charcoal/70 text-lg">No inquiries received yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {inquiries.map((inquiry) => (
            <div key={inquiry.id} className="bg-white/80 p-6 rounded-lg shadow-sm border border-forest/10 hover:border-gold/50 transition-colors">
              <div className="flex flex-col md:flex-row pb-4 mb-4 border-b border-forest/10 gap-4 justify-between">
                <div>
                    <h3 className="text-xl font-medium text-forest">{inquiry.name}</h3>
                    <div className="text-sm text-charcoal/70 mt-1 flex flex-col sm:flex-row gap-2 sm:gap-6">
                        <a href={`mailto:${inquiry.email}`} className="hover:text-gold transition-colors">{inquiry.email}</a>
                        {inquiry.phone && <a href={`tel:${inquiry.phone}`} className="hover:text-gold transition-colors">{inquiry.phone}</a>}
                    </div>
                </div>
                <div className="text-left md:text-right shrink-0">
                    <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-1">
                        {new Date(inquiry.createdAt).toLocaleString(undefined, { 
                            dateStyle: 'medium', 
                            timeStyle: 'short' 
                        })}
                    </p>
                    <div className="inline-block bg-forest text-ivory text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {inquiry.product}
                    </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1 border-l-2 border-gold/30 pl-4">
                      <p className="text-xs uppercase tracking-widest text-forest font-bold mb-1">Interested In</p>
                      <p className="text-charcoal font-medium">{inquiry.variety}</p>
                  </div>
                  <div className="md:col-span-3 bg-forest/5 p-4 rounded border border-forest/5">
                      <p className="text-xs uppercase tracking-widest text-forest font-bold mb-2">Message</p>
                      <p className="text-charcoal/80 whitespace-pre-wrap">{inquiry.message || <span className="text-charcoal/40 italic">No message provided</span>}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
