import React from 'react';
import { Handshake, Globe, Heart, Award } from 'lucide-react';

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: "Ils soutiennent notre combat",
      icon: Handshake,
      color: "blue",
      partners: [
        {
      
          logo: "https://sante.gouv.cd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-min-sante.173d2afd.png&w=256&q=75",
          description: "Fonds des Nations Unies pour l'enfance"
        },
        {
          
          logo: "https://www.unocha.org/themes/custom/common_design_subtheme/img/logos/ocha-lockup-blue.svg",
          description: "Organisation Mondiale de la Santé"
        },
        {
        
          logo: "https://www.unicef.org/drcongo/sites/unicef.org.drcongo/files/styles/logo/public/French_4.png.webp?itok=8F5lTvz0https://www.unicef.org/drcongo/sites/unicef.org.drcongo/files/styles/logo/public/French_4.png.webp?itok=8F5lTvz0https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/UNICEF_Logo.svg/320px-UNICEF_Logo.svg.png",
          description: "Haut Commissariat des Nations Unies pour les réfugiés"
        },
        {
        
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/World_Vision_Logo.svg/320px-World_Vision_Logo.svg.png",
          description: "Organisation humanitaire chrétienne"
        }
      ]
    },
   
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        badge: 'bg-blue-100 text-blue-700',
        icon: 'text-blue-600',
        border: 'border-blue-200'
      },
      green: {
        badge: 'bg-green-100 text-green-700',
        icon: 'text-green-600',
        border: 'border-green-200'
      },
      red: {
        badge: 'bg-red-100 text-red-700',
        icon: 'text-red-600',
        border: 'border-red-200'
      },
      yellow: {
        badge: 'bg-yellow-100 text-yellow-700',
        icon: 'text-yellow-600',
        border: 'border-yellow-200'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-400 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-green-400 font-semibold text-sm mb-4">
              <Heart className="w-5 h-5" />
              <span>Collaboration & Partenariat</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Partenaires
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ensemble, nous créons un impact durable dans les communautés du Nord-Kivu. 
              Nos partenaires partagent notre vision d'un avenir meilleur pour tous.
            </p>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="https://sante.gouv.cd/"
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

      {/* Statistiques */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">+350k</p>
              <p className="text-gray-600">personnes touchées</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">15</p>
              <p className="text-gray-600">zones de santé impactées</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-red-600 mb-2">+5</p>
              <p className="text-gray-600">millions mobilisés</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-yellow-600 mb-2">10M+</p>
              <p className="text-gray-600">Bénéficiaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections des partenaires par catégorie */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {partnerCategories.map((category, catIndex) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={catIndex} className="mb-20">
                {/* Titre de la catégorie */}
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-16 h-16 ${colorClasses.badge} rounded-full flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                {/* Grille des partenaires */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.partners.map((partner, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${colorClasses.border} group hover:-translate-y-2`}
                    >
                      {/* Logo */}
                      <div className="h-40 bg-gray-50 flex items-center justify-center p-6">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Informations */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-green-900 via-green-400 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Devenez Notre Partenaire
          </h2>
      
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Chez AOF, nous soutenons des causes liées à la nutrition et à la santé pour améliorer le bien-être du couple MERE-ENFANT en particulier et de tous en général. Nous travaillons avec toutes les personnes physiques et morales des bonnes fois pour offrir les soins de santé de qualité.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>Contactez-nous</span>
  
          </a>
        </div>
      </section>
    </div>
  );
}