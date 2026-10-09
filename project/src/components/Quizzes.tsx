import { useState } from 'react';
import {
  Layout,
  Code2,
  Atom,
  Server,
  Database,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ChevronRight,
  ArrowLeft,
  Brain,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { QUIZZES, type Quiz } from '@/data/quizzes';

const ICON_MAP: Record<string, typeof Layout> = {
  Layout,
  Code2,
  Atom,
  Server,
  Database,
};

export default function Quizzes() {
  const { ref, isVisible } = useScrollReveal();
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);

  return (
    <section id="quizzes" className="relative overflow-hidden bg-ink-100 py-24 dark:bg-ink-900 lg:py-32">
      <div className="absolute left-1/3 top-0 h-48 w-96 rounded-full bg-accent-500/5 blur-[100px]" />

      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 reveal ${isVisible ? 'is-visible' : ''}`}>
        {!activeQuiz ? (
          <>
            <div className="mb-14 text-center">
              <p className="font-mono text-sm uppercase tracking-widest text-accent-500 dark:text-accent-400">
                Interactive
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-ink-900 dark:text-white sm:text-5xl">
                Test Your <span className="text-gradient">Knowledge.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-500 dark:text-ink-400">
                Five interactive quizzes covering web development fundamentals. Pick a
                topic, answer the questions, and see your score instantly.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {QUIZZES.map((quiz, idx) => {
                const Icon = ICON_MAP[quiz.icon] ?? Brain;
                return (
                  <button
                    key={quiz.id}
                    onClick={() => setActiveQuiz(quiz)}
                    className="card-hover group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 text-left hover:border-accent-400/30 dark:border-white/10 dark:bg-ink-950/50"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.5s ease-out ${idx * 100}ms, transform 0.5s ease-out ${idx * 100}ms`,
                    }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400/20 to-accent-600/10 text-accent-500 transition-transform group-hover:scale-110 dark:text-accent-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-ink-200 bg-ink-100 px-3 py-1 font-mono text-xs text-ink-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-400">
                        {quiz.questions.length} Questions
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                      {quiz.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                      {quiz.description}
                    </p>
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent-500 dark:text-accent-400">
                      Start Quiz
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                );
              })}

              {/* Info card */}
              <div className="flex flex-col justify-center rounded-2xl border border-dashed border-accent-400/30 bg-accent-400/5 p-6">
                <Trophy className="mb-3 h-8 w-8 text-accent-500 dark:text-accent-400" />
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  Challenge Yourself
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  Each quiz has 5 questions. Get instant feedback on your answers and see
                  your final score at the end.
                </p>
              </div>
            </div>
          </>
        ) : (
          <QuizPlayer quiz={activeQuiz} onExit={() => setActiveQuiz(null)} />
        )}
      </div>
    </section>
  );
}

function QuizPlayer({ quiz, onExit }: { quiz: Quiz; onExit: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = quiz.questions[currentIdx];
  const isLast = currentIdx === quiz.questions.length - 1;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelectedIdx(idx);
    setAnswered(true);
    const correct = idx === question.correctIndex;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);
  };

  const handleNext = () => {
    if (isLast) {
      setShowResults(true);
      return;
    }
    setCurrentIdx((i) => i + 1);
    setSelectedIdx(null);
    setAnswered(false);
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setAnswered(false);
    setScore(0);
    setShowResults(false);
    setAnswers([]);
  };

  if (showResults) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const passed = percentage >= 60;
    return (
      <div className="mx-auto max-w-2xl">
        <button
          onClick={onExit}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-400 dark:hover:text-accent-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to quizzes
        </button>

        <div className="glass rounded-3xl p-8 text-center sm:p-12">
          <div
            className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${
              passed
                ? 'bg-accent-500/20 text-accent-500 dark:text-accent-400'
                : 'bg-gold-500/20 text-gold-500'
            }`}
          >
            <Trophy className="h-10 w-10" />
          </div>

          <h3 className="font-display text-3xl font-bold text-ink-900 dark:text-white">
            {passed ? 'Well done!' : 'Keep practicing!'}
          </h3>
          <p className="mt-2 text-ink-500 dark:text-ink-400">{quiz.title}</p>

          <div className="my-8 flex items-center justify-center gap-8">
            <div>
              <p className="font-display text-5xl font-bold text-gradient">{score}</p>
              <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">Correct</p>
            </div>
            <div className="h-12 w-px bg-ink-200 dark:bg-white/10" />
            <div>
              <p className="font-display text-5xl font-bold text-ink-300 dark:text-ink-600">
                {quiz.questions.length - score}
              </p>
              <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">Wrong</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-ink-500 dark:text-ink-400">Score</span>
              <span className="font-mono font-semibold text-ink-900 dark:text-white">{percentage}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-ink-200 dark:bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-300 transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  correct
                    ? 'bg-accent-500/20 text-accent-500 dark:text-accent-400'
                    : 'bg-red-500/15 text-red-400'
                }`}
              >
                {correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleRestart}
              className="group flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>
            <button
              onClick={onExit}
              className="rounded-xl border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-800 transition-all hover:border-accent-400/50 hover:text-accent-500 dark:border-white/15 dark:text-white dark:hover:text-accent-400"
            >
              More Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  const Icon = ICON_MAP[quiz.icon] ?? Brain;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <button
        onClick={onExit}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-400 dark:hover:text-accent-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to quizzes
      </button>

      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400/20 to-accent-600/10 text-accent-500 dark:text-accent-400">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
            {quiz.title}
          </h3>
          <p className="text-xs text-ink-500 dark:text-ink-400">
            Question {currentIdx + 1} of {quiz.questions.length}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8 flex gap-1.5">
        {quiz.questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < currentIdx
                ? 'bg-accent-500'
                : i === currentIdx
                ? 'bg-accent-400'
                : 'bg-ink-200 dark:bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="glass rounded-2xl p-6 sm:p-8">
        <h4 className="font-display text-xl font-semibold leading-snug text-ink-900 dark:text-white">
          {question.question}
        </h4>

        <div className="mt-6 space-y-3">
          {question.options.map((option, idx) => {
            const isCorrect = idx === question.correctIndex;
            const isSelected = idx === selectedIdx;

            let stateClass = '';
            if (answered) {
              if (isCorrect) {
                stateClass = 'border-accent-500 bg-accent-500/10 text-accent-700 dark:text-accent-300';
              } else if (isSelected) {
                stateClass = 'border-red-500 bg-red-500/10 text-red-600 dark:text-red-400';
              } else {
                stateClass = 'border-ink-200 opacity-60 dark:border-white/10 dark:text-ink-500';
              }
            } else {
              stateClass =
                'border-ink-200 bg-white hover:border-accent-400/50 hover:bg-accent-400/5 dark:border-white/10 dark:bg-ink-950/50 dark:hover:border-accent-400/50';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={answered}
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm font-medium text-ink-700 transition-all ${stateClass} ${
                  !answered ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md font-mono text-xs ${
                      answered && isCorrect
                        ? 'bg-accent-500 text-ink-950'
                        : answered && isSelected
                        ? 'bg-red-500 text-white'
                        : 'bg-ink-100 text-ink-500 dark:bg-white/5 dark:text-ink-400'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </span>
                {answered && isCorrect && <CheckCircle2 className="h-5 w-5 text-accent-500 dark:text-accent-400" />}
                {answered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-400" />}
              </button>
            );
          })}
        </div>

        {/* Feedback + Next */}
        {answered && (
          <div className="mt-6 flex items-center justify-between rounded-xl bg-ink-100 p-4 dark:bg-ink-950/50">
            <p className="text-sm font-medium text-ink-700 dark:text-ink-200">
              {selectedIdx === question.correctIndex ? (
                <span className="flex items-center gap-2 text-accent-600 dark:text-accent-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Correct! Nice work.
                </span>
              ) : (
                <span className="flex items-center gap-2 text-red-500 dark:text-red-400">
                  <XCircle className="h-4 w-4" />
                  Not quite. The answer is {String.fromCharCode(65 + question.correctIndex)}.
                </span>
              )}
            </p>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-400"
            >
              {isLast ? 'See Results' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
