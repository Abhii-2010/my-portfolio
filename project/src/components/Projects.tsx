import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROJECTS } from '@/data/portfolio';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="relative overflow-hidden bg-ink-100 py-24 dark:bg-ink-900 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-accent-500 dark:text-accent-400">
              03 — Selected Work
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl">
              Projects I'm <span className="text-gradient">proud of.</span>
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-300 dark:hover:text-accent-400"
          >
            View all on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Featured projects */}
        <div className="grid gap-8 lg:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.title}
              className="card-hover group relative overflow-hidden rounded-3xl border border-ink-200 bg-white hover:border-accent-400/30 dark:border-white/10 dark:bg-ink-950"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-accent-500/90 px-3 py-1 text-xs font-semibold text-ink-950 backdrop-blur-sm">
                  Featured
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-accent-400">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-200">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-ink-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Non-featured */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.title}
              className="card-hover group flex gap-5 rounded-2xl border border-ink-200 bg-white p-5 hover:border-accent-400/30 dark:border-white/10 dark:bg-ink-950/50"
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-accent-500 dark:text-accent-400">
                  {project.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink-900 transition-colors group-hover:text-accent-500 dark:text-white dark:group-hover:text-accent-400">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500 line-clamp-2 dark:text-ink-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-ink-200 bg-ink-100 px-2 py-0.5 font-mono text-xs text-ink-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
