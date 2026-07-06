/**
 * Photographic imagery for the site.
 *
 * These reference the Unsplash CDN (images.unsplash.com) and are used under the
 * Unsplash License (free for commercial and non-commercial use, no attribution
 * required). They are loaded with `loading="lazy"` and sized via URL params
 * (w/q/fm=webp) for performance. To fully self-host, download each image into
 * `public/media/` and point these constants at the local paths.
 */
const cdn = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70&fm=webp`;

export const images = {
  heroPanel: cdn("1550751827-4bd374c3f58b", 900), // cyber / code
  aboutTeam: cdn("1522071820081-009f0129c71c", 1000), // team collaboration
  service1: cdn("1451187580459-43490279c0fa", 800), // cloud / network
  service2: cdn("1526379095098-d400fd0bf935", 800), // data analytics
  service3: cdn("1555949963-aa79dcee981c", 800), // cybersecurity
  gallery: [
    cdn("1517180102446-f3ece451e9d8", 700), // office tech
    cdn("1504384308090-c894fdcc538d", 700), // workspace
    cdn("1498050108023-c5249f4df085", 700), // developer
    cdn("1531482615713-2afd69097998", 700), // team meeting
    cdn("1454165804606-c3d57bc86b40", 700), // analytics screen
    cdn("1573164713988-8665fc963095", 700), // data center
  ],
  cta: cdn("1497215728101-856f4ea42174", 1400), // modern office
} as const;
