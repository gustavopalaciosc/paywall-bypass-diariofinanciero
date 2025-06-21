import { LuExternalLink } from "react-icons/lu";

import Button from "./Button";
import SearchBar from "./SearchBar";


export default function SearchBox() {
  return (
    <div className="h-50 w-full flex flex-col overflow-hidden rounded-md shadow-lg border-[1px] border-yellow-300">
      <div className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-6 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <LuExternalLink size={20} className="shrink-0 mt-[2px]" />
          <h2 className="text-sm md:text-2xl font-semibold leading-none">Extraer Contenido</h2>
        </div>
        <p className="text-xs md:text-sm">
          Ingresa la URL del artículo financiero que deseas leer
        </p>
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col sm:flex-row items-center gap-4">
        <SearchBar />
        <Button />
      </div>
    </div>
  );
}
