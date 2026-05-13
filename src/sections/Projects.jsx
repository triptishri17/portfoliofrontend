import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { staggerContainer, fadeInUp, viewportOptions } from '../animations/variants';
import { projects } from '../data';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Web3'];

const ProjectCard = ({ project, i }) => (
  <motion.div
    layout
    variants={fadeInUp}
    custom={i}
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -8 }}
    className="glass-dark rounded-2xl overflow-hidden group border border-white/5 hover:border-violet-500/30 transition-all duration-300"
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
      {project.featured && (
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-violet-500/90 text-white text-xs font-medium">
          <Star size={10} fill="white" />
          Featured
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 text-sm font-medium transition-all"
        >
          <Github size={15} />
          Code
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-white flex items-center justify-center gap-2 text-sm"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        ) : (
          <span className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gray-800/50 text-gray-600 text-sm cursor-not-allowed">
            Private
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="blob w-80 h-80 bg-purple-700 bottom-20 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeInUp}>
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase text-center mb-3">
            Portfolio
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                  : 'border border-white/10 text-gray-400 hover:border-violet-500/30 hover:text-violet-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/tripti"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
