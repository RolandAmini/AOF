import React from 'react';
import { Users } from "lucide-react";
import { Heart,ChevronRight } from "lucide-react";
import Header from '@/components/layout/Header';
import Footer from '@/components/footer/Footer';

export default function OrganizationalChart() {
  const team = {
    board: {
      members: [
        {
          name: "Olivier BUHOLO",
          position: "Coordonnateur N.",
          photo: "/cn.jpg",
          color: "green"
        }
      ]
    },
    auditor: {
      name: "Dr Donatien NDAANE",
      photo: "/pm.png",
      position: "Program Manager",
      color: "gray"
    },
    directors: [
      {
        name: "Dr Patience UGEN",
        position: "Médecin Superviseur",
        photo: "/ms.png",
        color: "teal",
        team: [
          {
            name: "Grâce NSEBURA",
            position: "Pharmacienne",
            photo: "/ph.jpg",
            color: "orange"
          },
          {
            name: "Steven SHEANA",
            position: "Log Manager",
            photo: "/lm.jpg",
            color: "orange"
          }
        ]
      },
      {
        name: "ERIC ILUNGA M",
        position: "Chargé d'Admin et Finance",
        photo: "/af.jpg",
        color: "teal",
        team: [
          {
            name: "Merveille MUHONGYA",
            position: "Caissière Principale",
            photo: "/cp.jpg",
            color: "orange"
          },
          {
            name: "Alain MUBALAMA",
            position: "Responsable RH",
            photo: "/rh.jpg",
            color: "orange"
          }
        ]
      },
      {
        name: "Justin BONANE",
        position: "Ass CAF",
        photo: "/caf.jpg",
        color: "teal",
        team: [
          {
            name: "Gloria KYAVULIKIRA",
            position: "Ass Administrative",
            photo: "/asd.jpg",
            color: "orange"
          }
        ]
      },
      {
        name: "Josué NSII BAROKI",
        position: "Meal Manager",
        photo: "/mm.jpg",
        color: "teal",
        team: [
          {
            name: "Bientot",
            position: "Développeur",
            photo: "/im.jpg",
            color: "red"
          }
        ]
      }
    ]
  };

const getColorClasses = (color: string): string => {
  const colors: Record<string, string> = {
    red: 'border-red-500 bg-red-50',
    gray: 'border-gray-500 bg-gray-50',
    teal: 'border-teal-500 bg-teal-50',
    orange: 'border-orange-500 bg-orange-50'
  };
  return colors[color] || 'border-blue-500 bg-blue-50';
};

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center mb-16">
         
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Structure Organisationnelle
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Portés par un esprit jeune et ambitieux, ces personnes exceptionnels incarnent l’essence même de l’engagement altruiste. L’innovation, au cœur de leur mission, agit comme une force motrice qui les pousse à dépasser les limites conventionnelles afin d’améliorer la vie des plus vulnérables. Avec passion et dévouement, ils œuvrent chaque jour pour relever les défis d'accès aux soins de santé, condition de vie inacceptable.
Nous mettons notre expertise à profit pour appuyer les gouvernements et communautés à construire un système de santé adéquat et un accès universelle aux soins de santé.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          
          {/* CEO */}
          <div className="flex flex-col items-center mb-12">
            <div className={`relative border-4 ${getColorClasses(team.board.members[0].color)} rounded-full p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
              <img
                src={team.board.members[0].photo}
                alt={team.board.members[0].name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-xl text-gray-900">{team.board.members[0].name}</h3>
              <p className="text-sm text-gray-600 font-semibold">{team.board.members[0].position}</p>
            </div>
            
            {/* Ligne verticale */}
            <div className="w-0.5 h-16 bg-gray-400 my-4"></div>
          </div>

          {/* Auditeur Interne - Côté droit */}
          <div className="flex justify-center items-start mb-12 relative">
            <div className="w-1/2"></div>
            
            {/* Ligne horizontale vers l'auditeur */}
            <div className="absolute top-0 left-1/2 w-64 h-0.5 bg-gray-400"></div>
            <div className="absolute top-0 right-1/3 w-0.5 h-16 bg-gray-400"></div>
            
            <div className="w-1/2 flex justify-start pl-16">
              <div className="flex flex-col items-center">
                <div className={`relative border-4 ${getColorClasses(team.auditor.color)} rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <img
                    src={team.auditor.photo}
                    alt={team.auditor.position}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600 font-semibold">{team.auditor.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ligne horizontale pour les directeurs */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-5xl h-0.5 bg-gray-400 relative">
              {team.directors.map((_, index) => (
                <div
                  key={index}
                  className="absolute w-0.5 h-16 bg-gray-400 top-0"
                  style={{ left: `${(index + 1) * (100 / (team.directors.length + 1))}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Directeurs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {team.directors.map((director, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`relative border-4 ${getColorClasses(director.color)} rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <img
                    src={director.photo}
                    alt={director.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-bold text-sm text-gray-900">{director.name}</h4>
                  <p className="text-xs text-gray-600">{director.position}</p>
                </div>

                {/* Ligne vers l'équipe */}
                {director.team && director.team.length > 0 && (
                  <>
                    <div className="w-0.5 h-12 bg-gray-400 my-4"></div>
                    
                    {/* Ligne horizontale pour l'équipe */}
                    {director.team.length > 1 && (
                      <div className="w-full h-0.5 bg-gray-400 relative mb-4">
                        {director.team.map((_, teamIndex) => (
                          <div
                            key={teamIndex}
                            className="absolute w-0.5 h-8 bg-gray-400 top-0"
                            style={{ left: `${(teamIndex + 1) * (100 / (director.team.length + 1))}%` }}
                          ></div>
                        ))}
                      </div>
                    )}

                    {/* Membres de l'équipe */}
                    <div className="flex gap-4 justify-center flex-wrap">
                      {director.team.map((member, teamIndex) => (
                        <div key={teamIndex} className="flex flex-col items-center">
                          <div className={`relative border-4 ${getColorClasses(member.color)} rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          </div>
                          <div className="mt-2 text-center">
                            <h5 className="font-semibold text-xs text-gray-900">{member.name}</h5>
                            <p className="text-xs text-gray-500">{member.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          

        </div>
         {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Soutenez Nos Projets
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Chaque contribution fait la différence. Rejoignez-nous pour créer un impact durable 
            dans les communautés du Nord-Kivu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Heart className="w-5 h-5" />
              <span>Faire un don</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              <span>Devenir partenaire</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
    <Footer />
    </>
  );
}
