
import SearchBox from "./components/SearchBox"
import ContentBlock from "./components/ContentBlock"

function App() {
 

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center py-4 px-4 md:px-24 space-y-4">
      <h1 className="text-2xl md:text-4xl font-bold"><span className="text-[#f87903]">Diario</span> Financiero</h1>
      <p className="text-xs md:text-lg text-gray-800">Extrae contenido del Diario Financiero de manera gratuita.</p>
      <SearchBox />
      <ContentBlock />

    </div>
      

  )
}

export default App
