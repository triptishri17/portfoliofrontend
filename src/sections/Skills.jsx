import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOptions } from '../animations/variants';
import { skills } from '../data';

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Web3'];

const Skills = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 relative">
      {/* Blob */}
      <div className="blob w-72 h-72 bg-indigo-600 top-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeInUp}>
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase text-center mb-3">
            What I Know
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        {/* Filter tabs */}
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

        {/* Skills Grid */}
        <motion.div
          key={active}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -5 }}
              className="glass-dark p-5 rounded-2xl group hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold text-sm">{skill.name}</span>
                <span className="text-violet-400 text-sm font-bold">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-2">
                <span className="text-xs text-gray-500 capitalize">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
