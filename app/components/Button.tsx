import { FC } from 'react';

interface ButtonProps{
    use: string;
    text: string;
    title: string;
    className?: string;
    disabled?: boolean;
    onClick?:() => void;
    children?: React.ReactNode;
}
const Button: FC<ButtonProps>= ({ use= "button", text, onClick, disabled, className, title }) => {
    return (
        <>
            <button
            type={use}
            className={className}
            title={title}
            onClick={onClick}
            disabled={disabled}
            >
                {text}
            </button>
        </>
    )
}

export default Button;