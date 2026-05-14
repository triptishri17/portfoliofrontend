import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { fadeInUp, fadeInRight, staggerContainer } from '../animations/variants';
import { downloadResume } from '../hooks/useApi';

const socials = [
  { icon: Github, href: 'https://github.com/triptishri17', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tripti-shrivastav-478b5b257', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/tripti_shri_', label: 'Instagram' },
  { icon: Mail, href: 'shrivastavtripti5472@gmail.com', label: 'Email' },
];

const Hero = () => {
  const handleDownload = async () => {
    try {
      await downloadResume();
    } catch {
      // Fallback: open resume URL directly
      window.open('/api/resume/download', '_blank');
    }
  };

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-violet-600 top-20 -left-32" />
      <div className="blob w-80 h-80 bg-indigo-600 bottom-20 -right-20" style={{ animationDelay: '3s' }} />
      <div className="blob w-64 h-64 bg-purple-700 top-1/2 left-1/3" style={{ animationDelay: '1.5s' }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Tripti</span>
              <br />
              <span className="text-white">Shrivastava</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 font-medium mb-6 h-10">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'Web3 Enthusiast',
                  2000,
                  'React.js Developer',
                  2000,
                  'Node.js Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-violet-400 font-semibold"
              />
            </motion.div>

            {/* Intro */}
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate full-stack developer specializing in the MERN stack, building scalable, 
              high-performance web applications. Currently exploring the exciting world of Web3 
              and blockchain development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary text-white flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowDown size={16} />
              </motion.button>

              <motion.button
                onClick={handleDownload}
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-gray-600 text-sm">Find me on</span>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin-slow"
                style={{ animationDuration: '20s' }}
              />
              {/* Inner ring */}
              <div
                className="absolute inset-8 rounded-full border border-indigo-500/20 animate-spin-slow"
                style={{ animationDuration: '15s', animationDirection: 'reverse' }}
              />

              {/* Center avatar */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-violet-600/30 to-indigo-600/30 border border-violet-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👩‍💻</div>
                  <div className="text-violet-300 font-semibold text-sm">Full Stack</div>
                  <div className="text-gray-400 text-xs">Developer</div>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'React', top: '5%', left: '40%', delay: 0 },
                { label: 'Node.js', top: '50%', left: '-5%', delay: 0.5 },
                { label: 'MongoDB', top: '75%', left: '30%', delay: 1 },
                { label: 'Web3', top: '40%', left: '82%', delay: 1.5 },
                { label: 'Express', top: '15%', left: '70%', delay: 0.8 },
              ].map(({ label, top, left, delay }) => (
                <motion.div
                  key={label}
                  className="absolute glass px-3 py-1.5 text-xs font-semibold text-violet-300"
                  style={{ top, left }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3 + delay, repeat: Infinity, delay }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs">Scroll down</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
