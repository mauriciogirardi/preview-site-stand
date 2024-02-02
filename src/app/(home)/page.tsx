import Image from 'next/image'

import { Footer } from '@/components/footer'
import { HeaderDesktop } from '@/components/headers/header-desktop'
import { HeaderMobile } from '@/components/headers/header-mobile'

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <HeaderMobile />
      <HeaderDesktop />
      <Image
        src="/site-bg.jpg"
        alt=""
        width={1000}
        height={500}
        quality={100}
        className="h-full w-full lg:h-screen"
      />
      <Footer />
    </section>
  )
}
