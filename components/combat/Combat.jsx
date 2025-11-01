import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StrategiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const strategies = [
    {
      image: "/ppl.jpeg",
      title: "Nous prenons en charge les enfants malnutris avec une attention particulière et nous œuvrons activement à promouvoir les bonnes pratiques de l’ANJE-U, afin de garantir à chaque enfant un accès à une alimentation adéquate et à des soins qui favorisent leur croissance et leur développement"
    },
    {
      image: "/ppl2.jpg",
      title: "Offrir des soins de santé de qualité aux populations vulnérables. Notre engagement inébranlable dans la couverture santé universelle nous pousse à aller dans les fins font pour rendre accessibles les soins de santé et renforcer le système de santé. "
    },
    {
      image: "/ppl3.jpeg",
      title: "La sécurité alimentaire est une priorité absolue pour nous. Nous travaillons en étroite collaboration avec les communautés locales pour renforcer leur résilience face aux crises alimentaires et assurer un accès durable à une alimentation nutritive en quantité et en qualité."
    },
    {
      image: "/ppl5.jpeg",
      title: "Nous croyons en la paix et en la réconciliation comme fondements essentiels du développement durable. Notre travail de consolidation de la paix vise à promouvoir le dialogue intercommunautaire, à résoudre les conflits de manière constructive et à renforcer les institutions locales de gouvernance et de médiation."
    },
    {
      image: "/ppl6.png",
      title: "L’accès à l’eau potable, à des installations sanitaires adéquates et à des pratiques d’hygiène appropriées est essentiel pour prévenir la propagation des maladies et protéger la santé publique. Notre programme WASH vise à fournir des services d’eau, d’hygiène et d’assainissement de qualité aux populations déplacées et vulnérables."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % strategies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + strategies.length) % strategies.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % strategies.length;
      cards.push(strategies[index]);
    }
    return cards;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 overflow-hidden">
      {/* Vague décorative en haut */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto transform rotate-180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* En-tête */}
        <div className="mb-12">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nos Stratégies
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Boutons de navigation */}
          <div className="absolute top-0 right-0 flex gap-3 z-30 -mt-20">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleCards().map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={strategy.image}
                    alt={strategy.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {strategy.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs de pagination (optionnel) */}
          <div className="flex justify-center gap-2 mt-8">
            {strategies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à la slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image décorative en arrière-plan */}
      <div className="absolute top-20 right-0 w-1/3 h-96 opacity-10 pointer-events-none hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}