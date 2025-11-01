import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function FinancialAndInterventionSections() {
  const reports = [
    { year: '2024', type: 'Rapport Annuel', link: '#' },
    { year: '2023', type: 'Rapport Annuel', link: '#' },
    { year: '2023', type: 'État Financier', link: '#' },
    { year: '2022', type: 'Rapport Annuel', link: '#' },
    { year: '2022', type: 'État Financier', link: '#' },
    { year: '2022', type: 'Information Fiscale', link: '#' },
    { year: '2021', type: 'Rapport Annuel', link: '#' },
    { year: '2021', type: 'Information Fiscale', link: '#' },
    { year: '2021', type: 'État Financier', link: '#' },
  ];

  const interventionZones = [
    { name: 'Goma', province: 'Nord-Kivu' },
    { name: 'Rutshuru', province: 'Nord-Kivu' },
    { name: 'Masisi', province: 'Nord-Kivu' },
    { name: 'Beni', province: 'Nord-Kivu' },
    { name: 'Butembo', province: 'Nord-Kivu' },
    { name: 'Lubero', province: 'Nord-Kivu' },
  ];

  return (
    <>
      {/* Section Efficacité Financière */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Colonne Gauche - Graphique */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Cercle graphique */}
                <svg viewBox="0 0 400 400" className="w-full h-auto">
                  {/* Cercle de fond */}
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="60"
                  />
                  
                  {/* Segment rouge - Programme (84%) */}
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="60"
                    strokeDasharray="791 943"
                    strokeDashoffset="0"
                    transform="rotate(-90 200 200)"
                  />
                  
                  {/* Segment gris - Collecte de fonds (9%) */}
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="60"
                    strokeDasharray="85 943"
                    strokeDashoffset="-791"
                    transform="rotate(-90 200 200)"
                  />
                  
                  {/* Segment gris foncé - Gestion (7%) */}
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="60"
                    strokeDasharray="66 943"
                    strokeDashoffset="-876"
                    transform="rotate(-90 200 200)"
                  />
                  
                  {/* Texte central */}
                  <text
                    x="200"
                    y="180"
                    textAnchor="middle"
                    className="text-3xl font-bold fill-gray-800"
                    style={{ fontSize: '32px' }}
                  >
                    OÙ VOS DONS
                  </text>
                  <text
                    x="200"
                    y="220"
                    textAnchor="middle"
                    className="text-3xl font-bold fill-gray-800"
                    style={{ fontSize: '32px' }}
                  >
                    SONT UTILISÉS
                  </text>
                  
                  {/* Pourcentages */}
                  <text x="300" y="100" className="text-4xl font-bold fill-red-500" style={{ fontSize: '48px' }}>84%</text>
                  <text x="50" y="150" className="text-3xl font-bold fill-gray-500" style={{ fontSize: '36px' }}>9%</text>
                  <text x="50" y="250" className="text-3xl font-bold fill-gray-600" style={{ fontSize: '36px' }}>7%</text>
                </svg>

                {/* Légende */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    <span className="text-gray-700 font-medium">Services de Programme</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                    <span className="text-gray-700 font-medium">Collecte de fonds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    <span className="text-gray-700 font-medium">Gestion & Général</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite - Texte et Rapports */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
             Des Faits en chiffres
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Action of the Future a fait ses preuves en utilisant les dons de manière efficace et efficiente. Nous travaillons à maximiser la valeur de chaque dollar que nous recevons pour que{' '}
                <strong>moins de 7% de chaque dollar dépensé soit consacré aux coûts administratifs.</strong>
              </p>

              {/* Liste des rapports */}
              <div className="space-y-3 mt-8">
                {reports.map((report, index) => (
                  <a
                    key={index}
                    href={report.link}
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">{report.year} {report.type}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Zones d'Intervention */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Titre avec fond vert */}
          <div className="bg-green-100 rounded-3xl py-4 px-8 inline-block mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">
              Zones d'intervention
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Colonne Gauche - Carte */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {/* Carte de la RDC (illustration simplifiée) */}
                <div className="relative">
                  <svg viewBox="0 0 600 500" className="w-full h-auto">
                    {/* Contour RDC simplifié */}
                    <path
                      d="M 100 100 Q 150 80 200 90 L 300 80 Q 350 85 400 100 L 450 120 Q 480 150 490 200 L 500 280 Q 495 330 470 370 L 420 420 Q 380 440 330 445 L 200 440 Q 150 430 120 400 L 90 350 Q 80 300 85 250 L 90 180 Q 95 130 100 100 Z"
                      fill="#d1d5db"
                      stroke="#9ca3af"
                      strokeWidth="2"
                    />
                    
                    {/* Zone Nord-Kivu en vert */}
                    <ellipse
                      cx="420"
                      cy="180"
                      rx="60"
                      ry="80"
                      fill="#22c55e"
                      opacity="0.8"
                    />
                    
                    {/* Cercle de loupe */}
                    <circle
                      cx="420"
                      cy="180"
                      r="100"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      opacity="0.7"
                    />
                    
                    {/* Marqueurs de villes */}
                    <circle cx="410" cy="150" r="5" fill="#059669" />
                    <circle cx="430" cy="170" r="5" fill="#059669" />
                    <circle cx="405" cy="190" r="5" fill="#059669" />
                    <circle cx="425" cy="210" r="5" fill="#059669" />
                  </svg>
                  
                  {/* Texte "Nord-Kivu" */}
                  <div className="absolute top-1/3 right-1/4 text-green-700 font-bold text-lg">
                    Nord-Kivu
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite - Liste des zones */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos Territoires d'Intervention au Nord-Kivu
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Action of the Future intervient dans les principales zones du Nord-Kivu où les besoins humanitaires sont les plus critiques. Nous travaillons avec les communautés locales pour apporter des solutions durables.
              </p>

              {/* Liste des zones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interventionZones.map((zone, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <h4 className="font-bold text-gray-900 text-lg">{zone.name}</h4>
                    <p className="text-gray-600 text-sm">{zone.province}</p>
                  </div>
                ))}
              </div>

              {/* Statistiques */}
              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">+10
                        </p>
                    <p className="text-gray-700 text-sm">ans d'existence et d'actions
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">+17k</p>
                    <p className="text-gray-700 text-sm">enfants de -5ans soignés</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}