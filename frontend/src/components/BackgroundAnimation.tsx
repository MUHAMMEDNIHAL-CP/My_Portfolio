import React from 'react'

export default function BackgroundAnimation() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* grid glow */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:60px_60px] opacity-25 dark:opacity-15" />
      </div>

      {/* floating blobs */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl animate-float" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-float-slow" />
      <div className="absolute left-1/4 bottom-[-180px] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl animate-float" />
      <div className="absolute right-1/3 bottom-[-220px] h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-float-slow" />

      {/* subtle animated dots */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.55)_0%,transparent_60%)] blur-2xl animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.55)_0%,transparent_60%)] blur-2xl animate-pulse" />
      </div>
    </div>
  )
}

