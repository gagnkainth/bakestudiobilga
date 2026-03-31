import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="review" className="py-24 bg-brand-card border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-brand-red">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" className="opacity-50" />
              <span className="ml-2 text-zinc-300 font-bold text-sm tracking-wider uppercase">4.7 on Google</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-white leading-tight">
              What Our Community Says
            </h2>
            <p className="text-zinc-400 text-lg">
              We take pride in every bake. Here is the love we receive from our amazing customers.
            </p>
          </div>

          <div className="space-y-6">
            <blockquote className="bg-brand-darker p-8 rounded-xl border border-zinc-800 relative">
              <span className="text-6xl text-brand-red/20 font-heading absolute top-4 left-4 leading-none">"</span>
              <p className="text-zinc-300 italic text-lg relative z-10 mb-6">
                Best bakery in town! Their custom cakes are not just beautiful but taste heavenly. The drive-through service at 2 AM is a lifesaver.
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-10 h-[2px] bg-brand-red"></div>
                <span className="text-white font-bold tracking-wide uppercase text-sm">Gurpreet Singh</span>
              </footer>
            </blockquote>

            <blockquote className="bg-brand-darker p-8 rounded-xl border border-zinc-800 relative">
              <span className="text-6xl text-brand-red/20 font-heading absolute top-4 left-4 leading-none">"</span>
              <p className="text-zinc-300 italic text-lg relative z-10 mb-6">
                The chocolate croissants are legendary. Love the vibe of the place and the team is always so welcoming.
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-10 h-[2px] bg-brand-red"></div>
                <span className="text-white font-bold tracking-wide uppercase text-sm">Priya Sharma</span>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Image Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-[600px]">
          <div className="space-y-4 h-full flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" 
                alt="Bakery interior" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="h-1/3 rounded-2xl overflow-hidden border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop" 
                alt="Baking process" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-800 h-full">
            <img 
              src="https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=800&auto=format&fit=crop" 
              alt="Assorted pastries" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
