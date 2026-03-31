const treats = [
  {
    title: "Custom Cakes",
    desc: "Specialist in Birthday, Anniversary, and Wedding cakes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSALwynxf9NP5WR9Rm-wRouNopvEzXjEp_dU4xgBakpMpvkwmXEiIpefkb-GfQNtSiQ5wRvFyYiOdwkjs-lLOEeXhlZnXw_F6Kc8N3SC5clhe5gaQO7J7jdFyLb42JJFl0QBunbZfM4xeAUCO43f2lS86QFRmYM9tOsexRRmNpoBHWLV-TBkM1Uvk0pdYea3YUr139emQ5fkN_X6pevOv00jYcGX42B17VkjedzW0NM0uh4dxkHRXNm2fz-J8dr9NPO13OZG6PbnM"
  },
  {
    title: "Pastries & Cupcakes",
    desc: "Fluffy, creamy, and irresistible single-servings.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR4DWVxX9HkStLtQXgdBS_Zr7SUUBKJu9yJ4MzHEwXg8MDTX9PzOuzOosX98r4RW2x1pcHaD74Jww5_mBUvafJzYcvy1djQgL4JnzCLFGLrYPMW5SNh5cvNHEMatuUjXf256iAFZD-0eMEIK7JQyl8VNe8SKB5PRyVhmy8ieZwc4ik-M0wz8aTpF5CcJqirKlwpIlOYtZGKwT-DXuUYAhFyOFarLcz9_7XfJ91ceZwI8HGNlKGPtjVI-AROe33oq4W44oirOWKE_U"
  },
  {
    title: "Cookies & Biscuits",
    desc: "Crunchy, buttery, and perfect for your evening tea.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWQwhMWdKibkOHOwNEtv9S2JkH-3joXFDMf7tQGYpw2FIGvCSYlVHcWrjiFQ_JMJqLih29Mt_xiW2neVc_SSVWx3VFJMwL9zCiaVXEMynOVW5uVh9TUjUVEhsHHJpRLO-d5u4DVxPl8-nUlgZKB6FgzZqSMm9pGrUe1_PatJRx3t0Lht8U9_dy8QfY5bkVXoTIJuT6lzD_qFew5B2gM8wvQyTKljQ0mKKbXhiCGSZJaWPdSrhp6ERYfWnltFp9uBHZy9Hd3A3koYo"
  },
  {
    title: "Doughnuts & More",
    desc: "Glazed and filled treats for your sweet tooth.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBptfIXfGWKXzbAsJ6A0-xs-INtJ5ToS1u9_XJW6mrpOVar0FTnk8PCPmH-VJ4SPTABH9otIzX_T7t6DnvhBwPkAqbkeFgzVlR2aCXFIdzDV681Gs51qXBL8j-_p8Tlm7qrN6Y74xWsqCclmAv9v9AO4qxroFlA2pRlokDPLTKTLCFQ7f0clzy1qAP0d0stKGYTDpKicSpfdTSn4YCi6aGcto16VbNOgrxuILDO3JNb1lekILDrlx9-dVM9tdX_Vm9-Gwc6vjnC70"
  }
];

export default function Gallery() {
  return (
    <section id="work" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white">Our Sweet Treats</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Discover our daily selection of artisanal delights, crafted with the finest ingredients and a touch of magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treats.map((treat, index) => (
            <div 
              key={index} 
              className="group bg-brand-card rounded-xl overflow-hidden border border-zinc-800 hover:border-brand-red/50 transition-all duration-500 hover:-translate-y-2 shadow-lg"
            >
              <div className="h-64 overflow-hidden relative">
                {/* Dark overlay to blend bright images into the dark theme */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={treat.img} 
                  alt={treat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center relative">
                {/* Decorative top border on card content */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-red/50 group-hover:bg-brand-red transition-colors"></div>
                
                <h3 className="font-heading text-2xl text-white mb-3">{treat.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {treat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
