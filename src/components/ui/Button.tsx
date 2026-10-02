import type { ReactNode } from 'react'
import { Link } from 'react-router'

interface ButtonProps {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'outline'
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const styles = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border border-white/25 text-white hover:bg-white/10',
}

export default function Button({ children, to, variant = 'primary', type = 'button', onClick, disabled }: ButtonProps) {
  const className = `inline-block rounded-full px-6 py-3 text-center font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]}`

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
