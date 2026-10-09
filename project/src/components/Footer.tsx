import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/data/portfolio';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink-200 bg-ink-50 dark:border-white/5 dark:bg-ink-950">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 font-display text-sm font-bold text-ink-950">
                AY
              </span>
              <span className="font-display text-lg font-bold text-ink-900 dark:text-white">
                Abhi<span className="text-accent-400">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              BCA student at JECRC, Jaipur — passionate about full-stack development and
              building beautiful, functional web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-sm font-semibold text-ink-900 dark:text-white">Navigate</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-400 dark:hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-sm font-semibold text-ink-900 dark:text-white">Connect</p>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-400 dark:hover:text-accent-400"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-6 sm:flex-row dark:border-white/5">
          <p className="text-xs text-ink-400 dark:text-ink-500">
            © {new Date().getFullYear()} Abhi Yadav. Crafted with care.
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-2 text-xs font-medium text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-400 dark:hover:text-accent-400"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-ink-200 transition-colors group-hover:border-accent-400/50 dark:border-white/10">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
