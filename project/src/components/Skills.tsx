import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SKILL_CATEGORIES } from '@/data/portfolio';

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="relative overflow-hidden bg-ink-50 py-24 dark:bg-ink-950 lg:py-32">
      <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-accent-500/5 blur-[100px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-14 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-accent-500 dark:text-accent-400">
            02 — Skills
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl">
            Tools of the <span className="text-gradient">trade.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-500 dark:text-ink-400">
            A growing toolkit honed through coursework, personal projects, and hands-on
            building — from frontend interfaces to backend systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div
              key={category.title}
              className="card-hover rounded-2xl border border-ink-200 bg-white p-6 hover:border-accent-400/20 dark:border-white/10 dark:bg-ink-900/50"
              style={{ transitionDelay: `${catIdx * 80}ms` }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400/20 to-accent-600/10 text-accent-500 dark:text-accent-400">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    animate={isVisible}
                    delay={catIdx * 200 + skillIdx * 150}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  level,
  animate,
  delay,
}: {
  name: string;
  level: number;
  animate: boolean;
  delay: number;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{name}</span>
        <span className="font-mono text-xs text-ink-400 dark:text-ink-500">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-ink-200 dark:bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-300 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}
