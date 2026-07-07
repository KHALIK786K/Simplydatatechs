/**
 * Photographic imagery for the site — Unsplash CDN.
 * Used under the Unsplash License (free for commercial/non-commercial use).
 * Loaded with loading="lazy", decoding="async", sized via URL params, WebP.
 *
 * To self-host: download each into public/media/ and repoint paths.
 */
const cdn = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75&fm=webp`;

export const images = {
  // Hero
  heroPanel: cdn("1550751827-4bd374c3f58b", 900),
  heroCoding: cdn("1555949963-ff9fe0c870eb", 900),

  // About / Team
  aboutTeam: cdn("1522071820081-009f0129c71c", 1000),
  teamCollaboration: cdn("1600880292203-757bb62b4baf", 900),
  studentsLearning: cdn("1524178232363-1fb2b075b655", 900),
  instructorTeaching: cdn("1558403194-611308249627", 900),

  // Services / Technology
  aiVisualization: cdn("1677442136019-21780ecad995", 800),
  cloudComputing: cdn("1451187580459-43490279c0fa", 800),
  dataAnalytics: cdn("1551288049-bebda4e38f71", 800),
  cybersecurity: cdn("1555949963-aa79dcee981c", 800),
  softwareEngineering: cdn("1498050108023-c5249f4df085", 800),
  modernDashboard: cdn("1551434678-e076c223a692", 800),

  // Course banners
  courseBannerDS: cdn("1526379095098-d400fd0bf935", 900),
  courseBannerAI: cdn("1620712943543-bcc4688e7485", 900),
  courseBannerCloud: cdn("1544197150-b99a580bb7a8", 900),
  courseBannerDev: cdn("1461749280684-dccba630e2f6", 900),

  // Gallery - expanded
  gallery: [
    cdn("1517180102446-f3ece451e9d8", 700),
    cdn("1504384308090-c894fdcc538d", 700),
    cdn("1498050108023-c5249f4df085", 700),
    cdn("1531482615713-2afd69097998", 700),
    cdn("1454165804606-c3d57bc86b40", 700),
    cdn("1573164713988-8665fc963095", 700),
    cdn("1522202176988-66273c2fd55f", 700),
    cdn("1552664730-d307ca884978", 700),
  ],

  // Career / Success
  careerSuccess: cdn("1521737711867-e3b97375f902", 800),
  graduation: cdn("1523050854058-8df90110c9f1", 800),
  officeModern: cdn("1497366216548-37526070297c", 900),

  // CTA / Contact
  cta: cdn("1497215728101-856f4ea42174", 1400),
  contactOffice: cdn("1497366811353-6870744d04b2", 900),

  // Testimonial avatars (abstract)
  avatar1: cdn("1507003211169-0a1dd7228f2d", 200),
  avatar2: cdn("1494790108377-be9c29b29330", 200),
  avatar3: cdn("1472099645785-5658abf4ff4e", 200),
} as const;
