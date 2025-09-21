import React from 'react';
import { FiExternalLink, FiGithub, FiPlus } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestion de Finanzas - Proyecto Propio",
      description: "Aplicativo web desarrollado para la gestión de finanzas personales.",
      technologies: ["Vue.js", "JavaScript", "HTML5", "CSS3", "Node.js", "PostgreSQL"],
      isPlaceholder: true
    },
    {
      id: 2,
      title: "Plataforma E-commerce - Tienda Medica",
      description: "Aplicación web escalable para comercio electrónico con integración de pagos, gestión de inventarios y despliegue en la nube.",
      technologies: ["Vue.js", "JavaScript", "Node.js", "Microsoft Azure", "Docker", "PostgreSQL"],
      isPlaceholder: true
    },
    {
      id: 3,
      title: "Bot de Automatización",
      description: "Bot personalizado desarrollado para automatizar tareas repetitivas y optimizar procesos de negocio, mejorando la productividad del equipo.",
      technologies: ["Python", "Node.js", "APIs", "Docker"],
      isPlaceholder: true
    },
    {
      id: 4,
      title: "Landing Page para Tienda Deportiva",
      description: "Landing page atractiva y funcional para una tienda de productos deportivos, optimizada para SEO y con integración de formularios de contacto.",
      technologies: ["React", "HTML", "Tailwind CSS"],
      isPlaceholder: true
    },
    {
      id: 5,
      title: "Landing Page para Empresa de Chorizos",
      description: "Landing page atractiva y funcional para una empresa de chorizos, optimizada para SEO y con integración de formularios de contacto.",
      technologies: ["React", "HTML", "CSS"],
      isPlaceholder: true
    },
    {
      id: 6,
      title: "Aplicación Móvil Web",
      description: "PWA (Progressive Web App) con diseño responsive, funcionalidad offline y notificaciones push para mejorar la experiencia del usuario.",
      technologies: ["Vue.js", "PWA", "Service Workers", "IndexedDB"],
      isPlaceholder: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo Full Stack, 
            desde aplicaciones web hasta sistemas de automatización y APIs escalables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-200 card-hover overflow-hidden">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                {project.isPlaceholder ? (
                  <div className="text-center text-primary-600">
                    <FiPlus size={32} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">Imagen del proyecto</p>
                    <p className="text-xs text-gray-500">Próximamente</p>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.isPlaceholder ? (
                    <div className="flex space-x-4 w-full">
                      <button 
                        disabled
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed"
                      >
                        <FiExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </button>
                      <button 
                        disabled
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed"
                      >
                        <FiGithub size={16} />
                        <span className="text-sm">Código</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                        >
                          <FiExternalLink size={16} />
                          <span className="text-sm">Ver Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-dark-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                        >
                          <FiGithub size={16} />
                          <span className="text-sm">Código</span>
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-dark-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              Estoy siempre interesado en colaborar en proyectos desafiantes y innovadores. 
              Si tienes una idea o necesitas desarrollar una solución tecnológica, 
              ¡hablemos sobre cómo puedo ayudarte!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Iniciar Proyecto
            </button>
          </div>
        </div>

        {/* Note for placeholder projects */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            💡 Los enlaces a los proyectos se agregarán próximamente. 
            Los proyectos mostrados representan trabajo real desarrollado durante mi experiencia profesional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;