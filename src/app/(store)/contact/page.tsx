import { Mail } from 'lucide-react'

import { Input } from '@/components/input'

export default function Contact() {
  return (
    <div className="mt-5">
      <h1 className="text-2xl text-gray-400">Contactos</h1>
      <p className="mt-16 text-gray-200">
        Utilize o formulário ou a seguinte informação para entrar em contacto
        connosco. Responderemos o mais breve possível. Obrigado.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
        <div className="mb-8 ">
          <h1 className="font-semibold text-gray-200">FBI Automóveis</h1>
        </div>
        <form className="flex flex-col gap-4">
          <h1 className="font-semibold text-gray-200">FORMULÁRIO</h1>

          <Input placeholder="O seu nome" showIcon={false} />
          <Input placeholder="O seu telefone" showIcon={false} />
          <Input placeholder="O seu email" showIcon={false} />

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
      </div>

      <div className="my-20 flex min-h-[300px]  w-full items-center justify-center bg-white md:min-h-[400px]">
        <p className="text-2xl text-gray-500">Mapa</p>
      </div>
    </div>
  )
}
