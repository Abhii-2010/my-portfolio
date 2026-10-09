import { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SOCIAL_LINKS } from '@/data/portfolio';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please write at least a brief message';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
    };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-50 py-24 dark:bg-ink-950 lg:py-32">
      <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/8 blur-[120px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-accent-500 dark:text-accent-400">
              06 — Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl">
              Let's build something
              <br />
              <span className="text-gradient">great together.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              Have a project in mind, looking for a developer, or just want to connect?
              I'm always open to new opportunities and interesting conversations.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-200 bg-white text-accent-500 dark:border-white/10 dark:bg-ink-900 dark:text-accent-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-400 dark:text-ink-500">Email</p>
                  <a
                    href="mailto:abhiyadav.dev@gmail.com"
                    className="text-sm font-medium text-ink-900 transition-colors hover:text-accent-500 dark:text-white dark:hover:text-accent-400"
                  >
                    abhiyadav.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-200 bg-white text-accent-500 dark:border-white/10 dark:bg-ink-900 dark:text-accent-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-400 dark:text-ink-500">Location</p>
                  <p className="text-sm font-medium text-ink-900 dark:text-white">Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs text-ink-400 dark:text-ink-500">Find me online</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-500 transition-all hover:border-accent-400/50 hover:text-accent-500 dark:border-white/10 dark:bg-transparent dark:text-ink-300 dark:hover:text-accent-400"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/20 text-accent-500 dark:text-accent-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-xs text-sm text-ink-500 dark:text-ink-400">
                  Thanks for reaching out, {form.name}. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', message: '' });
                  }}
                  className="mt-6 rounded-lg border border-ink-300 px-5 py-2.5 text-sm font-medium text-ink-800 transition-colors hover:border-accent-400/50 hover:text-accent-500 dark:border-white/15 dark:text-white dark:hover:text-accent-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 outline-none transition-colors dark:bg-ink-950/50 dark:text-white dark:placeholder-ink-500 ${
                      errors.name
                        ? 'border-red-500/50 focus:border-red-400'
                        : 'border-ink-200 focus:border-accent-400 dark:border-white/10'
                    }`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 outline-none transition-colors dark:bg-ink-950/50 dark:text-white dark:placeholder-ink-500 ${
                      errors.email
                        ? 'border-red-500/50 focus:border-red-400'
                        : 'border-ink-200 focus:border-accent-400 dark:border-white/10'
                    }`}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 outline-none transition-colors dark:bg-ink-950/50 dark:text-white dark:placeholder-ink-500 ${
                      errors.message
                        ? 'border-red-500/50 focus:border-red-400'
                        : 'border-ink-200 focus:border-accent-400 dark:border-white/10'
                    }`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/20"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
