'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export function Footer() {
  const pathname = usePathname()
  const isNotHomePage = pathname !== '/'
  const styles = isNotHomePage ? '' : 'lg:absolute lg:bottom-0'

  return (
    <footer className={twMerge('relative w-full', styles)}>
      <div className="hidden w-full bg-gray-900/75 lg:block">
        <nav className="flex justify-center py-6 lg:m-auto lg:max-w-[1200px]">
          <ul className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs uppercase text-gray-300 hover:text-white"
            >
              empresa
            </Link>
            <Link
              href="/"
              className="text-xs uppercase text-gray-300 hover:text-white"
            >
              termos e condições
            </Link>
            <Link
              href="/"
              className="text-xs uppercase text-gray-300 hover:text-white"
            >
              livro de reclamações
            </Link>
            <Link
              href="/"
              className="text-xs uppercase text-gray-300 hover:text-white"
            >
              arbitragem auto
            </Link>
          </ul>
        </nav>
      </div>

      <div className=" bg-gray-800 p-4">
        <div className="flex flex-col items-center gap-6 lg:m-auto lg:max-w-[1200px] lg:flex-row lg:py-6">
          <p className="text-sm font-light text-gray-400">
            © 2024 <span className="text-white">FBI Automóveis</span> -
            Direitos reservados.
          </p>
          <Link
            href="/"
            className="text-sm hover:text-white/80 hover:underline lg:ml-[22%]"
          >
            Adaptar-Ram
          </Link>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 z-40 animate-bounce lg:bottom-12 lg:right-10">
        <>
          <Image
            alt="message"
            src="/messenger-phone.png"
            width={40}
            height={40}
            quality={100}
            className="lg:hidden"
          />
          <Image
            alt="message"
            src="/messenger.png"
            width={90}
            height={90}
            quality={100}
            className="hidden lg:block"
          />
        </>
      </button>
    </footer>
  )
}
