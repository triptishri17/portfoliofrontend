import { useTheme } from './hooks/useTheme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Journey from './sections/Journey';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

const App = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        className="
          min-h-screen
          overflow-x-hidden
          transition-colors
          duration-300

          bg-white
          text-black

          dark:bg-[#0a0a0f]
          dark:text-white
        "
      >
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Journey />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;