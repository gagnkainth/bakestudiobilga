import { Clock, ChefHat, Coffee } from 'lucide-react';

export default function Features() {
  return (
    <section id="about" className="py-24 md:min-h-screen flex items-center bg-brand-card relative overflow-hidden border-y border-zinc-800">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 md:pr-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white italic">
                Midnight Cravings? <br />
                <span className="text-brand-red not-italic">We've got you covered.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                Open 24 Hours for Dine-in, Drive-through, and Delivery. Whenever hunger strikes, we are here to satisfy your sweet tooth with freshly baked goodness.
              </p>
            </div>

            {/* Mini Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-zinc-800/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 border border-brand-red/20">
                  <ChefHat size={24} className="text-brand-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">Master Bakers</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Crafted by experts with years of experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 border border-brand-red/20">
                  <Coffee size={24} className="text-brand-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">Fresh Daily</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Baked fresh every single morning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image & Floating Badge */}
          <div className="relative w-full max-w-md mx-auto md:max-w-none md:w-5/12 lg:w-1/2 mt-8 md:mt-0">
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden relative border border-zinc-800 shadow-2xl">
              <div className="absolute inset-0 bg-brand-darker/30 mix-blend-multiply z-10 transition-all duration-500 hover:bg-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" 
                alt="Dark chocolate cake" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating 24/7 Badge */}
            <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 z-20">
              <div className="absolute inset-0 bg-brand-red blur-[40px] opacity-30 rounded-full"></div>
              <div className="relative bg-brand-darker border border-zinc-800 p-6 md:p-8 rounded-full flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 shadow-2xl">
                <Clock size={32} className="text-brand-red mb-1 md:mb-2 md:w-10 md:h-10" />
                <span className="font-heading text-2xl md:text-3xl font-bold text-white">24/7</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
