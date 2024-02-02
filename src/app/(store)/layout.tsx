import Image from 'next/image'

import { Footer } from '@/components/footer'
import { HeaderDesktop } from '@/components/headers/header-desktop'
import { HeaderMobile } from '@/components/headers/header-mobile'

export default function StoreLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="fixed inset-0 z-50 max-h-min">
        <HeaderMobile />
        <HeaderDesktop />
      </div>

      <div className="relative h-screen">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          src="/site-bg.jpg"
          alt="Imagem de fundo"
          width={1300}
          height={400}
        />
        <div className="relative z-10 px-4 pt-20 md:pt-[150px] lg:m-auto lg:max-w-[1200px]">
          {children}
        </div>

        <Footer />
      </div>
    </>
  )
}
