import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import SEO from './components/SEO';

// Import sections
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
