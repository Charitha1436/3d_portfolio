import { resumeSkills } from "../constants";

const Tech = () => (
  <section id="skills" className="scroll-mt-20 px-6 py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
        03 / Technical Skills
      </p>
      <h2 className="text-4xl font-black sm:text-5xl">
        My engineering toolkit.
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resumeSkills.map((group, index) => (
          <article
            key={group.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-violet-400/30"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-bold">{group.title}</h3>
              <span className="font-mono text-xs text-slate-600">
                0{index + 1}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Tech;