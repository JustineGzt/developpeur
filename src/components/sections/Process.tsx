import type { ReactNode } from 'react'
import type { ProcessStep } from '@/types'
import { processSteps } from '@/data/process'

// Icônes au trait (style Lucide)
const icons: Record<ProcessStep["icon"], ReactNode> = {
  chat: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9 10h.01M15 10h.01" />
    </>
  ),
  idea: (
    <>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
    </>
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14.5 4l-5 16" />,
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
}

// Ligne ondulée lumineuse qui relie une étape à la suivante
function Connector() {
  return (
    <div className="relative -mr-8 h-10 flex-1" aria-hidden>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 h-full w-full drop-shadow-[0_0_6px_rgba(143,130,255,0.8)]">
        <defs>
          <linearGradient id="process-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#8f82ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8f82ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#8f82ff" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0 20 C15 20 20 34 35 32 S60 6 75 8 S92 20 100 20"
          fill="none"
          stroke="url(#process-line)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {/* Point lumineux */}
      <span className="absolute top-1/2 left-1/2 size-1.5 -translate-1/2 rounded-full bg-white shadow-[0_0_8px_3px_rgba(143,130,255,0.9)]" />
    </div>
  )
}

export default function Process() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.04] to-white/[0.01] p-8 md:p-12">
          {/* Halo violet en fond */}
          <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-64 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          <h2 className="text-3xl font-bold md:text-4xl">Comment ça fonctionne ?</h2>
          <p className="mt-3 text-lg text-white/70">
            Un processus simple et efficace pour transformer votre idée en projet.
          </p>

          <ol className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, i) => {
              const isLast = i === processSteps.length - 1
              return (
                <li key={step.title}>
                  <div className="flex items-center">
                    <div
                      className={`flex size-14 shrink-0 items-center justify-center rounded-full border ${
                        isLast
                          ? 'border-primary-light bg-primary/30 shadow-[0_0_24px_4px_rgba(109,93,252,0.6)]'
                          : 'border-white/20 bg-black'
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="size-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {icons[step.icon]}
                      </svg>
                    </div>
                    {!isLast && (
                      <div className="hidden flex-1 md:flex">
                        <Connector />
                      </div>
                    )}
                  </div>

                  <p className="mt-6 text-2xl font-bold text-primary-light">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.description}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
