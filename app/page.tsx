
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Donation from '@/components/donation/Donation';
import Combat from '@/components/combat/Combat';
import Chiffres from '@/components/chiffres/Chiffres';
import Partner from '@/components/partner/Partner';
import Footer from '@/components/footer/Footer';

import { FaFish, FaLeaf, FaAward, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Vérifier si c'est la première visite dans cette session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Si déjà visité, pas de loading
      setIsLoading(false);
    } else {
      // Première visite, afficher le loading avec progression
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Attendre un peu avant de masquer le loading
            setTimeout(() => {
              setIsLoading(false);
              sessionStorage.setItem('hasVisited', 'true');
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, []);

  const services = [
    {
      image: '/act1.jpeg',
      icon: FaFish,
      title: 'Nutrition',
      description: 'Nous prenons en charge les enfants malnutris avec une attention particulière et nous œuvrons activement à promouvoir les bonnes pratiques de l’ANJE-U, afin de garantir à chaque enfant un accès à une alimentation adéquate et à des soins qui favorisent leur croissance et leur développement.',
    },
    {
      image: '/act2.jpg',
      icon: FaAward,
      title: 'Santé',
      description: 'Offrir des soins de santé de qualité aux populations vulnérables. Notre engagement inébranlable dans la couverture santé universelle nous pousse à aller dans les fins font pour rendre accessibles les soins de santé et renforcer le système de santé. ',
    },
    {
      image: '/act4.jpeg',
      icon: FaLeaf,
      title: 'Sécal alimentaire',
      description: 'La sécurité alimentaire est une priorité absolue pour nous. Nous travaillons en étroite collaboration avec les communautés locales pour renforcer leur résilience face aux crises alimentaires et assurer un accès durable à une alimentation nutritive en quantité et en qualité. AOF valorise la production des aliments de complément et intrants nutritionnels.',
    },
  ];

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0EA5E9] via-[#06B6D4] to-[#10B981]">
        {/* Logo avec animation */}
        <div className="relative mb-8 animate-fade-in">
          <div className="absolute inset-0 blur-3xl bg-white/30 rounded-full animate-pulse"></div>
          <Image
            src="/images/logo.png"
            alt="Alaska Fisheries Logo"
            width={250}
            height={100}
            className="relative z-10 animate-scale-in"
            priority
          />
        </div>

        {/* Texte de chargement */}
        <div className="mb-8 text-center animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Alaska Fisheries
          </h2>
          <p className="text-white/90 text-lg font-medium">
            Premium Sustainable Seafood
          </p>
        </div>

        {/* Barre de progression */}
        <div className="w-64 md:w-80 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Pourcentage */}
        <p className="mt-4 text-white font-semibold text-lg">
          {progress}%
        </p>

        {/* Animation de points */}
        <div className="flex gap-2 mt-6">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      </div>
    );
  }

  // Page principale après le loading
  return (
    <>
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
    

<section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#1E293B]">
  {/* Motif de fond optionnel */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Colonne gauche - Contenu texte */}
      <div className="text-white space-y-6 animate-slide-in-left">
        {/* Badge Welcome */}
       

        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
         Découvrez comment {' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#10B981]">
          nos projets
          </span>
          ,sauvent des vies et redonnent espoir.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
          Au Nord-Kivu, la crise humanitaire met en danger des millions de femmes et d’enfants. Face à cette urgence, AOF et ses partenaires mènent des actions vitales.
        </p>

        {/* Bouton CTA */}
        <div className="pt-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#059669] hover:to-[#0891B2] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span>Lire plus</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Colonne droite - Image circulaire */}
      <div className="relative lg:block hidden animate-slide-in-right">
        {/* Cercle de fond avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/20 to-[#0EA5E9]/20 rounded-full blur-3xl scale-110"></div>
        
        {/* Bordure circulaire avec gradient */}
        <div className="relative rounded-full p-2 bg-gradient-to-br from-[#10B981] via-[#06B6D4] to-[#0EA5E9]">
          <div className="rounded-full overflow-hidden aspect-square shadow-2xl">
            <Image
              src="/afia.png"
              alt="Alaska Fisheries Team"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Hexagones décoratifs (optionnel) */}
        <div className="absolute top-10 right-10 w-20 h-20 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" className="text-[#10B981]">
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-5 w-16 h-16 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" className="text-[#0EA5E9]">
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Image mobile - Version responsive */}
      <div className="lg:hidden relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-br from-[#10B981] to-[#0EA5E9]">
          <Image
            src="/afia.png"
            alt="Alaska Fisheries Team"
            width={600}
            height={400}
            className="object-cover w-full"
            priority
          />
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Services Section */}
        <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div key={index} className="relative">
            {/* Onglet arrondi en haut */}
            <div className="absolute -top-4 left-8 right-8 h-8 bg-gray-300 rounded-t-3xl z-0"></div>
            
            {/* Carte principale */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/tm1.jpg"
                  alt="About Alaska Fisheries"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Qui nous sommes
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                 AOF est une organisation non gouvernementale de développement basée en République Démocratique du Congo. Depuis sa création en 2014, elle s'est engagée à contribuer à la matérialisation de l'agenda de développement durable. Sa mission principale est d’initier des actions de développement durable pour un avenir où chaque personne compte pour chacun et compte sur son environnement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AOF au cœur de la réponse humanitaire dans le contexte agité à l’Est de la République Démocratique du Congo au Nord-Kivu
Ursule, symbole d’espoir dans une région en proie à l’insécurité et à la malnutrition aigüe et chronique
AOF au Front pour répondre à la Crise humanitaire dans l’Est de la RDC
                </p>
                <Link
                  href="/aboutus"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-green-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Lire plus
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/act3.jpg"
                  alt="OceanGuard Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-4">
                 Ce que nous faisons
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                 Nous agissons le plus vite possible en cas de catastrophe naturelle et où une crise humanitaire; Construisons la résilience avec les populations touchées et bâtissons l'avenir pour un monde juste et équitable.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Agir pour Sauver</h3>
                    <p className="text-gray-700">
                      OceanGuard is a strategic initiative to ensure the long-term health of our oceans. The project supports habitat restoration, sustainable gear innovation, and community education programs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Agir pour Construire</h3>
                    <p className="text-gray-700">
                      The project focuses on marine habitat restoration, fisherman training, bycatch reduction technology, and ecosystem monitoring.
                    </p>
                  </div>
                    <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-green-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  lire plus
                  <FaArrowRight />
                </Link>
                </div>
              </div>
            </div>
            
          </div>
          
        </section>

        {/* Event Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/itm2.jpg"
                    alt="Sustainable Seafood Day"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-4">
               Santé
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                 Notre engagement dans le secteur de la santé est d'assurer l'offre de soins de santé primaire de qualité (organisation des cliniques mobiles, appuyer le système de santé, les structures, approvisionner les médicaments, équipements et matériels médicaux, l'offre des soins santé mentale et prise en charge des cas de traumatisme, etc), assurer les soins de santé secondaire dans les structures de référence, se rassurer de la disponibilité des prestataires qualifiés et améliorer les infrastructures d'offre des soins.
                </p>
                
                <div className="bg-primary/5 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Event Highlights</h3>
                  <p className="text-gray-700">
                    Facility tours, cooking demonstrations, sustainability workshops, and networking sessions.
                  </p>
                </div>
                
                <Link
                  href="/sante"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-green-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  lire plus
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Donation />
        <Combat />
        <Chiffres />
        <Partner/>
        <Footer />
      </main>

    
    </>
  );
}