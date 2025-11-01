// src/components/layout/Header.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaBars, 
  FaTimes, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter,
  FaChevronDown,
  FaSearch,
  FaArrowRight
} from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/aboutus', label: 'About' },
    { 
      label: 'Our Focus',
      dropdown: [
        { href: '/sante', label: 'Santé & Nutrition' },
        { href: '/innovation', label: 'Sécal' },
        { href: '/community', label: 'Peace Building' },
         { href: '/community', label: 'Wash' },
          { href: '/community', label: 'Environment' },
      ]
    },
    { href: '/team', label: 'Our Team' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar - Bande bleue/verte avec adresse et réseaux sociaux */}
  <div className="bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#10B981] text-white py-2.5 px-4">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-center md:text-left">
    
    {/* Adresse + contact */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center md:justify-start gap-2">
      <div className="flex items-center gap-1">
        <FaMapMarkerAlt className="text-white flex-shrink-0" />
        <span className="font-medium">45, De l'Eglise, Kyeshero, Goma-RDC</span>
      </div>
      <span className="font-medium sm:ml-3">+243 998 069 783</span>
      <span className="font-medium sm:ml-3">aof@actionofthefuture.org</span>
    </div>

    {/* Réseaux Sociaux */}
    <div className="flex items-center justify-center gap-3">
      <span className="font-medium hidden sm:inline">Suivez-nous :</span>
      <div className="flex gap-3">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/80 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/80 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={16} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/80 transition-colors"
          aria-label="Facebook"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/80 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter size={16} />
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Main Navigation - Navbar blanche */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/action.png"
                alt="Alaska Fisheries Logo"
                width={160}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  {link.dropdown ? (
                    // Menu avec dropdown
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-1 text-gray-700 hover:text-[#0EA5E9] font-medium text-[15px] transition-colors duration-300 py-2"
                      >
                        {link.label}
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="py-2">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0EA5E9]/10 hover:to-[#10B981]/10 hover:text-[#0EA5E9] transition-all duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Menu simple
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#0EA5E9] font-medium text-[15px] transition-colors duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side - Search + CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search Icon */}
              <button
                className="p-2 text-gray-700 hover:text-[#0EA5E9] transition-colors duration-300"
                aria-label="Search"
              >
                <FaSearch size={18} />
              </button>

              {/* CTA Button avec style Melian */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white px-6 py-3 rounded-full font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 group"
              >
                Join With Us
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#0EA5E9] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-[600px] mt-4' : 'max-h-0'
            }`}
          >
            <ul className="flex flex-col gap-2 pb-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between text-gray-700 hover:text-[#0EA5E9] font-medium py-3 px-4 hover:bg-gray-50 rounded-lg transition-all duration-200"
                      >
                        {link.label}
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isDropdownOpen ? 'max-h-96 mt-2' : 'max-h-0'
                      }`}>
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-600 hover:text-[#0EA5E9] py-2 px-8 hover:bg-gray-50 rounded-lg transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-700 hover:text-[#0EA5E9] font-medium py-3 px-4 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              
              {/* Mobile CTA Button */}
              <li className="mt-4 px-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Join With Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
