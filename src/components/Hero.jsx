import { motion } from "framer-motion";

const Hero = () => (
  <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-20 lg:px-10">
    <div className="pointer-events-none absolute left-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-violet-700/15 blur-[110px]" />
    <div className="pointer-events-none absolute right-[-8rem] bottom-[-12rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />

    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.04fr_.96fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <p className="mb-5 text-sm font-medium text-violet-300">Full Stack Software Engineer</p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[76px]">
          I build systems<br />
          that <span className="text-violet-400">work reliably.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          I'm Charitha, a software engineer focused on React, Go, real-time applications, and dependable backend infrastructure.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="rounded-lg bg-violet-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-400">
            View projects
          </button>
          <a href="mailto:charithanarayan33@gmail.com" className="rounded-lg border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-violet-400/50">
            Email me
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
          <div><span className="block text-xl font-bold">NIT Silchar</span><span className="text-xs text-slate-500">Computer Science, 2026</span></div>
          <div><span className="block text-xl font-bold">2 internships</span><span className="text-xs text-slate-500">Product &amp; research</span></div>
          <div><span className="block text-xl font-bold">Go + React</span><span className="text-xs text-slate-500">Primary stack</span></div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }} className="relative mx-auto w-full max-w-[440px]">
        <div className="absolute -left-5 top-10 h-28 w-28 rounded-full border border-violet-400/25" />
        <div className="absolute -right-4 bottom-12 h-36 w-36 rounded-full border border-cyan-400/15" />

        <figure className="relative overflow-hidden rounded-[2px] border-l-2 border-violet-400 bg-[#0d1020] p-3 shadow-2xl">
          <img src="/you1.jpg" alt="Charitha Nalipireddy" className="h-[440px] w-full object-cover object-[50%_20%] grayscale-[12%]" />
          <figcaption className="absolute bottom-6 left-6 rounded-md bg-[#080b16]/90 px-4 py-3 backdrop-blur-md">
            <p className="text-sm font-bold text-white">Charitha Nalipireddy</p>
            <p className="mt-1 text-xs text-slate-400">Software Engineer · NIT Silchar</p>
          </figcaption>
        </figure>
      </motion.div>
    </div>
  </section>
);

export default Hero;
