import { useState } from 'react';

import { motion } from 'framer-motion';

import {
  Send,
  Github,
  Linkedin,
  Instagram,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader,
} from 'lucide-react';

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  viewportOptions,
} from '../animations/variants';

import { sendContactMessage } from '../hooks/useApi';

/* =========================
    Social Links
========================== */

const socials = [
  {
    icon: Github,
    href: 'https://github.com/triptishri17',
    label: 'GitHub',
  },

  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/tripti-shrivastav-478b5b257',
    label: 'LinkedIn',
  },

  {
    icon: Instagram,
    href: 'https://instagram.com/tripti_shri_',
    label: 'Instagram',
  },

  {
    icon: Mail,
    href: 'shrivastavtripti5472@gmail.com',
    label: 'Email',
  },
];

const Contact = () => {

  /* =========================
      States
  ========================== */

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const [errorMsg, setErrorMsg] =
    useState('');

  /* =========================
      Handle Change
  ========================== */

  const handleChange = (e) => {

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* =========================
      Submit
  ========================== */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {

      await sendContactMessage(form);

      setStatus('success');

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (err) {

      setStatus('error');

      setErrorMsg(
        err.response?.data?.message ||
        'Something went wrong. Please try again.'
      );

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (

    <section
      id="contact"
      className="
        relative
        py-28
        overflow-hidden
      "
    >

      {/* =========================
          Background Effects
      ========================== */}

      <div className="blob w-80 h-80 bg-violet-500 top-0 left-0" />

      <div
        className="blob w-72 h-72 bg-indigo-500 bottom-0 right-0"
        style={{
          animationDelay: '2s',
        }}
      />

      {/* =========================
          Container
      ========================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================
            Heading
        ========================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="text-center mb-16"
        >

          <p
            className="
              text-violet-500
              dark:text-violet-400

              font-semibold
              tracking-[0.2em]
              uppercase
              text-sm
              mb-4
            "
          >
            Contact Me
          </p>

          <h2 className="section-title">
            Let's
            {' '}
            <span className="gradient-text">
              Work Together
            </span>
          </h2>

          <p className="section-subtitle">
            Have a project idea, freelance work,
            or collaboration opportunity?

            I’d love to hear from you.
          </p>
        </motion.div>

        {/* =========================
            Layout
        ========================== */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* =========================
              LEFT SIDE
          ========================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInLeft}
            className="space-y-6"
          >

            {/* Intro Card */}

            <div
              className="
                rounded-3xl
                p-8

                border
                border-black/10
                dark:border-white/10

                bg-white/70
                dark:bg-white/5

                backdrop-blur-xl
              "
            >

              <div className="mb-6">

                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl

                    bg-gradient-to-br
                    from-violet-500
                    to-indigo-500

                    flex
                    items-center
                    justify-center

                    text-3xl
                    shadow-lg
                    shadow-violet-500/20
                  "
                >
                  👩‍💻
                </div>
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-4

                  text-black
                  dark:text-white
                "
              >
                Hi, I'm Tripti 👋
              </h3>

              <p
                className="
                  text-gray-600
                  dark:text-gray-400
                  leading-relaxed
                  text-sm
                "
              >
                I'm a passionate MERN Stack Developer
                focused on building modern,
                scalable, and user-friendly web
                applications.

                Currently open for internships,
                freelance projects, and exciting
                collaborations.
              </p>
            </div>

            {/* Contact Info */}

            <div
              className="
                rounded-3xl
                p-6

                border
                border-black/10
                dark:border-white/10

                bg-white/70
                dark:bg-white/5

                backdrop-blur-xl

                space-y-5
              "
            >

              {/* Email */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl

                    bg-violet-500/10

                    border
                    border-violet-500/20

                    flex
                    items-center
                    justify-center
                  "
                >

                  <Mail
                    size={18}
                    className="text-violet-500"
                  />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mb-1
                    "
                  >
                    Email Address
                  </p>

                  <a
                    href="mailto:shrivastavtripti5472@gmail.com"
                    className="
                      text-sm
                      font-medium

                      text-black
                      dark:text-white

                      hover:text-violet-500
                      transition-colors
                    "
                  >
                    shrivastavtripti5472@gmail.com
                  </a>
                </div>
              </div>

              {/* Status */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl

                    bg-green-500/10

                    border
                    border-green-500/20

                    flex
                    items-center
                    justify-center
                  "
                >

                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mb-1
                    "
                  >
                    Availability
                  </p>

                  <p
                    className="
                      text-sm
                      font-medium
                      text-green-500
                    "
                  >
                    Available for work
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}

            <div
              className="
                rounded-3xl
                p-6

                border
                border-black/10
                dark:border-white/10

                bg-white/70
                dark:bg-white/5

                backdrop-blur-xl
              "
            >

              <p
                className="
                  text-sm
                  mb-5

                  text-gray-600
                  dark:text-gray-400
                "
              >
                Connect with me
              </p>

              <div className="flex gap-4 flex-wrap">

                {socials.map(
                  ({
                    icon: Icon,
                    href,
                    label,
                  }) => (

                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{
                        scale: 1.08,
                        y: -3,
                      }}
                      className="
                        w-12
                        h-12
                        rounded-2xl

                        border
                        border-black/10
                        dark:border-white/10

                        bg-white/60
                        dark:bg-white/5

                        text-gray-600
                        dark:text-gray-400

                        hover:text-violet-500
                        hover:border-violet-500/30

                        transition-all
                        duration-300

                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT SIDE FORM
          ========================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >

            <form
              onSubmit={handleSubmit}
              noValidate
              className="
                rounded-3xl
                p-8

                border
                border-black/10
                dark:border-white/10

                bg-white/70
                dark:bg-white/5

                backdrop-blur-xl

                space-y-5
              "
            >

              <div className="grid sm:grid-cols-2 gap-4">

                <div>

                  <label
                    className="
                      block
                      text-xs
                      font-medium
                      mb-2

                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>

                <div>

                  <label
                    className="
                      block
                      text-xs
                      font-medium
                      mb-2

                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Subject */}

              <div>

                <label
                  className="
                    block
                    text-xs
                    font-medium
                    mb-2

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  className="form-input"
                />
              </div>

              {/* Message */}

              <div>

                <label
                  className="
                    block
                    text-xs
                    font-medium
                    mb-2

                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input resize-none"
                  required
                />
              </div>

              {/* Success */}

              {status === 'success' && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    text-green-500

                    bg-green-500/10

                    border
                    border-green-500/20

                    rounded-2xl

                    px-4
                    py-3
                  "
                >

                  <CheckCircle size={16} />

                  Message sent successfully!
                </motion.div>
              )}

              {/* Error */}

              {status === 'error' && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    text-red-500

                    bg-red-500/10

                    border
                    border-red-500/20

                    rounded-2xl

                    px-4
                    py-3
                  "
                >

                  <AlertCircle size={16} />

                  {errorMsg}
                </motion.div>
              )}

              {/* Submit */}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={
                  status !== 'loading'
                    ? { scale: 1.02 }
                    : {}
                }
                whileTap={
                  status !== 'loading'
                    ? { scale: 0.98 }
                    : {}
                }
                className="
                  w-full
                  btn-primary
                  text-white

                  flex
                  items-center
                  justify-center
                  gap-2

                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >

                {status === 'loading' ? (
                  <>
                    <Loader
                      size={16}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />

                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;