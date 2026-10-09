import { Briefcase, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { EXPERIENCE } from '@/data/portfolio';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="relative overflow-hidden bg-ink-50 py-24 dark:bg-ink-950 lg:py-32">
      <div className="absolute right-1/4 top-0 h-48 w-48 rounded-full bg-accent-700/5 blur-[80px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-14 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-accent-500 dark:text-accent-400">
            04 — Journey
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl">
            The <span className="text-gradient">journey</span> so far.
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-400 via-accent-700 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={exp.role}
                className="relative pl-20"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${idx * 200}ms, transform 0.6s ease-out ${idx * 200}ms`,
                }}
              >
                {/* Node */}
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-400/30 bg-white text-accent-500 shadow-lg shadow-accent-500/10 dark:bg-ink-900 dark:text-accent-400">
                  <Briefcase className="h-5 w-5" />
                </div>

                <div className="card-hover rounded-2xl border border-ink-200 bg-white p-6 hover:border-accent-400/20 dark:border-white/10 dark:bg-ink-900/50">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="rounded-full border border-ink-200 bg-ink-100 px-3 py-1 font-mono text-xs text-ink-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-500 dark:text-accent-400">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {exp.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-ink-500 dark:text-ink-400">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500 dark:text-accent-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
