import { Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TESTIMONIALS } from '@/data/portfolio';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-ink-100 py-24 dark:bg-ink-900 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-14 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-accent-500 dark:text-accent-400">
            05 — Testimonials
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl">
            What people <span className="text-gradient">say.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              className="card-hover relative rounded-2xl border border-ink-200 bg-white p-6 hover:border-accent-400/20 dark:border-white/10 dark:bg-ink-950/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease-out ${idx * 150}ms, transform 0.6s ease-out ${idx * 150}ms`,
              }}
            >
              <Quote className="mb-4 h-8 w-8 text-accent-400/30" />
              <blockquote className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-4 dark:border-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 font-display text-sm font-bold text-ink-950">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">{t.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
