import { CardCar } from '@/components/card-car'
import { Input } from '@/components/input'

export default function Vehicle() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl text-gray-400">
        PESQUISA DE VIATURAS
      </h1>

      <form className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        <Input placeholder="Todas as Marcas" />
        <Input placeholder="Modelo" />
        <Input placeholder="Combustível" />
        <Input placeholder="Transmissão" />
        <Input placeholder="Ano Desde" />
        <Input placeholder="Ano Até" />
        <Input placeholder="Ordenar: Mais recente" />
        <button className="bg-gray-500 py-2 uppercase hover:bg-gray-600">
          Pesquisar
        </button>
      </form>

      <main className="grid grid-cols-1 gap-10 py-32 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 25 }).map((_, index) => (
          <CardCar key={index} />
        ))}
      </main>
    </div>
  )
}
