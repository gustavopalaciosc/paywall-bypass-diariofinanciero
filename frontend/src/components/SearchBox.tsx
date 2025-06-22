import { LuExternalLink } from "react-icons/lu";
import { useState } from "react";

import Button from "./Button";
import SearchBar from "./SearchBar";

interface SearchBoxProps {
  getArticle: (url: string) => void; 
  loading: boolean;
}

export default function SearchBox({ getArticle, loading }: SearchBoxProps) {
  const [url, setUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSearch = () => {
    setErrorMessage("");
    if (url.trim() !== "") {
      getArticle(url); 
    } else {
      setErrorMessage("URL no válida");
    }
    setUrl("");
  };

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

      <div className="flex-1 bg-white p-6 flex flex-col items-center space-y-2">
        <div className="flex flex-col sm:flex-row w-full gap-4">
          <SearchBar 
            url={url}
            setUrl={setUrl} 
            />
          <Button 
            text={loading? "Extrayendo..." : "Extraer"}
            click={handleSearch} 
          /> 
        </div>
        <div>
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
