"use client";

import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email soumis:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Colonne 1 - Logo et Description */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                <img
                  src="/action.png"
                  alt="AOF Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
            Agir aujourd'hui pour l'avenir
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Menue</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-blue-100 hover:text-white hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-100 hover:text-white hover:underline transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="text-blue-100 hover:text-white hover:underline transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-100 hover:text-white hover:underline transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-blue-100">
                  Avenue de la Paix, Goma, Nord-Kivu, RD Congo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@aof.org" className="text-blue-100 hover:text-white hover:underline">
                  info@actionofthefuture.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+243998765432" className="text-blue-100 hover:text-white hover:underline">
                  +243 99 876 5432
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos récents articles</h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
             Restez informés sur notre travail et notre engagement en lisant nos articles les plus récents. Explorez les histoires, les réussites et les défis qui façonnent notre action humanitaire en République démocratique du Congo.
            </p>
            
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  onClick={handleSubmit}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="S'abonner"
                >
                  <ArrowRight className="w-5 h-5 text-blue-900" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Barre de copyright */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Action of the Future. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}