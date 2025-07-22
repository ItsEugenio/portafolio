import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import VecindAppDialog from "./VecindAppDialog";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  technologies: Array<{
    name: string;
    icon: string;
    title: string;
  }>;
  features: string[];
  githubUrl?: string;
  isPrivate?: boolean;
  component?: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 'vecindapp',
    title: 'VecindApp',
    description: 'Plataforma web y móvil para gestión de acceso a residenciales. Incluye 3 aplicaciones React especializadas para residentes, administradores y guardias de seguridad.',
    tags: ['react', 'flutter', 'fullstack'],
    technologies: [
      { name: 'React', icon: 'skill-icons:react-dark', title: 'React' },
      { name: 'Flutter', icon: 'skill-icons:flutter-dark', title: 'Flutter' },
      { name: 'WebSockets', icon: 'logos:websocket', title: 'WebSockets' },
      { name: 'Shadcn/ui', icon: 'simple-icons:shadcnui', title: 'Shadcn/ui' },
      { name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark', title: 'Tailwind' }
    ],
    features: [
      'Notificaciones push personalizadas',
      'Integración con backend propio',
      'Gestión de accesos y reportes',
      'Mensajería comunitaria'
    ],
    component: <VecindAppDialog />
  },
  {
    id: 'trafficlly',
    title: 'Trafficlly',
    description: 'Aplicación web con monitoreo en tiempo real del flujo de personas. Visualizaciones en vivo mediante gráficas interactivas y comunicación WebSocket.',
    tags: ['react', 'fullstack'],
    technologies: [
      { name: 'React', icon: 'skill-icons:react-dark', title: 'React' },
      { name: 'WebSockets', icon: 'simple-icons:websocket', title: 'WebSockets' },
      { name: 'Charts.js', icon: 'simple-icons:chartdotjs', title: 'Charts.js' },
      { name: 'APIs', icon: 'material-symbols:api', title: 'APIs' }
    ],
    features: [
      'Monitoreo en tiempo real',
      'Visualizaciones del flujo por horario',
      'Integración con backend propio',
    ],
    githubUrl: 'https://github.com/ItsEugenio/trafficlly'
  },
  {
    id: 'erp-ventas',
    title: 'ERP de Ventas',
    description: 'Sistema ERP empresarial para Bitquark Systems. Incluye módulos CRUD, generación de reportes PDF y visualizaciones de productos e información comercial.',
    tags: ['angular', 'fullstack'],
    technologies: [
      { name: 'Angular', icon: 'skill-icons:angular-dark', title: 'Angular' },
      { name: 'Docker', icon: 'skill-icons:docker', title: 'Docker' },
      { name: 'APIs', icon: 'material-symbols:api', title: 'APIs' },
      { name: 'PDF', icon: 'mdi:file-pdf-box', title: 'PDF' }
    ],
    features: [
      'Módulos CRUD completos',
      'Generación de tickets PDF',
      'Filtros dinámicos',
      'Desplegado con Docker'
    ],
    isPrivate: true
  },
  {
    id: 'centinels-eye',
    title: 'Centinels Eye',
    description: 'Sistema de monitoreo de sensores en tiempo real. Comunicación WebSocket para seguimiento continuo y visualización de datos de sensores IoT.',
    tags: ['react', 'fullstack'],
    technologies: [
      { name: 'React', icon: 'skill-icons:react-dark', title: 'React' },
      { name: 'WebSockets', icon: 'simple-icons:websocket', title: 'WebSockets' },
      { name: 'IoT', icon: 'material-symbols:sensors', title: 'IoT' },
      { name: 'Real-time', icon: 'material-symbols:speed', title: 'Real-time' }
    ],
    features: [
      'Monitoreo de sensores IoT',
      'Comunicación WebSocket',
      'Visualización en tiempo real',
      'Optimización de APIs'
    ],
    githubUrl: 'https://github.com/ItsEugenio/FrontEndMultiC5'
  },
  {
    id: 'dashboard-cedh',
    title: 'Dashboard CEDH',
    description: 'Dashboard interactivo para la Comisión Estatal de Derechos Humanos de Chiapas. Visualización de datos institucionales con gráficas dinámicas.',
    tags: ['fullstack'],
    technologies: [
      { name: 'Laravel', icon: 'skill-icons:laravel-dark', title: 'Laravel' },
      { name: 'PHP', icon: 'skill-icons:php-dark', title: 'PHP' },
      { name: 'SQL Server', icon: 'simple-icons:microsoftsqlserver', title: 'SQL Server' },
      { name: 'Charts', icon: 'material-symbols:bar-chart', title: 'Charts' }
    ],
    features: [
      'Dashboard interactivo',
      'Gráficas dinámicas',
      'Filtros avanzados',
      'Stored procedures optimizados'
    ],
    isPrivate: true
  },
  {
    id: 'portfolio',
    title: 'Portfolio Personal',
    description: 'Portafolio personal desarrollado con Astro y componentes React. Diseño moderno, responsive y optimizado para rendimiento.',
    tags: ['react'],
    technologies: [
      { name: 'Astro', icon: 'skill-icons:astro', title: 'Astro' },
      { name: 'React', icon: 'skill-icons:react-dark', title: 'React' },
      { name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark', title: 'Tailwind' },
      { name: 'Shadcn/ui', icon: 'simple-icons:shadcnui', title: 'Shadcn/ui' }
    ],
    features: [
      'Diseño moderno y responsive',
      'Componentes interactivos',
    ],
    githubUrl: 'https://github.com/ItsEugenio/portafolio'
  }
];

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'react', label: 'React' },
  { key: 'angular', label: 'Angular' },
  { key: 'flutter', label: 'Flutter' }
];

const ProjectsFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimating(true);
    
    const timer = setTimeout(() => {
      if (activeFilter === 'all') {
        setVisibleProjects(projects);
      } else {
        setVisibleProjects(projects.filter(project => 
          project.tags.includes(activeFilter)
        ));
      }
      setIsAnimating(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const renderActionButton = (project: Project) => {
    if (project.component) {
      return project.component;
    }
    
    if (project.isPrivate) {
      return (
        <button 
          disabled
          className="w-full bg-gray-400 text-white text-xs px-4 py-2 rounded-md cursor-not-allowed flex items-center justify-center"
          title="Repositorio privado"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          Repositorio Privado
        </button>
      );
    }
    
    if (project.githubUrl) {
      return (
        <a 
          href={project.githubUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-md transition-colors flex items-center justify-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Ver Código
        </a>
      );
    }
    
    return null;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos <span className="text-blue-600 dark:text-blue-400">Destacados</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Una selección de proyectos que demuestran mi experiencia en desarrollo frontend y móvil
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button 
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={`transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className="transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: !isAnimating ? `fadeInUp 0.3s ease-out ${index * 0.1}s both` : undefined
              }}
            >
              <Card className="group h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech) => (
                      <div 
                        key={tech.name}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300" 
                        title={tech.title}
                      >
                        <Icon icon={tech.icon} width="20" height="20" />
                        <span className="text-xs font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="text-sm text-gray-600 dark:text-gray-400 mb-6 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    {renderActionButton(project)}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {visibleProjects.length === 0 && !isAnimating && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.935.477-5.291 1.291M6.5 9a11.5 11.5 0 1111 0m-11 0a11.5 11.5 0 1111 0M6.5 9H4a2 2 0 00-2 2v6a2 2 0 002 2h2.5"></path>
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No hay proyectos</h3>
            <p className="text-gray-600 dark:text-gray-400">No se encontraron proyectos con esa tecnología.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsFilter; 