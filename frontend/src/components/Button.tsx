

type ButtonProps = {
    text: string;
    click: () => void;
}

const Button = ({text, click} : ButtonProps) => {

    return (
        <button
            onClick={click}
            className="px-8 py-2 border rounded-md font-medium text-sm md:text-base 
            bg-gradient-to-r from-orange-400 via-orange-500 to-orange-500"
        >
            {text}
        </button>
    );
}

export default Button;