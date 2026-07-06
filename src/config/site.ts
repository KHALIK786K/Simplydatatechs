/**
 * Central branding + site metadata.
 * Change values here to rebrand the whole app in one place.
 */
export const site = {
  name: "Simplydatatechs",
  domain: "simplydatatechs.com",
  url: "https://www.simplydatatechs.com",
  tagline: "Online Programs to Advance Your Career",
  description:
    "Simplydatatechs offers industry-aligned online programs in data, analytics, management, and software — with live sessions, projects, and career support.",
  email: "info@simplydatatechs.com",
  phone: "+91-98765-43210",
  address: "Gurugram, Haryana, India",
  social: {
    linkedin: "https://www.linkedin.com/company/simplydatatechs",
    twitter: "https://twitter.com/simplydatatechs",
    youtube: "https://www.youtube.com/@simplydatatechs",
    instagram: "https://www.instagram.com/simplydatatechs",
  },
  founded: 2019,
} as const;

export type SiteConfig = typeof site;
