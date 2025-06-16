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
      {/* General Tags */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
