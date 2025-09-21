import React from 'react';
import { FiDownload, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary-600 font-medium text-lg">¡Hola! Soy</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight">
                David Santiago
                <span className="block gradient-text">Viloria Romero</span>
              </h1>
              <p className="text-xl md:text-2xl text-dark-600 font-medium">
                Desarrollador Full Stack
              </p>
            </div>
            
            <p className="text-lg text-dark-600 leading-relaxed max-w-2xl">
              Desarrollador Full Stack con experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web 
              escalables, seguras y orientadas al usuario. Estudiante de Ingeniería de Sistemas con sólidas habilidades 
              técnicas y experiencia práctica en proyectos reales.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-dark-600">
              <div className="flex items-center space-x-2">
                <FiMail className="text-primary-600" size={18} />
                <span>david_viloria04@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-primary-600" size={18} />
                <span>301 6550801</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-primary-600" size={18} />
                <span>Medellín, Colombia</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary flex items-center space-x-2">
                <FiDownload size={20} />
                <span>Descargar CV</span>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Contáctame
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/david-viloria-1105ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Davidsvr04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="mailto:david_viloria04@hotmail.com"
                className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary-400 to-blue-500 p-2">
                <div className="w-full h-full rounded-full bg-white p-4 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <img 
                      src="/FotoMia.jpg" 
                      alt="David Santiago Viloria Romero"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce-subtle">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-xl animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;