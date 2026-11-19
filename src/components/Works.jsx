import React from 'react'
import { resumeProjects } from "../constants";

const Works = () => (
  <section id="projects" className="scroll-mt-20 px-6 py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold text-violet-400">Selected work</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Things I've built and shipped.</h2>
      </header>

      <div className="mt-12 space-y-16">
        {resumeProjects.map((project, index) => (
          <article key={project.title} className="grid items-center gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.18fr_.82fr]">
            <div className={`relative h-[320px] overflow-hidden border border-white/10 sm:h-[390px] ${index === 0 ? "bg-[#17132b]" : "bg-[#101a27]"}`}>
              {index === 0 ? (
                <div className="absolute inset-0 p-5 sm:p-8">
                  <div className="mx-auto max-w-[560px] border border-white/10 bg-[#0b0d18] shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                      <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-slate-600" /><span className="h-2 w-2 rounded-full bg-slate-600" /><span className="h-2 w-2 rounded-full bg-violet-400" /></div>
                      <span className="text-[10px] text-slate-500">Live auction</span>
                    </div>
                    <div className="grid grid-cols-[1fr_160px] gap-4 p-4 sm:grid-cols-[1fr_190px]">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Royal Enfield 350</p>
                        <p className="mt-2 text-2xl font-bold">₹84,500</p>
                        <div className="mt-5 h-24 bg-gradient-to-br from-violet-400/20 to-cyan-400/5"><div className="h-full bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,.28),transparent_35%)]" /></div>
                        <p className="mt-3 text-xs text-emerald-400">● 18 bidders active</p>
                      </div>
                      <div className="border-l border-white/8 pl-4">
                        <p className="text-[10px] text-slate-500">Recent bids</p>
                        {["₹84,500", "₹84,000", "₹83,500"].map((bid, i) => <div key={bid} className="mt-4 flex justify-between text-xs"><span className="text-slate-400">Bidder {i + 1}</span><span>{bid}</span></div>)}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 p-5 sm:p-8">
                  <div className="mx-auto max-w-[560px] border border-white/10 bg-[#0a1018] shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                      <p className="text-xs font-bold">Contest Tracker</p>
                      <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-400">20+ contests</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 p-4">
                      {["LeetCode", "Codeforces", "CodeChef", "AtCoder"].map((platform, i) => (
                        <div key={platform} className="rounded-md border border-white/8 p-3">
                          <div className="flex items-center justify-between"><span className="text-xs">{platform}</span><span className="text-[10px] text-slate-500">Nov {20 + i}</span></div>
                          <p className="mt-4 text-sm font-bold">{["Weekly 482", "Round 1071", "Starters 168", "Beginner 390"][i]}</p>
                          <p className="mt-2 text-[10px] text-slate-500">{["2h 30m", "2h", "2h 30m", "1h 40m"][i]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:px-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-400">{project.type}</p>
              <h3 className="mt-3 text-3xl font-extrabold">{project.title}</h3>
              <p className="mt-5 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="text-sm text-slate-300 before:mr-2 before:text-violet-400 before:content-['•']">{item}</span>)}
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <p><span className="text-xl font-black text-white">{project.metric}</span><span className="ml-2 text-xs text-slate-500">{project.metricLabel}</span></p>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-violet-300 underline decoration-violet-400/30 underline-offset-4">View GitHub ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Works;