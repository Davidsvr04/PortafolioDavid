import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiBook, FiCode, FiFolder, FiMail } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: FiHome },
    { id: 'about', label: 'Sobre Mí', icon: FiUser },
    { id: 'experience', label: 'Experiencia', icon: FiBriefcase },
    { id: 'education', label: 'Educación', icon: FiBook },
    { id: 'skills', label: 'Habilidades', icon: FiCode },
    { id: 'projects', label: 'Proyectos', icon: FiFolder },
    { id: 'contact', label: 'Contacto', icon: FiMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              David Viloria
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;