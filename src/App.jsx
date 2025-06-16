import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Helmet>
        <title>Zaamir | Full Stack & Game Developer</title>
        <meta
          name="description"
          content="Zaamir is a full stack and game developer specializing in modern websites, mobile apps, and Unity games."
        />
        <meta name="keywords" content="Zaamir, Full Stack Developer, Game Developer, React, Unity, Firebase, Portfolio" />
        <meta name="author" content="Zaamir Shaikh" />

        <meta property="og:title" content="Zaamir | Full Stack & Game Developer" />
        <meta property="og:description" content="Explore Zaamir's work in web, mobile, and game development." />
        <meta property="og:image" content="https://zaamir-portfolio.vercel.app/og-image.png" />
        <meta property="og:url" content="https://zaamir-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zaamir | Full Stack & Game Developer" />
        <meta name="twitter:description" content="React, Unity, Firebase, SEO, Monetization – Portfolio of Zaamir." />
        <meta name="twitter:image" content="https://zaamir-portfolio.vercel.app/og-image.png" />

        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" />

        <link rel="canonical" href="https://zaamir-portfolio.vercel.app/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Zaamir Shaikh",
      "url": "https://zaamir-portfolio.vercel.app/",
      "sameAs": [
        "https://www.fiverr.com/zaamir_shaikh"
      ],
      "jobTitle": "Full Stack Developer & Game Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelancer"
      },
      "description": "Portfolio of Zaamir Shaikh - A passionate full stack and game developer specializing in React, Unity, Firebase, and more."
    }
    `}
        </script>
      </Helmet>


      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
