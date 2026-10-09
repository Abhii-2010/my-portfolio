import { ArrowDown, Sparkles, GraduationCap } from 'lucide-react';
import { STATS, TECH_MARQUEE } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-24 dark:bg-ink-950 [&.light]:bg-ink-50"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-700/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 text-sm font-medium text-accent-400 animate-fade-in dark:text-accent-300"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <Sparkles className="h-4 w-4" />
              Open to internships & opportunities
            </div>

            <h1
              className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 dark:text-white sm:text-6xl lg:text-7xl animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Full-stack developer
              <br />
              crafting the web,
              <br />
              <span className="text-gradient">one line at a time.</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300 animate-fade-up"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              I'm <span className="font-semibold text-ink-900 dark:text-white">Abhi Yadav</span> — a
              BCA student at JECRC, Jaipur, passionate about full-stack development and building
              fast, beautiful web applications.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25"
              >
                View My Work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-xl border border-ink-300 dark:border-white/15 px-6 py-3.5 text-sm font-semibold text-ink-800 dark:text-white transition-all hover:border-accent-400/50 hover:text-accent-400"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: stats card */}
          <div
            className="lg:col-span-5 animate-fade-up"
            style={{ animationDelay: '0.65s', opacity: 0 }}
          >
            <div className="glass animate-float rounded-2xl p-6 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-ink-200 dark:border-white/10 pb-4">
                <div>
                  <p className="text-sm text-ink-500 dark:text-ink-400">Currently</p>
                  <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                    BCA Student at JECRC
                  </p>
                </div>
                <span className="flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="h-2 w-2 rounded-full bg-accent-400" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-ink-200 dark:bg-white/5">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-ink-50 p-4 transition-colors hover:bg-ink-100 dark:bg-ink-900/80 dark:hover:bg-ink-800/80"
                  >
                    <p className="font-display text-3xl font-bold text-gradient">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t border-ink-200 dark:border-white/10 pt-4">
                <p className="mb-2 text-xs text-ink-500 dark:text-ink-400">Tech I work with</p>
                <div className="flex flex-wrap gap-1.5">
                  {TECH_MARQUEE.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-ink-200 bg-ink-100 px-2 py-1 font-mono text-xs text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <div className="flex flex-col items-center gap-2 text-ink-400 dark:text-ink-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="flex h-10 w-6 justify-center rounded-full border border-ink-300 p-1 dark:border-ink-700">
              <span className="h-2 w-1 animate-bounce rounded-full bg-accent-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-ink-200 bg-ink-50/80 py-3 backdrop-blur-sm dark:border-white/5 dark:bg-ink-950/50">
        <div className="flex w-max animate-marquee gap-8">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
            <span key={i} className="font-mono text-sm text-ink-400 dark:text-ink-500">
              {tech}
              <span className="ml-8 text-accent-600">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
