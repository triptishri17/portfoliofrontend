
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

import {
  staggerContainer,
  fadeInUp,
  viewportOptions,
} from '../animations/variants';

/* ─────────────────────────────────────────────
   PROJECTS DATA
───────────────────────────────────────────── */

const projects = [
  {
    id: 1,

    title: 'SkyCast Weather App',

    description:
      'Modern premium weather dashboard with real-time weather updates, current location support, dark/light mode, and responsive UI.',

    image: 'skyCast.png',

    tech: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'OpenWeather API',
      'Node.js',
    ],

    github:
      'https://github.com/triptishri17',

    live:
      'https://skyfrontend-alpha.vercel.app/',

    featured: true,
  },

  {
    id: 2,

    title: 'Library Management System',

    description:
      'Full-stack library management system with authentication, role-based access, book management, and responsive modern UI.',

    image: 'librarymannagement.png',

    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],

    github:
      'https://github.com/triptishri17',

    live:
      'https://library-x5qw.vercel.app/',

    featured: true,
  },
];

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -10 }}
    className="
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all duration-300
      hover:border-violet-500/30
      hover:shadow-2xl
      hover:shadow-violet-500/10
      group
    "
  >
    {/* Image */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-full
          object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

      {project.featured && (
        <div
          className="
            absolute
            top-4
            right-4
            flex
            items-center
            gap-1
            px-3
            py-1.5
            rounded-full
            bg-violet-600/90
            text-white
            text-xs
            font-medium
            shadow-lg
          "
        >
          <Star size={12} fill="white" />
          Featured
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-7">
      <h3
        className="
          text-2xl
          font-bold
          text-white
          mb-3
          group-hover:text-violet-300
          transition-colors
        "
      >
        {project.title}
      </h3>

      <p
        className="
          text-gray-400
          leading-relaxed
          mb-6
        "
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-7">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1
              rounded-lg
              text-xs
              font-medium
              bg-violet-500/10
              text-violet-300
              border border-violet-500/20
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            py-3
            rounded-2xl
            border border-white/10
            text-gray-300
            hover:border-violet-500/40
            hover:text-violet-300
            transition-all duration-300
          "
        >
          <Github size={18} />
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            py-3
            rounded-2xl
            bg-violet-600
            hover:bg-violet-500
            text-white
            transition-all duration-300
            shadow-lg shadow-violet-500/20
          "
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        py-28
        overflow-hidden
      "
    >
      {/* Background Blur */}
      <div className="blob w-80 h-80 bg-violet-700 top-10 left-10 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p
            className="
              text-violet-400
              font-semibold
              tracking-[0.2em]
              uppercase
              text-sm
              mb-4
            "
          >
            Portfolio
          </p>

          <h2 className="section-title">
            Featured{' '}
            <span className="gradient-text">
              Projects
            </span>
          </h2>

          <p className="section-subtitle">
            Some of my best full-stack and frontend projects
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

