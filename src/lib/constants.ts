export const PERSONAL_INFO = {
  name: "Eugenio Gordillo",
  title: "Front-end Developer",
  email: "itseugenio.dev@gmail.com",
  description: "Desarrollador apasionado por crear experiencias digitales excepcionales con React, Angular y tecnologías modernas",
  profileImage: "https://avatars.githubusercontent.com/u/111914875?v=4&size=200",
  github: "https://github.com/ItsEugenio",
  linkedin: "https://linkedin.com/in/eugenio-gordillo",
  website: "https://eugenio-gordillo.dev"
};

export const NAVIGATION_LINKS = [
  {
    name: "Inicio",
    href: "#hero",
    id: "hero"
  },
  {
    name: "Sobre mí",
    href: "#about",
    id: "about"
  },
  {
    name: "Proyectos",
    href: "#projects",
    id: "projects"
  },
  {
    name: "Habilidades",
    href: "#skills",
    id: "skills"
  },
  {
    name: "Experiencia",
    href: "#experience",
    id: "experience"
  },
  {
    name: "Contacto",
    href: "#contact",
    id: "contact"
  }
];

export const SKILLS = {
  frontend: [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Angular", level: 85, color: "bg-red-500" },
    { name: "TypeScript", level: 88, color: "bg-blue-600" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "HTML5", level: 95, color: "bg-orange-500" },
    { name: "CSS3", level: 90, color: "bg-blue-400" },
    { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
    { name: "SCSS/Sass", level: 80, color: "bg-pink-500" }
  ],
  tools: [
    { name: "Git", level: 85, color: "bg-gray-600" },
    { name: "Webpack", level: 75, color: "bg-blue-300" },
    { name: "Vite", level: 80, color: "bg-purple-500" },
    { name: "Node.js", level: 70, color: "bg-green-500" },
    { name: "npm/yarn", level: 85, color: "bg-red-400" },
    { name: "Jest", level: 75, color: "bg-orange-400" },
    { name: "Cypress", level: 70, color: "bg-gray-700" }
  ],
  design: [
    { name: "Figma", level: 80, color: "bg-purple-600" },
    { name: "Adobe XD", level: 75, color: "bg-pink-400" },
    { name: "Responsive Design", level: 95, color: "bg-green-400" },
    { name: "UI/UX Principles", level: 85, color: "bg-indigo-500" }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico desarrollada con React y TypeScript",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    github: "https://github.com/ItsEugenio/ecommerce-platform",
    demo: "https://ecommerce-demo.eugenio-gordillo.dev",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con Angular y Firebase",
    image: "/projects/task-manager.jpg",
    technologies: ["Angular", "Firebase", "RxJS", "Material Design"],
    github: "https://github.com/ItsEugenio/task-manager",
    demo: "https://tasks.eugenio-gordillo.dev",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard del clima con integración de APIs meteorológicas",
    image: "/projects/weather.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    github: "https://github.com/ItsEugenio/weather-dashboard",
    demo: "https://weather.eugenio-gordillo.dev",
    featured: false
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Senior Front-end Developer",
    duration: "2022 - Presente",
    description: "Desarrollo de aplicaciones web complejas con React y TypeScript. Liderazgo técnico en proyectos de gran escala.",
    achievements: [
      "Mejoró el rendimiento de la aplicación en un 40%",
      "Implementó sistema de design tokens",
      "Mentoría a desarrolladores junior"
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"]
  },
  {
    id: 2,
    company: "Digital Agency",
    position: "Front-end Developer",
    duration: "2020 - 2022",
    description: "Desarrollo de sitios web y aplicaciones para diversos clientes usando Angular y React.",
    achievements: [
      "Desarrolló más de 15 sitios web responsivos",
      "Implementó metodologías ágiles",
      "Optimizó SEO y performance"
    ],
    technologies: ["Angular", "React", "SCSS", "WordPress"]
  },
  {
    id: 3,
    company: "Startup Tech",
    position: "Junior Front-end Developer",
    duration: "2019 - 2020",
    description: "Primer rol profesional desarrollando interfaces de usuario y aprendiendo tecnologías modernas.",
    achievements: [
      "Completó bootcamp de desarrollo web",
      "Contribuyó a 5 proyectos principales",
      "Aprendió frameworks modernos"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js"]
  }
];

export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: "+34 123 456 789",
  location: "Madrid, España",
  timezone: "CET (UTC+1)",
  availability: "Disponible para proyectos freelance",
  socialLinks: {
    github: PERSONAL_INFO.github,
    linkedin: PERSONAL_INFO.linkedin,
    twitter: "https://twitter.com/ItsEugenio",
    instagram: "https://instagram.com/itseugenio.dev"
  }
};

export const HERO_CONTENT = {
  greeting: "¡Hola! Soy",
  name: PERSONAL_INFO.name,
  title: PERSONAL_INFO.title,
  description: PERSONAL_INFO.description,
  ctaButtons: {
    primary: {
      text: "Ver CV",
      href: "/cv/eugenio-gordillo-cv.pdf",
      download: true
    },
    secondary: {
      text: "Contactar",
      href: `mailto:${PERSONAL_INFO.email}?subject=Contacto desde portafolio&body=Hola Eugenio, me gustaría ponerme en contacto contigo...`
    }
  }
};

export const ANIMATIONS = {
  durations: {
    fast: 300,
    normal: 500,
    slow: 800
  },
  delays: {
    stagger: 200,
    section: 400
  },
  easings: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
}; 