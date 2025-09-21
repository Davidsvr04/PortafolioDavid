import React, { useEffect, useRef, useState } from 'react';
import { FiCode, FiDatabase, FiTool, FiHeart } from 'react-icons/fi';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Lenguajes y Frameworks',
      icon: FiCode,
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'React', level: 88, color: 'from-cyan-400 to-cyan-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Node.js', level: 82, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'Python', level: 75, color: 'from-blue-600 to-yellow-500' },
      ]
    },
    {
      id: 'databases',
      title: 'Bases de Datos',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-blue-800' },
        { name: 'SQL Server', level: 70, color: 'from-red-500 to-red-700' },
      ]
    },
    {
      id: 'tools',
      title: 'Herramientas y DevOps',
      icon: FiTool,
      skills: [
        { name: 'Git', level: 85, color: 'from-orange-500 to-red-600' },
        { name: 'Microsoft Azure', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 65, color: 'from-yellow-500 to-orange-600' },
      ]
    },
    {
      id: 'soft',
      title: 'Habilidades Blandas',
      icon: FiHeart,
      skills: [
        { name: 'Trabajo en equipo', level: 95, color: 'from-pink-400 to-pink-600' },
        { name: 'Responsabilidad', level: 95, color: 'from-purple-400 to-purple-600' },
        { name: 'Proactividad', level: 90, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Adaptabilidad', level: 90, color: 'from-teal-400 to-teal-600' },
        { name: 'Resolución de problemas', level: 88, color: 'from-emerald-400 to-emerald-600' },
        { name: 'Comunicación efectiva', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Liderazgo', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Creatividad', level: 85, color: 'from-rose-400 to-rose-600' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Un conjunto diverso de habilidades técnicas y blandas que me permiten crear 
            soluciones completas y trabajar efectivamente en equipos multidisciplinarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-dark-900">{skill.name}</span>
                        <span className="text-sm font-semibold text-primary-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className={`skill-progress bg-gradient-to-r ${skill.color} ${
                            isVisible ? 'animate-pulse' : ''
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 border border-primary-100">
            <h3 className="text-xl font-bold text-dark-900 mb-4">
              Siempre Aprendiendo
            </h3>
            <p className="text-dark-600 leading-relaxed max-w-3xl mx-auto">
              La tecnología evoluciona constantemente, y yo también. Me mantengo actualizado 
              con las últimas tendencias, herramientas y mejores prácticas del desarrollo de software. 
              Mi curiosidad y pasión por aprender me impulsan a explorar nuevas tecnologías y 
              metodologías que puedan mejorar la calidad y eficiencia de mis proyectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;