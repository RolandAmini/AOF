"use client";


import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/footer/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

  const contactInfo = [
    {
      icon: MapPin,
      title: "Notre Adresse",
      content: "45, Avenue de l'Église, Kyeshero, Goma",
      subContent: "Nord-Kivu, RD Congo",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+243 99 876 5432",
      subContent: "+243 81 234 5678",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@actionofthefuture.org",
      subContent: "contact@actionofthefuture.org",
      color: "red"
    },
    {
      icon: Clock,
      title: "Heures d'Ouverture",
      content: "Lundi - Vendredi: 8h00 - 17h00",
      subContent: "Samedi: 9h00 - 13h00",
      color: "yellow"
    }
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', color: 'bg-blue-600' },
    { icon: Twitter, link: '#', color: 'bg-sky-500' },
    { icon: Instagram, link: '#', color: 'bg-pink-600' },
    { icon: Linkedin, link: '#', color: 'bg-blue-700' }
  ];
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    alert("✅ Merci pour votre message ! Nous vous répondrons bientôt.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-400 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-green-400 font-semibold text-sm mb-4">
              <MapPin className="w-5 h-5" />
              <span>Restez Connecté</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question, 
              partenariat ou opportunité de collaboration.
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

      {/* Cartes d'information */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-${info.color}-100 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 text-${info.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 text-sm font-medium">{info.content}</p>
                  <p className="text-gray-600 text-sm">{info.subContent}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section principale - Formulaire et Carte */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envoyez-nous un Message
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+243 99 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Objet de votre message"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}

                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Écrivez votre message ici..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le Message</span>
                </button>
              </div>
            </div>

            {/* Carte et Informations supplémentaires */}
            <div className="space-y-8">
              {/* Carte Google Maps */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.089!2d29.2283!3d-1.6794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0c3ab8741d8b%3A0x7c9f9b1f1c0c1c0c!2sKyeshero%2C%20Goma%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}

                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte de localisation - Goma, RDC"
                  ></iframe>
                </div>
              </div>

              {/* Informations complémentaires */}
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visitez Notre Bureau</h3>
                <p className="mb-6 text-blue-50">
                  Nous serions ravis de vous accueillir dans nos locaux à Goma. 
                  N'hésitez pas à prendre rendez-vous avant votre visite.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">45, Avenue de l'Église</p>
                      <p className="text-blue-50">Kyeshero, Goma, Nord-Kivu, RDC</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <p>+243 99 876 5432</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <p>info@actionofthefuture.org</p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-semibold mb-4">Suivez-nous</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.link}
                          className={`w-10 h-10 ${social.color} hover:opacity-80 rounded-full flex items-center justify-center transition-opacity`}
                          aria-label={`Suivez-nous sur ${Icon.name}`}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section FAQ rapide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Comment nous soutenir ?</h3>
                <p className="text-gray-600 text-sm">
                  Vous pouvez faire un don, devenir bénévole ou partenaire. Contactez-nous pour plus d'informations.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Besoin d'aide urgente ?</h3>
                <p className="text-gray-600 text-sm">
                  Pour toute urgence humanitaire, appelez notre ligne d'urgence 24/7 au +243 99 876 5432.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Partenariats ?</h3>
                <p className="text-gray-600 text-sm">
                  Nous sommes ouverts à des collaborations stratégiques. Envoyez-nous votre proposition par email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}