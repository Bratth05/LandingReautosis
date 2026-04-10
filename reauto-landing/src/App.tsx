export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Reauto
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Repuestos de calidad para tu vehículo
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg">
          Ver productos
        </button>
      </section>
    </div>
  )
}