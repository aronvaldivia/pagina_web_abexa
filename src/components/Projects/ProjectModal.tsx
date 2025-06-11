import React from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    image: string;
    title: string;
    description: string;
    content: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  // Define specific content for each project
  const getProjectSpecificContent = (title: string) => {
    switch (title) {
      case 'Comentarios de operadores':
        return {
          impact: {
            title: 'Satisfacción del Personal',
            description: 'Mejorando las condiciones laborales y herramientas de trabajo para nuestros operadores.'
          },
          innovation: {
            title: 'Feedback Continuo',
            description: 'Sistema de retroalimentación en tiempo real para optimizar procesos operativos.'
          }
        };
      
      case 'Empresas Afiliadas':
        return {
          impact: {
            title: 'Crecimiento de Red',
            description: 'Expandiendo nuestra red de socios estratégicos para mejor cobertura nacional.'
          },
          innovation: {
            title: 'Alianzas Estratégicas',
            description: 'Creando sinergias con empresas líderes del sector transporte.'
          }
        };
      
      case 'Comentarios de Usuarios':
        return {
          impact: {
            title: 'Experiencia del Usuario',
            description: 'Mejorando continuamente la experiencia de viaje de nuestros pasajeros.'
          },
          innovation: {
            title: 'Escucha Activa',
            description: 'Implementando sugerencias de usuarios para innovar en nuestros servicios.'
          }
        };
      
      case 'Descubre lo nuevo':
        return {
          impact: {
            title: 'Transformación Digital',
            description: 'Revolucionando el transporte público con tecnología de última generación.'
          },
          innovation: {
            title: 'Proyectos Futuros',
            description: 'Desarrollando soluciones innovadoras para los desafíos del mañana.'
          }
        };
      
      default:
        return {
          impact: {
            title: 'Impacto',
            description: 'Mejorando la experiencia de transporte para miles de usuarios diariamente.'
          },
          innovation: {
            title: 'Innovación',
            description: 'Implementando tecnología de vanguardia en el sector del transporte público.'
          }
        };
    }
  };

  const specificContent = getProjectSpecificContent(project.title);

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl my-4 shadow-2xl transform transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Header Section with Full Background Image */}
            <div 
              className="relative h-48 rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative h-full flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Contenido Destacado</h4>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{project.content}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-blue-800 mb-2">{specificContent.impact.title}</h5>
                    <p className="text-sm text-gray-600">{specificContent.impact.description}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-blue-800 mb-2">{specificContent.innovation.title}</h5>
                    <p className="text-sm text-gray-600">{specificContent.innovation.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;