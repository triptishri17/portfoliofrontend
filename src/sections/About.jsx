import { motion } from 'framer-motion';
import { Code, Layers, Briefcase, Award } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from '../animations/variants';
import { stats } from '../data';

const iconMap = { code: Code, layers: Layers, briefcase: Briefcase, award: Award };

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left */}
        <motion.div variants={fadeInLeft}>
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <div className="space-y-4 text-gray-400 text-base leading-relaxed">
            <p>
              I'm <span className="text-white font-semibold">Tripti Shrivastava</span>, a passionate Full Stack
              Developer with expertise in the MERN stack. I love building elegant, high-performance web
              applications that solve real-world problems.
            </p>
            <p>
              My journey began with a curiosity about how websites work, and it has since evolved into a
              deep love for crafting end-to-end solutions — from pixel-perfect frontends to robust backend APIs.
            </p>
            <p>
              I'm currently expanding my skill set into <span className="text-violet-400 font-medium">Web3 and blockchain development</span>,
              exploring decentralized applications and smart contracts with Solidity.
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'Tailwind', 'JWT Auth', 'REST APIs', 'Web3', 'Redux'].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium text-violet-300 border border-violet-500/30 rounded-full bg-violet-500/10"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Stats */}
        <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Code;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="glass-dark p-6 rounded-2xl group hover:border-violet-500/40 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-all">
                  <Icon size={22} className="text-violet-400" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}

          {/* Extra card */}
          <motion.div
            variants={fadeInUp}
            custom={4}
            className="col-span-2 glass-dark p-5 rounded-2xl border border-violet-500/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <p className="text-gray-300 text-sm">
                Currently open to <span className="text-violet-400 font-semibold">full-time roles</span> and{' '}
                <span className="text-violet-400 font-semibold">freelance projects</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
