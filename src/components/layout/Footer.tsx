import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/config/site";

const columns = [
  {
    heading: "Programs",
    links: [
      { to: "/courses", label: "All Courses" },
      { to: "/courses", label: "Data & AI" },
      { to: "/courses", label: "Management" },
      { to: "/courses", label: "Software" },
    ],
  },
  {
    heading: "Company",
    links: [
      { to: "/", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/", label: "Careers" },
      { to: "/", label: "Blog" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { to: "/", label: "Help Center" },
      { to: "/", label: "Guides" },
      { to: "/", label: "Events" },
      { to: "/", label: "Community" },
    ],
  },
];

const socials = [
  { href: site.social.linkedin, label: "LinkedIn", short: "in" },
  { href: site.social.twitter, label: "Twitter", short: "X" },
  { href: site.social.youtube, label: "YouTube", short: "YT" },
  { href: site.social.instagram, label: "Instagram", short: "IG" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <Container>
        <div className="relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 max-w-xs text-sm text-brand-200">
              {site.tagline}. Industry-aligned online programs with mentors,
              real projects, and career support that gets you hired.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-brand-100 transition-colors hover:border-white/40 hover:text-white"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link
                      to={l.to}
                      className="text-sm text-brand-200 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative border-t border-white/10 py-8">
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-brand-200 transition-colors hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" /> {site.email}
            </a>
            <span className="flex items-center gap-2 text-brand-200">
              <Icon name="phone" className="h-4 w-4" /> {site.phone}
            </span>
            <span className="flex items-center gap-2 text-brand-200">
              <Icon name="pin" className="h-4 w-4" /> {site.address}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-brand-300 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/" className="hover:text-white">
              Terms
            </Link>
            <Link to="/" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
