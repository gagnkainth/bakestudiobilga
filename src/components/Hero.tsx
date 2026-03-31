export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2000&auto=format&fit=crop" 
          alt="Delicious pastry with powdered sugar" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay to make text readable and blend edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-script text-white leading-tight mb-6 drop-shadow-lg animate-blur-in">
            Fresh & <br />
            <span className="text-brand-red">Delicious</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-lg font-sans animate-blur-in animation-delay-200">
            Experience the magic of artisanal baking. Handcrafted pastries, cakes, and treats made with love and the finest ingredients.
          </p>

          <a href="#contact" className="inline-block bg-brand-red hover:bg-brand-red-hover text-white font-bold py-4 px-10 rounded-sm text-lg transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-blur-in animation-delay-400">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
