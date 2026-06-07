import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  as?: 'button' | 'a'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  // allow passing native button attributes (ex: type="submit")
  type?: 'button' | 'submit' | 'reset'
}


export default function Button({
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  children,
  className,
  type
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-400/50'

  const styles =
    variant === 'primary'
      ? 'bg-indigo-500 text-white shadow-glow hover:bg-indigo-400'
      : 'bg-white/10 text-neutral-100 ring-1 ring-white/20 hover:bg-white/15'

  const cls = `${base} ${styles} ${className ?? ''}`

  if (as === 'a') {
    return (
      <a className={cls} href={href ?? '#'}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={cls}
      onClick={onClick}
      type={type ?? 'button'}
      aria-label={typeof children === 'string' ? children : 'button'}
    >

      {children}
    </button>
  )
}



