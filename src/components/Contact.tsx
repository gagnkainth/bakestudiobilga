import { MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    item: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Bake Studio Bilga! I would like to place an order.
Name: ${formData.name}
Item: ${formData.item}
Date: ${formData.date}
Message: ${formData.message}`;
    
    // Replace with actual WhatsApp number (e.g., 919876543210)
    const whatsappUrl = `https://wa.me/919915559192?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white">Visit & Order</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Drop by our bakery or place an order directly via WhatsApp.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Address & Map */}
          <div className="flex-1 w-full space-y-8">
            <div className="bg-brand-card p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <div className="flex items-start gap-4 text-zinc-300 text-lg">
                <MapPin className="text-brand-red flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-heading text-white mb-2">Bake Studio Bilga</h3>
                  <p className="leading-relaxed">
                    Mistry Chana Ram Road, near Pipli Sahib Gurdwara,<br />
                    Bilga, Punjab 144036
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/12isTMfqUBVtkiPq5?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-6 text-brand-red hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-zinc-800 relative group shadow-xl">
              {/* Simulated dark map image */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-brand-darker/40 mix-blend-multiply pointer-events-none"></div>
              
              {/* Custom Map Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce pointer-events-none">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="w-2 h-2 bg-brand-red rounded-full mt-2 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
              </div>
            </div>
          </div>

          {/* Right: WhatsApp Booking Form */}
          <div className="flex-1 w-full">
            <div className="bg-brand-card p-8 md:p-10 rounded-2xl border border-zinc-800 shadow-xl">
              <h3 className="text-3xl font-heading text-white mb-2">Order via WhatsApp</h3>
              <p className="text-zinc-400 mb-8">Fill out the details below and we'll get back to you instantly to confirm your order.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-darker border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="item" className="block text-sm font-medium text-zinc-400 mb-2">What would you like to order?</label>
                  <input 
                    type="text" 
                    id="item" 
                    name="item"
                    required
                    value={formData.item}
                    onChange={handleChange}
                    className="w-full bg-brand-darker border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="e.g. 1kg Chocolate Truffle Cake"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-zinc-400 mb-2">Required Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-brand-darker border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Additional Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-brand-darker border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="Any specific design, message on cake, or dietary requirements?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
