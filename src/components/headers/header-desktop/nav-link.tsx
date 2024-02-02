'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type NavLinkProps = LinkProps & {
  children: ReactNode
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const activeBg = pathname === props.href ? 'bg-gray-950/60' : ''

  return (
    <li className="h-full">
      <Link
        className={twMerge(
          'flex h-full items-center px-5 text-gray-400 hover:bg-gray-950/60 hover:text-white lg:px-7',
          activeBg
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
