import React from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-indigo-300/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-neutral-300 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

