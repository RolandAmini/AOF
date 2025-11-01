"use client";
import React, { useState } from 'react';
import { Heart, Users, Droplets, BookOpen, Sprout, MapPin, Calendar, Target, ChevronRight, Filter } from 'lucide-react';
import Donation from '@/components/donation/Donation';
import Header from '@/components/layout/Header';
import Footer from '@/components/footer/Footer';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = [
    { name: 'Tous', icon: Target },
    { name: 'Santé', icon: Heart },
    { name: 'Éducation', icon: BookOpen },
    { name: 'Eau & Hygiène', icon: Droplets },
    { name: 'Agriculture', icon: Sprout },
    { name: 'Protection', icon: Users }
  ];

  const projects = [
    {
      id: 1,
      title: "Protection des Enfants Vulnérables",
      category: "Protection",
      image: "/at.jpg",
      location: "Goma, Nord-Kivu",
      beneficiaries: "50,000",
      description: "Programme de protection et d'accompagnement des enfants affectés par les conflits armés dans la région du Nord-Kivu.",
      objectives: [
        "Assurer la protection de 50,000 enfants",
        "Offrir un soutien psychosocial",
        "Réunifier les familles séparées",
        "Former les communautés à la protection de l'enfance"
      ]
    },
    {
      id: 2,
      title: "Santé Maternelle et Infantile",
      category: "Santé",
      image: "/act3.jpg",
      location: "Rutshuru, Nord-Kivu",
      beneficiaries: "100,000",
      description: "Amélioration de l'accès aux soins de santé maternelle et infantile dans les zones rurales du Nord-Kivu.",
      objectives: [
        "Réduire la mortalité maternelle de 30%",
        "Vacciner 80,000 enfants",
        "Former 200 sages-femmes",
        "Équiper 15 centres de santé"
      ]
    },
    {
      id: 3,
      title: "Éducation pour Tous",
      category: "Éducation",
      image: "/act2.jpg",
      location: "Masisi, Nord-Kivu",
      duration: "2024 - 2027",
      budget: "600,000 USD",
      status: "En cours",
      beneficiaries: "30,000",
      description: "Construction et réhabilitation d'écoles pour faciliter l'accès à l'éducation primaire dans les zones affectées par les conflits.",
      objectives: [
        "Construire 10 nouvelles écoles",
        "Former 300 enseignants",
        "Fournir des kits scolaires à 30,000 élèves",
        "Mettre en place des cantines scolaires"
      ]
    },
    {
      id: 4,
      title: "Eau Potable et Assainissement",
      category: "Eau & Hygiène",
      image: "/act1.jpg",
      location: "Beni, Nord-Kivu",
      beneficiaries: "75,000",
      description: "Installation de points d'eau potable et construction de latrines dans les camps de déplacés et villages isolés.",
      objectives: [
        "Installer 50 points d'eau",
        "Construire 200 latrines",
        "Former 100 comités d'hygiène",
        "Sensibiliser 75,000 personnes"
      ]
    },
    {
      id: 5,
      title: "Agriculture Résiliente",
      category: "Agriculture",
      image: "/bft.jpg",
      location: "Lubero, Nord-Kivu",
      status: "En cours",
      beneficiaries: "20,000",
      description: "Programme de soutien à l'agriculture durable et à la sécurité alimentaire des familles vulnérables.",
      objectives: [
        "Distribuer des semences à 5,000 familles",
        "Former 500 agriculteurs",
        "Créer 20 coopératives agricoles",
        "Améliorer la productivité de 40%"
      ]
    },
    {
      id: 6,
      title: "Lutte contre la Malnutrition",
      category: "Santé",
      image: "/ppl3.jpeg",
      location: "Beni, Nord-Kivu",
      status: "Planifié",
      beneficiaries: "40,000",
      description: "Programme de prévention et de traitement de la malnutrition aiguë chez les enfants de moins de 5 ans.",
      objectives: [
        "Dépister 40,000 enfants",
        "Traiter 5,000 cas de malnutrition",
        "Former 150 agents de santé",
        "Sensibiliser 10,000 mères"
      ]
    },
    {
      id: 7,
      title: "Alphabétisation des Adultes",
      category: "Éducation",
      image: "/act4.jpeg",
      location: "Goma, Nord-Kivu",
      duration: "2024 - 2026",
      budget: "300,000 USD",
      status: "En cours",
      beneficiaries: "15,000",
      description: "Programme d'alphabétisation fonctionnelle pour les femmes et les jeunes déscolarisés.",
      objectives: [
        "Alphabétiser 15,000 adultes",
        "Former 100 facilitateurs",
        "Créer 50 centres d'apprentissage",
        "Intégrer la formation professionnelle"
      ]
    },
    {
      id: 8,
      title: "Autonomisation des Femmes",
      category: "Protection",
      image: "/act2.jpg",
      location: "Rutshuru, Nord-Kivu",
      duration: "2023 - 2025",
      budget: "350,000 USD",
      status: "En cours",
      beneficiaries: "10,000",
      description: "Programme d'autonomisation économique et sociale des femmes victimes de violences basées sur le genre.",
      objectives: [
        "Former 5,000 femmes aux AGR",
        "Créer 100 groupes d'épargne",
        "Offrir un soutien psychosocial",
        "Sensibiliser sur les droits des femmes"
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getStatusColor = (status) => {
    return status === 'En cours' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700';
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-400 to-green-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-green-400 font-semibold text-sm mb-4">
              <Target className="w-5 h-5" />
              <span>Nos Interventions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Projets
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Découvrez l'ensemble de nos initiatives qui transforment positivement 
              les communautés du Nord-Kivu et créent un impact durable.
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

      {/* Statistiques globales */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">8</p>
              <p className="text-gray-600">Projets Actifs</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">340K+</p>
              <p className="text-gray-600">Bénéficiaires</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-red-600 mb-2">6</p>
              <p className="text-gray-600">Territoires</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-yellow-600 mb-2">3.9M</p>
              <p className="text-gray-600">Budget Total (USD)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filtrer par catégorie</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Liste des projets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 rounded-full font-semibold text-sm bg-white/90 text-gray-900">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Infos clés */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{project.beneficiaries} bénéficiaires</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{project.budget}</span>
                    </div>
                  </div>

                  {/* Objectifs */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Objectifs clés:</h4>
                    <ul className="space-y-1">
                      {project.objectives.slice(0, 2).map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <ChevronRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bouton */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <span>Voir les détails</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Donation />

     
    </div>
    <Footer />
    </>
  );
}