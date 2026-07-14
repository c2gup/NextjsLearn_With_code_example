function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%),linear-gradient(135deg,#07111f_0%,#10243f_45%,#1f3b5b_100%)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[36px_36px] opacity-30" />
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <section className="max-w-xl space-y-8">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-100 shadow-lg shadow-black/10 backdrop-blur">
              Join the learning space
            </span>

            <div className="space-y-5">
              <h1 className="max-w-lg text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Create your account and start building with clarity.
              </h1>
              <p className="max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
                A focused signup experience for students and builders. Keep your
                progress synced, unlock curated lessons, and pick up exactly
                where you left off.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["120+", "guided lessons"],
                ["5 min", "quick setup"],
                ["24/7", "learning access"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/8 p-4 shadow-lg shadow-black/10 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              {[
                "Clean dashboard",
                "Personalized roadmap",
                "Progress tracking",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="relative">
            <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="mb-8 space-y-2">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-100/80">
                  Create account
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Welcome to your next chapter
                </h2>
                <p className="text-sm leading-6 text-slate-300">
                  Sign up to get your personalized dashboard, saved progress,
                  and structured practice sessions.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-slate-200">
                    <span>First name</span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Anupam"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/25"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-slate-200">
                    <span>Last name</span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Gupta"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/25"
                    />
                  </label>
                </div>

                <label className="block space-y-2 text-sm font-medium text-slate-200">
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/25"
                  />
                </label>

                <label className="block space-y-2 text-sm font-medium text-slate-200">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a strong password"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/25"
                  />
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3.5 font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-100"
                >
                  <span>Get started</span>
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  or continue with
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {["Google", "GitHub"].map((provider) => (
                  <button
                    key={provider}
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    Continue with {provider}
                  </button>
                ))}
              </div>

              <p className="mt-6 text-center text-sm text-slate-300">
                Already have an account?{" "}
                <a
                  href="/"
                  className="font-medium text-cyan-100 underline-offset-4 hover:underline"
                >
                  Sign in
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Page;
