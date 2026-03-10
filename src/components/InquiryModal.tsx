'use client';

import { useState } from 'react';

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        product: 'General Inquiry',
        variety: 'General Inquiry'
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to submit inquiry');
            
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData(prev => ({ ...prev, name: '', email: '', phone: '', message: '' }));
            }, 2000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full relative">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-charcoal/50 hover:text-forest transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold text-forest mb-2">Get in Touch</h2>
                <p className="text-charcoal/70 mb-6 text-sm">Send us a general inquiry and our team will get back to you shortly.</p>

                {status === 'success' ? (
                    <div className="bg-forest/10 p-4 rounded text-forest text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="font-medium">Inquiry sent successfully!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2.5 border border-forest/20 rounded focus:ring-1 focus:ring-forest focus:border-forest outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2.5 border border-forest/20 rounded focus:ring-1 focus:ring-forest focus:border-forest outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Phone (Optional)</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2.5 border border-forest/20 rounded focus:ring-1 focus:ring-forest focus:border-forest outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
                            <textarea 
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2.5 border border-forest/20 rounded focus:ring-1 focus:ring-forest focus:border-forest outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm">Failed to send inquiry. Please try again.</p>
                        )}

                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className="w-full py-3 px-4 bg-forest text-gold font-medium rounded hover:bg-forest/90 transition-colors disabled:opacity-70 flex justify-center items-center"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
