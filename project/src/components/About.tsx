import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SERVICES } from '@/data/portfolio';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative overflow-hidden bg-ink-100 py-24 dark:bg-ink-900 lg:py-32">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-700/5 blur-[80px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: intro */}
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-accent-500 dark:text-accent-400">
              01 — About
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl">
              Student, developer, and
              <br />
              <span className="text-gradient">passionate learner.</span>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              <p>
                I'm Abhi Yadav, a BCA student at JECRC, Jaipur, with a deep passion for
                full-stack web development. My journey started with curiosity about how
                websites work, and it has grown into a love for building complete,
                functional web applications.
              </p>
              <p>
                I spend my time learning modern frameworks like React and Node.js, building
                real projects, and constantly pushing myself to improve. I believe in
                writing clean code and creating experiences that users enjoy.
              </p>
              <p>
                When I'm not coding or studying, you'll find me exploring new technologies,
                contributing to college tech events, or helping classmates debug their code.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Fast Learner', 'Problem Solver', 'Team Player', 'Detail Oriented'].map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 text-sm font-medium text-accent-600 dark:text-accent-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right: services grid */}
          <div>
            <p className="mb-6 text-sm font-medium text-ink-500 dark:text-ink-400">
              What I bring to the table
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="card-hover group rounded-2xl border border-ink-200 bg-white p-5 hover:border-accent-400/30 hover:shadow-lg hover:shadow-accent-500/10 dark:border-white/10 dark:bg-ink-950/50"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400/20 to-accent-600/10 text-accent-500 transition-transform group-hover:scale-110 dark:text-accent-400">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
