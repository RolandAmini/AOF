import React from 'react';
import { Heart, Target, Users, TrendingUp, CheckCircle, ArrowRight, Activity, Stethoscope, Baby } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/footer/Footer';

export default function HealthFocusPage() {
  const statistics = [
    { number: '100K+', label: 'Bénéficiaires', icon: Users },
    { number: '15', label: 'Centres de Santé', icon: Activity },
    { number: '200', label: 'Agents formés', icon: Stethoscope },
    { number: '85%', label: 'Taux de réussite', icon: TrendingUp }
  ];

  const programs = [
    {
      title: 'Santé Maternelle',
      icon: Heart,
      description: 'Amélioration de l\'accès aux soins prénataux et postnataux pour les femmes enceintes.',
      achievements: [
        'Réduction de 30% de la mortalité maternelle',
        '5,000 accouchements assistés par an',
        'Formation de 80 sages-femmes',
        '10 maternités équipées'
      ]
    },
    {
      title: 'Santé Infantile',
      icon: Baby,
      description: 'Programmes de vaccination et de suivi nutritionnel pour les enfants de 0 à 5 ans.',
      achievements: [
        '50,000 enfants vaccinés annuellement',
        'Dépistage de 20,000 cas de malnutrition',
        'Traitement de 95% des cas identifiés',
        '30 unités nutritionnelles fonctionnelles'
      ]
    },
    {
      title: 'Lutte contre les Maladies',
      icon: Stethoscope,
      description: 'Prévention et traitement du paludisme, de la tuberculose et autres maladies endémiques.',
      achievements: [
        'Distribution de 100,000 moustiquaires',
        'Traitement de 15,000 cas de paludisme',
        'Sensibilisation de 200,000 personnes',
        'Réduction de 40% des cas de tuberculose'
      ]
    }
  ];

  const initiatives = [
    {
      title: 'Centres de Santé Mobiles',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      description: 'Des cliniques mobiles pour atteindre les communautés isolées et les camps de déplacés.'
    },
    {
      title: 'Formation du Personnel',
      image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&h=600&fit=crop',
      description: 'Programmes de formation continue pour les agents de santé communautaires.'
    },
    {
      title: 'Approvisionnement Médical',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop',
      description: 'Fourniture de médicaments essentiels et d\'équipements médicaux aux centres de santé.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-400 to-green-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-red-200 font-semibold text-sm mb-4">
              <Heart className="w-5 h-5" />
              <span>Our Focus</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Santé & Nutrition
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Nous œuvrons pour améliorer l'accès aux soins de santé de qualité et 
              combattre la malnutrition dans les communautés vulnérables du Nord-Kivu.
            </p>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <p className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programmes Principaux */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Programmes de Santé
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des interventions ciblées pour améliorer la santé maternelle, infantile et communautaire.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {program.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {program.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives Spéciales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Initiatives Spéciales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Impact */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Target className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Notre Impact en 2024
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-red-600 mb-2">30%</p>
                  <p className="text-gray-700">Réduction de la mortalité maternelle</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-red-600 mb-2">50K</p>
                  <p className="text-gray-700">Enfants vaccinés</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-red-600 mb-2">95%</p>
                  <p className="text-gray-700">Cas de malnutrition traités</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-red-600 mb-2">200K</p>
                  <p className="text-gray-700">Personnes sensibilisées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Soutenez Notre Mission de Santé
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Votre contribution peut sauver des vies et améliorer la santé de milliers de personnes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
            >
              <Heart className="w-5 h-5" />
              <span>Faire un don</span>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              <span>Voir nos projets</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}