import React from 'react';
import { FiCalendar, FiMapPin, FiBook, FiAward } from 'react-icons/fi';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: 'completed' | 'in-progress';
  description?: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas",
      institution: "Instituto Tecnológico Metropolitano",
      period: "Agosto 2025 - Actual",
      location: "Medellín, Colombia",
      status: 'in-progress',
      description: "Profundizando conocimientos en arquitectura de software, algoritmos avanzados y gestión de proyectos tecnológicos."
    },
    {
      id: 2,
      degree: "Tecnología en Desarrollo de Software",
      institution: "Instituto Tecnológico Metropolitano",
      period: "2022 - Junio 2025",
      location: "Medellín, Colombia",
      status: 'completed',
      description: "Formación integral en desarrollo de software, bases de datos, metodologías ágiles y arquitectura de aplicaciones."
    },
    {
      id: 3,
      degree: "Bachillerato",
      institution: "Instituto Vicarial Jesus Maestro",
      period: "2016 - 2021",
      location: "Medellín, Colombia",
      status: 'completed',
      description: "Educación media con énfasis en matemáticas y ciencias, sentando las bases para mi carrera en tecnología."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Formación <span className="gradient-text">Académica</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Mi trayectoria educativa que ha forjado mi base técnica y profesional 
            en el campo de la tecnología y el desarrollo de software.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>

            {education.map((item, index) => (
              <div key={item.id} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                  item.status === 'in-progress' 
                    ? 'bg-green-500 animate-pulse' 
                    : 'bg-primary-500'
                }`}></div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg card-hover">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <FiBook className="text-primary-600" size={20} />
                          <h3 className="text-xl font-bold text-dark-900">
                            {item.degree}
                          </h3>
                          {item.status === 'in-progress' && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                              En Curso
                            </span>
                          )}
                          {item.status === 'completed' && (
                            <FiAward className="text-green-500" size={18} />
                          )}
                        </div>
                        <p className="text-lg font-semibold text-primary-600 mb-2">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <FiCalendar size={16} className="text-primary-500" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiMapPin size={16} className="text-primary-500" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-dark-600 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-dark-900 mb-4">
              Compromiso con el Aprendizaje Continuo
            </h3>
            <p className="text-dark-600 leading-relaxed">
              Mi formación académica se complementa con el aprendizaje autodidacta constante, 
              manteniéndome actualizado con las últimas tecnologías y metodologías de desarrollo. 
              Creo firmemente en la educación continua como pilar fundamental del crecimiento profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;