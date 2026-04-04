import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <span className="font-script text-4xl text-white block">Bake Studio Bilga</span>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Bringing the authentic taste of artisanal baking to your table. Experience magic in every bite with our handcrafted pastries and cakes.
            </p>

          </div>





          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6 font-semibold tracking-wide">Contact</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-zinc-500 mt-0.5 flex-shrink-0" />
                <span className="leading-snug">Mistry Chana Ram Road, near Pipli Sahib Gurdwara, Bilga, Punjab 144036</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-zinc-500 flex-shrink-0" />
                <span>+919915559192</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-zinc-500 flex-shrink-0" />
                <a href="mailto:bakestudiobilga@gmail.com" className="hover:text-brand-red transition-colors">bakestudiobilga@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom border & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Bake Studio Bilga. All rights reserved.</p>
          <p className="text-zinc-600 text-sm font-script text-xl font-medium">Crafted with passion</p>
        </div>

      </div>
    </footer>
  );
}
