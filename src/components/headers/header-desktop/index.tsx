'use client'

import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { NavLink } from './nav-link'

export function HeaderDesktop() {
  const pathname = usePathname()
  const isNotHomePage = pathname !== '/'
  const styles = isNotHomePage ? '' : 'absolute left-0 top-5 lg:top-14'

  return (
    <div className={twMerge('hidden w-full bg-gray-800/90 md:block', styles)}>
      <header className="first-letter: flex items-center justify-between px-4 lg:m-auto lg:max-w-[1200px] lg:px-6">
        <Link href="/">
          <Image
            src="/logotipo.png"
            alt="FBI automóveis"
            width={100}
            height={80}
            quality={100}
            className="object-cover lg:w-[160px]"
          />
        </Link>

        <nav className="h-28">
          <ul className="flex h-full items-center text-xl">
            <NavLink href="/vehicle">Viaturas</NavLink>
            <NavLink href="/workshop">Oficina</NavLink>
            <NavLink href="/contact">Contactos</NavLink>
            <NavLink href="#">Rent a Car</NavLink>
          </ul>
        </nav>

        <div className="flex items-center gap-4 rounded bg-gray-800/50 p-5">
          <Facebook className="cursor-pointer hover:text-white/80" />
          <Instagram className="cursor-pointer hover:text-white/80" />
        </div>
      </header>
    </div>
  )
}
