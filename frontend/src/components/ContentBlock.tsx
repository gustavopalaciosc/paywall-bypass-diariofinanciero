import CopyButton from "./CopyButton";

export default function ContentBlock() {
  const contentText =
    "Este es un ejemplo de contenido extraído que tiene mucho texto para asegurarse de que todo el contenido se muestre en un solo contenedor y no se desborde horizontalmente. Puedes agregar más texto aquí para probar cómo se maneja el desbordamiento y la capacidad de desplazamiento. Si hay mucho texto, se mostrará de manera vertical y si el contenido excede la altura disponible, aparecerá una barra de desplazamiento. Es importante probar con textos largos para verificar la apariencia en pantallas pequeñas o grandes.";

  return (
    <div className="h-50 w-full flex flex-col overflow-hidden rounded-md shadow-lg border-[1px] border-yellow-300">
      <div className="flex-1 bg-yellow-200 text-black p-6 flex justify-between items-center">
        <h1 className="text-sm md:text-xl font-semibold">Contenido extraído</h1>
        <CopyButton />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col sm:flex-row items-center gap-4 overflow-y-auto">
        <p className="text-sm md:text-base whitespace-pre-wrap max-w-full">
          {contentText}
        </p>
      </div>
    </div>
  );
}
