import { LuCopy } from "react-icons/lu";



const CopyButton = () => {
    return (
        <button className="px-2 py-1 flex items-center text-xs space-x-3 rounded-md border border-orange-300 bg-white">
            <LuCopy />
            <span>Copiar</span>
        </button>
    );
}

export default CopyButton;