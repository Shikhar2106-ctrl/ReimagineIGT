export default function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full rounded-[40px] bg-gradient-to-br from-teal-100 via-green-50 to-slate-100 shadow-2xl overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.18),transparent_70%)]" />

      {/* Center Circle */}

      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-600 shadow-2xl" />

      {/* Inner Circle */}

      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

      {/* Orbit Rings */}

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/40" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/40" />

      {/* Floating Air Particles */}

      <div className="absolute left-20 top-24 h-3 w-3 rounded-full bg-teal-500" />
      <div className="absolute right-24 top-20 h-4 w-4 rounded-full bg-green-500" />
      <div className="absolute left-24 bottom-24 h-3 w-3 rounded-full bg-emerald-500" />
      <div className="absolute bottom-28 right-20 h-5 w-5 rounded-full bg-teal-600" />

      {/* Dashboard Card */}

      <div className="absolute left-8 top-8 rounded-2xl bg-white p-5 shadow-xl">

        <p className="text-xs uppercase tracking-wider text-slate-500">
          Air Quality
        </p>

        <h3 className="mt-2 text-4xl font-bold text-teal-700">
          98%
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Excellent
        </p>

      </div>

      {/* Energy Card */}

      <div className="absolute bottom-8 right-8 rounded-2xl bg-white p-5 shadow-xl">

        <p className="text-xs uppercase tracking-wider text-slate-500">
          Energy Saving
        </p>

        <h3 className="mt-2 text-4xl font-bold text-green-600">
          42%
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Optimized
        </p>

      </div>

    </div>
  );
}