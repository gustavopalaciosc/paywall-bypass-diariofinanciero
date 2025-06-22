interface ContentBlockProps {
  articleData: any;  
}

export default function ContentBlock({ articleData }: ContentBlockProps) {
  if (!articleData) return null; 

  return (
    <div className="h-50 w-full flex flex-col overflow-hidden rounded-md shadow-lg border-[1px] border-yellow-300">
      <div className="flex-1 bg-yellow-200 text-black p-6 flex justify-between items-center">
        <h1 className="text-sm md:text-xl font-semibold">Contenido extraído</h1>
      </div>
      <div className="flex-1 bg-white p-6 lg:px-28 flex flex-col items-center gap-4 overflow-y-auto">
        <h2 className="text-xl md:text-3xl font-semibold">{articleData.title}</h2>
        <p className="text-sm md:text-xl">{articleData.subtitle}</p>
        <img
          src={articleData.image_url}
          alt="Article Image"
          className="w-full md:w-2/3 h-auto mt-4 rounded-lg"
        />
        <div className="w-full">
          {articleData.body.map((text: string, index: number) => (
            <p key={index} className="text-sm md:text-base whitespace-pre-wrap mb-4">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
