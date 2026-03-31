import { Settings } from 'lucide-react';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-zinc-100 p-6 selection:bg-brand-red selection:text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-red opacity-20 blur-2xl rounded-full scale-150"></div>
            <Settings className="w-24 h-24 text-brand-red animate-[spin_5s_linear_infinite] relative z-10" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-heading mb-4 animate-blur-in">
          Maintenance
        </h1>
        
        <div className="w-16 h-1 bg-brand-red mx-auto mb-8 rounded-full animate-blur-in animation-delay-200"></div>
        
        <p className="text-xl md:text-2xl text-brand-muted leading-relaxed font-sans animate-blur-in animation-delay-400">
          This site is temporarily under maintenance. Please check back later.
        </p>

        <div className="mt-16 pt-8 border-t border-zinc-800/50 animate-blur-in animation-delay-400">
          <p className="text-xs tracking-widest text-zinc-600 uppercase font-medium">
            24/7 Bakery
          </p>
        </div>
      </div>
    </div>
  );
}
