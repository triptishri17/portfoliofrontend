import { motion } from 'framer-motion';

import {
  Code,
  Layers,
  Briefcase,
  Award,
} from 'lucide-react';

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOptions,
} from '../animations/variants';

/* ─────────────────────────────────────────────
   STATS DATA
───────────────────────────────────────────── */

const stats = [
  {
    icon: 'briefcase',
    value: '6+',
    label: 'Months Experience',
  },

  {
    icon: 'layers',
    value: '4+',
    label: 'Projects Completed',
  },

  {
    icon: 'award',
    value: '5+',
    label: 'Certificates Earned',
  },

  {
    icon: 'code',
    value: '14+',
    label: 'Technologies',
  },
];

const iconMap = {
  code: Code,
  layers: Layers,
  briefcase: Briefcase,
  award: Award,
};

/* ─────────────────────────────────────────────
   ABOUT COMPONENT
───────────────────────────────────────────── */

const About = () => (
  <section
    id="about"
    className="
      relative
      py-28
      overflow-hidden
    "
  >
    {/* Background Blur */}
    <div className="blob w-80 h-80 bg-violet-700 top-10 left-0 opacity-20" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT SIDE */}
        <motion.div variants={fadeInLeft}>

          <p
            className="
              text-violet-400
              font-semibold
              text-sm
              tracking-[0.2em]
              uppercase
              mb-4
            "
          >
            About Me
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Building Modern
            {' '}
            <span className="gradient-text">
              Digital Experiences
            </span>
          </h2>

          <div
            className="
              space-y-5
              text-gray-400
              text-base
              leading-relaxed
            "
          >

            <p>
              I'm
              {' '}
              <span className="text-white font-semibold">
                Tripti Shrivastava
              </span>
              , a MERN Stack Developer focused on building
              scalable, modern, and user-friendly web applications.
            </p>

            <p>
              I enjoy creating full-stack applications with beautiful
              frontend interfaces, secure backend systems, REST APIs,
              authentication systems, and responsive user experiences.
            </p>

            <p>
              Over the past
              {' '}
              <span className="text-violet-400 font-semibold">
                6 months
              </span>
              , I have worked on multiple real-world projects including
              weather dashboards, portfolio websites, and management systems.
            </p>

            <p>
              I’m continuously learning new technologies and currently
              exploring
              {' '}
              <span className="text-violet-400 font-semibold">
                Web3, blockchain development, and advanced backend architecture
              </span>
              .
            </p>

          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-3 mt-8">

            {[
              'React.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Tailwind CSS',
              'JavaScript',
              'Next.js',
              'Redux',
              'JWT Auth',
              'REST APIs',
              'Framer Motion',
              'Git & GitHub',
              'Web3',
              'Solidity',
            ].map((tech) => (

              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  font-medium

                  bg-violet-500/10
                  text-violet-300

                  border
                  border-violet-500/20

                  hover:bg-violet-500/20
                  transition-all
                  duration-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeInRight}
          className="grid grid-cols-2 gap-5"
        >

          {stats.map((stat, i) => {

            const Icon =
              iconMap[stat.icon] || Code;

            return (

              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="
                  glass-dark
                  p-7
                  rounded-3xl

                  border
                  border-white/10

                  group
                  transition-all
                  duration-300

                  hover:border-violet-500/30
                  hover:shadow-xl
                  hover:shadow-violet-500/10
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl

                    bg-violet-500/10

                    border
                    border-violet-500/20

                    flex
                    items-center
                    justify-center

                    mb-5

                    group-hover:bg-violet-500/20
                    transition-all
                  "
                >

                  <Icon
                    size={24}
                    className="text-violet-400"
                  />
                </div>

                <div
                  className="
                    text-4xl
                    font-bold
                    gradient-text
                    mb-2
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    text-gray-400
                    text-sm
                  "
                >
                  {stat.label}
                </div>

              </motion.div>
            );
          })}

          {/* Availability Card */}
          <motion.div
            variants={fadeInUp}
            custom={5}
            className="
              col-span-2

              glass-dark
              rounded-3xl

              p-6

              border
              border-violet-500/20
            "
          >

            <div className="flex items-center gap-3">

              <div className="relative">

                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30" />
              </div>

              <p
                className="
                  text-gray-300
                  text-sm
                  leading-relaxed
                "
              >
                Currently available for
                {' '}
                <span className="text-violet-400 font-semibold">
                  internships,
                </span>
                {' '}
                <span className="text-violet-400 font-semibold">
                  freelance projects,
                </span>
                {' '}
                and
                {' '}
                <span className="text-violet-400 font-semibold">
                  full-time opportunities
                </span>
                .
              </p>

            </div>

          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;