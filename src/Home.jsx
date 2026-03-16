import React from 'react';

/* ─── Data ─────────────────────────────────────────────── */
const FEATURES = [
  {
    img: 'easy-to-use.svg',
    title: 'Easy to Use',
    desc: 'Simple interface to manage tasks quickly without any learning curve.',
  },
  {
    img: 'orgnaised.svg',
    title: 'Stay Organized',
    desc: 'Group and track tasks by project, priority, or deadline with ease.',
  },
  {
    img: 'cross-platform.svg',
    title: 'Cross Platform',
    desc: 'Access your tasks from any device — desktop, tablet, or mobile.',
  },
];

const STEPS = [
  { n: 1, text: 'Sign up and create your account.' },
  { n: 2, text: 'Add your tasks and set deadlines.' },
  { n: 3, text: 'Track progress and stay productive.' },
];

const TESTIMONIALS = [
  { initials: 'SK', name: 'Sarah Kim',    role: 'Product Manager',   color: 'blue',    quote: 'Taskly changed the way I organize my work!' },
  { initials: 'JD', name: 'John Doe',     role: 'Freelance Designer', color: 'purple',  quote: 'Simple, fast, and effective for daily productivity.' },
  { initials: 'AL', name: 'Alex Lee',     role: 'Software Engineer',  color: 'emerald', quote: 'The gentle nudges help me stay on track without feeling overwhelmed.' },
  { initials: 'MR', name: 'Maya Reyes',   role: 'Entrepreneur',       color: 'rose',    quote: 'My team syncs in minutes. Meetings are shorter and clearer.' },
  { initials: 'RT', name: 'Ravi Thakur',  role: 'Student',            color: 'amber',   quote: 'Planning assignments is so much easier — deadlines don\'t surprise me anymore.' },
  { initials: 'LM', name: 'Leo Martins',  role: 'Marketing Lead',     color: 'cyan',    quote: 'From campaigns to content, Taskly keeps our priorities crystal clear.' },
];

const AVATAR_COLORS = {
  blue:    'bg-blue-500/20 text-blue-400',
  purple:  'bg-purple-500/20 text-purple-400',
  emerald: 'bg-emerald-500/20 text-emerald-400',
  rose:    'bg-rose-500/20 text-rose-400',
  amber:   'bg-amber-500/20 text-amber-400',
  cyan:    'bg-cyan-500/20 text-cyan-400',
};

/* ─── Star row ──────────────────────────────────────────── */
const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ─── Arrow between steps ───────────────────────────────── */
const StepArrow = () => (
  <svg
    className="hidden md:block w-10 h-10 text-blue-500/60 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
  </svg>
);

/* ─── Component ─────────────────────────────────────────── */
const Home = () => {
  return (
    <div className="font-sans text-slate-100 bg-slate-950">

      {/* ══════════ HERO ══════════ */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between
                   gap-12 px-6 sm:px-12 md:px-20 pt-32 pb-20
                   bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-3xl rounded-full" aria-hidden="true" />

        {/* Left */}
        <div className="flex-1 max-w-lg relative z-10">
          <span className="inline-block px-3 py-1 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            Now in public beta
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-5">
            Taskly
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Organize your day, stay focused, and achieve your goals — one task at a time.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-blue-500 to-indigo-500
                         shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30
                         hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-300
                         bg-slate-800/60 border border-slate-700/60
                         hover:bg-slate-800 hover:text-slate-100 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center relative z-10">
          <img
            src="undraw_completed-tasks_1j9z.svg"
            alt="Person completing tasks illustration"
            className="w-64 sm:w-80 md:w-96 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section id="features" className="py-24 px-6 sm:px-12 md:px-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Everything you need
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Taskly is built to be the last productivity app you'll ever need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ img, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700/50
                           shadow-lg hover:border-blue-500/40 hover:shadow-blue-900/20
                           hover:-translate-y-1.5 transition-all duration-300"
              >
                <img
                  src={img}
                  alt=""
                  aria-hidden="true"
                  className="h-48 w-full object-contain mb-5"
                />
                <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section
        id="how-it-works"
        className="py-24 px-6 sm:px-12 md:px-20 bg-slate-950 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 mb-14">Get started in under two minutes.</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {STEPS.map((step, idx) => (
              <React.Fragment key={step.n}>
                <div className="flex-1 max-w-xs p-6 bg-slate-800/60 rounded-2xl border border-slate-700/50 shadow-md">
                  <span className="block text-4xl font-extrabold text-blue-400 mb-3">{step.n}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.text}</p>
                </div>
                {idx < STEPS.length - 1 && (
                  <>
                    {/* Mobile vertical arrow */}
                    <svg className="md:hidden w-6 h-6 text-blue-500/60 rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                    {/* Desktop horizontal arrow */}
                    <StepArrow />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section id="testimonials" className="py-24 px-6 sm:px-12 md:px-20 bg-slate-900 relative overflow-hidden">
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-3">
              What Our Users Say
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real stories from people who use Taskly to plan better, focus deeper, and finish more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ initials, name, role, color, quote }) => (
              <div
                key={name}
                className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50
                           shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1.5
                           transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`h-11 w-11 rounded-full grid place-items-center font-bold text-sm flex-shrink-0 ${AVATAR_COLORS[color]}`}>
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100 text-sm">{name}</p>
                    <p className="text-xs text-slate-400">{role}</p>
                  </div>
                </div>
                <Stars />
                <p className="mt-4 text-slate-300 italic text-sm leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-24 px-6 sm:px-12 md:px-20 bg-slate-950">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="h-72 w-[42rem] max-w-full bg-gradient-to-r from-blue-600/15 via-cyan-400/10 to-indigo-600/15 blur-3xl rounded-full" />
        </div>

        <div className="relative mx-auto max-w-4xl rounded-3xl bg-slate-900/80 backdrop-blur border border-slate-700/60 shadow-2xl overflow-hidden">
          <div className="px-8 py-14 md:px-14 md:py-16 text-center">
            {/* Accent */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue-500/15 blur-2xl" aria-hidden="true" />

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Ready to boost your productivity?
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Join thousands using Taskly to plan faster and finish more — with total clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3 font-semibold text-white
                           bg-gradient-to-r from-blue-500 to-indigo-500
                           shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30
                           hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3 font-semibold text-blue-300
                           bg-slate-800/60 border border-slate-700/60
                           hover:bg-slate-800 hover:text-blue-200 transition-all duration-200"
              >
                Watch Demo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                No credit card required
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
                Cancel anytime
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                Trusted by 5k+ users
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Taskly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;