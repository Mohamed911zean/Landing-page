import React from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="font-sans text-slate-100 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 bg-gradient-to-b from-slate-900/80 to-slate-800/60">
        {/* Left Side */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Taskly
          </h1>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-md mb-8">
            Organize your day, stay focused, and achieve your goals with ease.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-900/30 transition transform hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="bg-slate-800/60 text-slate-100 px-6 py-3 rounded-xl border border-slate-700/60 hover:bg-slate-800/80 transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="undraw_completed-tasks_1j9z.svg"
            alt="App Mockup"
            className="w-80 md:w-96 drop-shadow-2xl rounded-2xl"
          />
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="py-20 px-8 md:px-20 bg-gradient-to-b from-slate-800/60 to-slate-900/40">
        <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-800/60 backdrop-blur border border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
            <img src="easy-to-use.svg" alt="" className='h-70 mb-4' />
            <h3 className="text-xl font-semibold mb-2 text-slate-100">Easy to Use</h3>
            <p className="text-slate-300">Simple interface to manage tasks quickly.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/60 backdrop-blur border border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
            <img src="orgnaised.svg" alt="" className='h-70 mb-4' />
            <h3 className="text-xl font-semibold mb-2 text-slate-100">Stay Organized</h3>
            <p className="text-slate-300">Group and track tasks with ease.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/60 backdrop-blur border border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
            <img src="cross-platform.svg" alt="" className='h-70 mb-4' />
            <h3 className="text-xl font-semibold mb-2 text-slate-100">Cross Platform</h3>
            <p className="text-slate-300">Access from any device anytime.</p>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section id="how-it-works" className="py-20 px-8 md:px-20 bg-gradient-to-b from-slate-900/50 to-slate-800/40 text-center">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-12">How It Works</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
          {/* Step 1 */}
          <div className="p-6 bg-slate-800/60 rounded-2xl shadow-md border border-slate-700/50 relative z-10">
            <span className="text-blue-400 text-4xl font-bold">1</span>
            <p className="text-slate-300 mt-4">Sign up and create your account.</p>
          </div>

          {/* Arrow 1 */}
          <svg
            className="hidden md:block w-16 h-16 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12c4 0 6-4 8-8s4 8 8 8"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 12l-3 3m3-3l-3-3"
            />
          </svg>

          {/* Step 2 */}
          <div className="p-6 bg-slate-800/60 rounded-2xl shadow-md border border-slate-700/50 relative z-10">
            <span className="text-blue-400 text-4xl font-bold">2</span>
            <p className="text-slate-300 mt-4">Add your tasks and set deadlines.</p>
          </div>

          {/* Arrow 2 */}
          <svg
            className="hidden md:block w-16 h-16 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12c4 0 6-4 8-8s4 8 8 8"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 12l-3 3m3-3l-3-3"
            />
          </svg>

          {/* Step 3 */}
          <div className="p-6 bg-slate-800/60 rounded-2xl shadow-md border border-slate-700/50 relative z-10">
            <span className="text-blue-400 text-4xl font-bold">3</span>
            <p className="text-slate-300 mt-4">Track progress and stay productive.</p>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonials" className="py-20 px-8 md:px-20 bg-slate-900/60 backdrop-blur text-center relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4">What Our Users Say</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Real stories from people who use Taskly to plan better, focus deeper, and finish more.</p>

        {/* Ambient gradient blob */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 shadow-lg hover:shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 grid place-items-center text-blue-400 font-bold">SK</div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">Sarah Kim</p>
                <p className="text-xs text-slate-400">Product Manager</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="mt-4 text-slate-300 italic">“Taskly changed the way I organize my work!”</p>
          </div>

          {/* Card 2 */}
          <div className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 shadow-lg hover:shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 grid place-items-center text-purple-400 font-bold">JD</div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">John Doe</p>
                <p className="text-xs text-slate-400">Freelance Designer</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="mt-4 text-slate-300 italic">“Simple, fast, and effective for daily productivity.”</p>
          </div>

          {/* Card 3 */}
          <div className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 shadow-lg hover:shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-500/20 grid place-items-center text-emerald-400 font-bold">AL</div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">Alex Lee</p>
                <p className="text-xs text-slate-400">Software Engineer</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="mt-4 text-slate-300 italic">“The gentle nudges help me stay on track without feeling overwhelmed.”</p>
          </div>

          {/* Card 4 */}
          <div className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 shadow-lg hover:shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-rose-500/20 grid place-items-center text-rose-400 font-bold">MR</div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">Maya Reyes</p>
                <p className="text-xs text-slate-400">Entrepreneur</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="mt-4 text-slate-300 italic">“My team syncs in minutes. Meetings are shorter and clearer.”</p>
          </div>

          {/* Card 5 */}
          <div className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 shadow-lg hover:shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 grid place-items-center text-amber-400 font-bold">RT</div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">Ravi Thakur</p>
                <p className="text-xs text-slate-400">Student</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="mt-4 text-slate-300 italic">“Planning assignments is so much easier—deadlines don’t surprise me anymore.”</p>
          </div>

          {/* Card 6 */}
          <div className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 shadow-lg hover:shadow-blue-900/20 transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 grid place-items-center text-cyan-400 font-bold">LM</div>
              <div className="text-left">
                <p className="font-semibold text-slate-100">Leo Martins</p>
                <p className="text-xs text-slate-400">Marketing Lead</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.176 0l-2.803 2.036c-.784.57-1.838-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="mt-4 text-slate-300 italic">“From campaigns to content, Taskly keeps our priorities crystal clear.”</p>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 px-8 md:px-20">
        {/* Glow background */}
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[42rem] bg-gradient-to-r from-blue-600/20 via-cyan-400/10 to-indigo-600/20 blur-3xl rounded-full"></div>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900/70 backdrop-blur border border-slate-700/60 shadow-2xl overflow-hidden">
          <div className="relative isolate px-6 py-12 md:px-12 md:py-16">
            {/* Subtle accent gradient */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Ready to boost your productivity?
              </span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
              Join thousands using Taskly to plan faster and finish more with clarity.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:shadow-blue-900/30 transition-transform hover:-translate-y-0.5">
                Get Started Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-blue-300 bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800/80 transition">
                Watch Demo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>No credit card required</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                <span>Cancel anytime</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                <span>Trusted by 5k+ users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-8 bg-slate-900/70 border-t border-slate-800 text-center text-slate-400">
        <p>© 2025 Taskly. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home