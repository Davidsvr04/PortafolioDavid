import React from 'react';
import { FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">David Viloria</h3>
            <p className="text-gray-400">Desarrollador Full Stack</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Experiencia
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Proyectos
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contacto
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p className="flex items-center space-x-1">
              <span>© {currentYear} David Santiago Viloria Romero. Hecho con</span>
              <FiHeart className="text-red-500" size={16} />
              <span>usando React & Tailwind CSS</span>
            </p>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span>Volver arriba</span>
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;