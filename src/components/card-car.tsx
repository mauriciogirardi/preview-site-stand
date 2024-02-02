import Image from 'next/image'

export function CardCar() {
  return (
    <div className="cursor-pointer overflow-hidden hover:scale-[1.02]">
      <Image
        alt=""
        src="/car.jpg"
        width={400}
        height={300}
        className="w-full object-cover"
      />
      <div className="relative -mt-5 px-4">
        <p className="rounded bg-yellow-500 py-2 text-center font-semibold text-gray-800">
          24.500€
        </p>
        <div className="mt-3 text-center">
          <h1 className="font-semibold uppercase">Fiat Panda</h1>
          <h3 className="uppercase">2.0 Sport</h3>

          <div className="mt-8 flex items-center justify-between">
            <p>Mar / 2024</p>
            <p>1.000Km</p>
          </div>
        </div>
      </div>
    </div>
  )
}
