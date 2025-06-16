import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import SEO from './components/SEO';

// Import sections
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Google Analytics
ReactGA.initialize('G-E6K75L5K0N');

const App = () => {
  useEffect(() => {
    // ✅ Track pageview on load
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // ✅ Scroll analytics: track once when user scrolls 75% down
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;

      if (scrollPercent >= 75 && !window.__scrollTracked) {
        window.__scrollTracked = true;
        ReactGA.event({
          category: "Scroll",
          action: "Scrolled 75%",
          label: "Main Page"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="Zaamir | Full Stack & Game Developer"
        description="Zaamir's personal portfolio – showcasing modern web, mobile, and game development projects. Clean UI, powerful code."
        image="https://zaamir-portfolio.vercel.app/og-image.png"
        url="https://zaamir-portfolio.vercel.app/"
      />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
