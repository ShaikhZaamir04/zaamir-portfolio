import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Zaamir | Full Stack & Game Developer",
  description = "Zaamir's personal portfolio – showcasing modern web, mobile, and game development projects.",
  image = "https://zaamir-portfolio.vercel.app/og-image.png",
  url = "https://zaamir-portfolio.vercel.app/",
}) => {
  return (
    <Helmet>
      {/* Document Language & Charset */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>

      {/* SEO Meta */}
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Zaamir Portfolio OG Image" />
      <meta property="og:url" content={url} />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Zaamir Portfolio Twitter Card" />
    </Helmet>
  );
};

export default SEO;
