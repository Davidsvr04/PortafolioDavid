import React from 'react';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Desarrollador Full Stack",
      company: "Tienda Medica",
      period: "Marzo 2025 - Septiembre 2025",
      location: "Medellín, Colombia",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web eficientes y escalables",
        "Implementación y despliegue de soluciones en Microsoft Azure",
        "Contenedorización de aplicaciones utilizando Docker",
        "Desarrollo de bots personalizados para automatización de procesos"
      ],
      technologies: ["React", "Node.js", "Microsoft Azure", "Docker", "JavaScript", "TypeScript"]
    },
    {
      id: 2,
      title: "Desarrollador Front-end",
      company: "Cielum Health",
      period: "Julio 2024 - Enero 2025",
      location: "Medellín, Colombia",
      description: [
        "Desarrollo de aplicativo web para automatización de procesos internos",
        "Reuniones con clientes para levantamiento de requerimientos",
        "Colaboración en documentación y estructura del código",
        "Implementación de metodologías ágiles (SCRUM)"
      ],
      technologies: ["Vue.js", "JavaScript", "HTML5", "CSS3", "SCRUM"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software, trabajando en proyectos reales 
            y colaborando con equipos multidisciplinarios.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg card-hover">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 mb-2 md:mb-0">
                        <h3 className="text-xl font-bold text-dark-900 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary-600 font-semibold mb-2">
                          <FiBriefcase size={16} />
                          <span>{experience.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <FiCalendar size={16} className="text-primary-500" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiMapPin size={16} className="text-primary-500" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-dark-600">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {experience.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;