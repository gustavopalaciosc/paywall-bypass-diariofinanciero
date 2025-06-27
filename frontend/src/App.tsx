import axios from "axios";
import { useState } from "react";  

import SearchBox from "./components/SearchBox";
import ContentBlock from "./components/ContentBlock";

function App() {
  const [articleData, setArticleData] = useState<any>(null); 

  const [loading, isLoading] = useState<boolean>(false);

  const getArticle = async (url: string) => {
    isLoading(true);
    try {
      const data = { url }; 
      const response = await axios.post(`https://paywall-bypass-diariofinanciero.onrender.com/article/`, data);
      setArticleData(response.data); 
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center py-4 px-4 md:px-24 space-y-4">
      <h1 className="text-2xl md:text-4xl font-bold">
        <span className="text-[#f87903]">Diario</span> Financiero
      </h1>
      <p className="text-xs md:text-lg text-gray-800">
        Extrae contenido del <a href="https://www.df.cl" className="text-[#ff9028] font-semibold">Diario Financiero</a> de manera gratuita.
      </p>
      <SearchBox 
        loading={loading}
        getArticle={getArticle} 
      />
      <ContentBlock articleData={articleData} />
    </div>
  );
}

export default App;
