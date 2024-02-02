import { Mail } from 'lucide-react'

import { Input } from '@/components/input'

export default function Workshop() {
  return (
    <div className="mt-5">
      <h1 className="text-2xl text-gray-400">A SUA MARCAÇÃO DE OFICINA</h1>

      <form className="my-10">
        <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <Input placeholder="Marca" />
          <Input placeholder="Modelo" />
          <Input placeholder="Matrícula" showIcon={false} />
          <Input placeholder="Kms" showIcon={false} />
          <Input placeholder="Data Pretendida" showIcon={false} />
          <Input placeholder="Hora pretendida de recepção" showIcon={false} />
          <Input placeholder="Nome" showIcon={false} />
          <Input placeholder="Telefone" showIcon={false} />
          <Input placeholder="O seu email" showIcon={false} />
        </div>

        <div className="my-6">
          <p className="text-sm font-semibold">
            Pretende viatura de substituição (com preço diário de €14.90 iva
            inc)?
          </p>
          <p className="mt-2 text-sm font-semibold">
            A viatura está em garantia?
          </p>
        </div>

        <textarea
          rows={5}
          className="w-full border border-gray-500 bg-gray-800 p-4"
          placeholder="A sua mensagem"
        />

        <button className="mt-10 flex w-full items-center justify-center gap-4 bg-gray-500 py-2 uppercase hover:bg-gray-600 md:w-48">
          <Mail />
          Enviar
        </button>
      </form>

      <div className="my-20 flex min-h-[300px]  w-full items-center justify-center bg-white md:min-h-[400px]">
        <p className="text-2xl text-gray-500">Mapa</p>
      </div>
    </div>
  )
}
