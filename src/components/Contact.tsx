import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'david_viloria04@hotmail.com',
      href: 'mailto:david_viloria04@hotmail.com',
      color: 'text-red-600'
    },
    {
      icon: FiPhone,
      label: 'Teléfono',
      value: '301 6550801',
      href: 'tel:+573016550801',
      color: 'text-green-600'
    },
    {
      icon: FiMapPin,
      label: 'Ubicación',
      value: 'Medellín, Colombia',
      href: '#',
      color: 'text-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/david-viloria-1105ds/',
      color: 'hover:text-blue-600'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/Davidsvr04',
      color: 'hover:text-gray-900'
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:david_viloria04@hotmail.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Trabajemos <span className="gradient-text">Juntos</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría conocer tu idea 
            y discutir cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center space-x-2">
              <FiMessageSquare className="text-primary-600" />
              <span>Envíame un mensaje</span>
            </h3>

            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-medium">
                  ¡Mensaje enviado exitosamente! Te responderé pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-vertical"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-blue-600 hover:shadow-lg hover:scale-105'
                } text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-dark-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 group ${
                        info.href === '#' ? 'cursor-default' : 'hover:scale-105'
                      }`}
                    >
                      <div className={`w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300`}>
                        <Icon className={info.color} size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-dark-900">{info.label}</p>
                        <p className="text-dark-600">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-dark-900 mb-6">
                Sígueme en Redes
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-110 ${social.color}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
              <h4 className="font-bold text-dark-900 mb-3">
                ¿Prefieres una llamada?
              </h4>
              <p className="text-dark-600 text-sm leading-relaxed mb-4">
                También puedes contactarme directamente por teléfono. Estoy disponible 
                para discutir proyectos, oportunidades laborales o simplemente charlar 
                sobre tecnología.
              </p>
              <a
                href="tel:+573016550801"
                className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
              >
                <FiPhone size={16} />
                <span>301 6550801</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;