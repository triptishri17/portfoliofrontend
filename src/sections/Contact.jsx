import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, Twitter, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, viewportOptions } from '../animations/variants';
import { sendContactMessage } from '../hooks/useApi';

const socials = [
  { icon: Github, href: 'https://github.com/tripti', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Linkedin, href: 'https://linkedin.com/in/tripti', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Instagram, href: 'https://instagram.com/tripti', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Twitter, href: 'https://x.com/tripti', label: 'X/Twitter', color: 'hover:text-sky-400' },
  { icon: Mail, href: 'mailto:tripti@example.com', label: 'Email', color: 'hover:text-violet-400' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="blob w-72 h-72 bg-violet-700 top-10 left-10" />
      <div className="blob w-64 h-64 bg-indigo-600 bottom-10 right-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeInUp}>
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase text-center mb-3">
            Get in Touch
          </p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInLeft}
            className="space-y-6"
          >
            <div className="glass-dark p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl mb-2">Let's build something great together!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm currently open to full-time roles and exciting freelance projects. Whether you have a 
                complex web app in mind or need a landing page — let's talk!
              </p>
            </div>

            <div className="glass-dark p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                  <Mail size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <a href="mailto:tripti@example.com" className="text-white text-sm hover:text-violet-400 transition-colors">
                    tripti@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Status</p>
                  <p className="text-green-400 text-sm font-medium">Available for work</p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-6 rounded-2xl">
              <p className="text-gray-400 text-sm mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-3 rounded-xl border border-white/10 text-gray-500 ${color} hover:border-violet-500/30 transition-all`}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >
            <form onSubmit={handleSubmit} className="glass-dark p-8 rounded-2xl space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-2 font-medium">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Arjun Mehta"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="arjun@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Tripti, I'd love to discuss a project with you..."
                  className="form-input resize-none"
                  required
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <AlertCircle size={16} />
                  {errorMsg}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={16} className="animate-spin" />
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
