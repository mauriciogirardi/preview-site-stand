'use client'

import { Menu, Search } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export function HeaderMobile() {
  const pathname = usePathname()
  const isNotHomePage = pathname !== '/'
  const styles = isNotHomePage ? 'bg-gray-800/90' : ''

  return (
    <header
      className={twMerge(
        'flex items-center justify-between px-4 py-5 md:hidden',
        styles
      )}
    >
      <Menu
        role="button"
        size={32}
        className="text-white hover:text-white/80"
      />
      <Image src="/logotipo.png" alt="FBI automóveis" width={100} height={80} />
      <Search
        role="button"
        size={28}
        className="text-white hover:text-white/80"
      />
    </header>
  )
}
