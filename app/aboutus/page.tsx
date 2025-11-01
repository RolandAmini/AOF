
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/footer/Footer';
import { FaUsers, FaHandshake, FaBullhorn, FaArrowRight } from 'react-icons/fa';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsLoading(false);
    } else {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
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
      image: '/aboutus.jpg',
      icon: FaUsers,
      title: 'Développement Communautaire',
      description: 'Nous promouvons l\'autonomisation des communautés en les impliquant dans l\'identification des défis et la mise en œuvre de solutions. Nos projets intégrés encouragent l\'appropriation, la responsabilité et des progrès mesurables.',
    },
    {
      image: '/bft.jpg',
      icon: FaHandshake,
      title: 'Collaboration Stratégique',
      description: 'Grâce à des partenariats avec des institutions gouvernementales, des organismes de recherche et la société civile, nous co-créons des interventions durables dans la santé, l\'éducation et la justice environnementale.',
    },
    {
      image: '/images/innovation.jpg',
      icon: FaBullhorn,
      title: 'Plaidoyer et Sensibilisation',
      description: 'Nous mobilisons les décideurs, les communautés et les médias à travers des campagnes ciblées, des dialogues politiques et des programmes de sensibilisation pour amplifier les voix des groupes marginalisés.',
    },
  ];

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
        <div className="relative mb-8 animate-fade-in">
          <div className="absolute inset-0 blur-3xl bg-white/30 rounded-full animate-pulse"></div>
          <Image
            src="/action.png"
            alt="Action of the Future Logo"
            width={250}
            height={100}
            className="relative z-10 animate-scale-in"
            priority
          />
        </div>

        <div className="mb-8 text-center animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Action of the Future
          </h2>
          <p className="text-white/90 text-lg font-medium">
            Ensemble pour un Avenir Meilleur
          </p>
        </div>

        <div className="w-64 md:w-80 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      
      <main className="pt-0">
 {/* About Section - Two Column Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/aboutus.jpg"
                  alt="À propos d'Action of the Future"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  À Propos de Nous
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Action of the Future est une organisation non gouvernementale établie dans la région du Nord-Kivu, République Démocratique du Congo. Notre objectif est d'autonomiser, promouvoir, renforcer et s'engager dans des programmes de développement communautaire qui génèrent un changement positif au niveau local.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nous nous concentrons sur la Santé, l'Éducation, l'Environnement & Changement Climatique, l'Égalité des Genres, et les Moyens de Subsistance. Nos programmes sont conçus avec une méthodologie d'implémentation collaborative, garantissant l'inclusion, la participation et un impact mesurable pour tous.
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/bft.jpg"
                  alt="Projet Protection des Enfants"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Projet Protection des Enfants
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  En collaboration avec le Ministère de la Santé et des partenaires internationaux, Action of the Future met en œuvre le Projet Protection des Enfants pour répondre au fardeau croissant de la malnutrition et des maladies infantiles au Nord-Kivu.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      À propos du projet
                    </h3>
                    <p className="text-gray-700">
                      Ce projet est une intervention stratégique visant à améliorer la détection précoce, le diagnostic, le traitement et la sensibilisation communautaire, avec un accent sur les régions à forte prévalence de malnutrition.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Activités Clés
                    </h3>
                    <p className="text-gray-700">
                      Le projet se concentre sur le dépistage néonatal, la formation du personnel de santé, l'éducation communautaire et le renforcement des systèmes. L'objectif est d'améliorer le diagnostic précoce et d'assurer un traitement rapide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Régions d'Implémentation
                    </h3>
                    <p className="text-gray-700">
                      Le projet opère dans les zones les plus touchées du Nord-Kivu. L'objectif est de dépister plus de 50 000 nouveau-nés et enfants de moins de cinq ans pour assurer une détection précoce.
                    </p>
                  </div>
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
                <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/ppl6.png"
                    alt="Journée de Sensibilisation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Journée Mondiale de la Santé 2025 – Sensibilisation & Dépistage
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  Rejoignez-nous ! Action of the Future organise un événement spécial pour sensibiliser, promouvoir le dépistage précoce et autonomiser les familles touchées. Unissons nos forces avec les communautés, les professionnels de santé et les défenseurs.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Points Forts de l'Événement
                  </h3>
                  <p className="text-gray-700">
                    Dépistage communautaire, conférences santé, marches de sensibilisation et sessions de soutien pour les familles et les aidants.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Public Cible
                  </h3>
                  <p className="text-gray-700">
                    Familles, jeunes, professionnels de santé et leaders communautaires de toutes les régions du Nord-Kivu.
                  </p>
                </div>
                
                <Link
                  href="/sante"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
                >
                  En savoir plus
                  <FaArrowRight />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}