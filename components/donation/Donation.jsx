import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&h=900&fit=crop"
          alt="Community Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge vert en haut */}
        
        {/* Citation principale */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto mb-8">
         Contribuez à ce qu'un enfant soit dépisté, qu'une mère reçoive des soins ou qu'un jeune trouve une opportunité.
        </h2>

        {/* Bouton CTA */}
        <button className="inline-flex items-center gap-2 bg-red-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <ArrowRight className="w-5 h-5" />
          <span>Faire un don</span>
        </button>
      </div>

      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}