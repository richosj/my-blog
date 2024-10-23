import { FC } from 'react';

interface IProgress{
    text:string;
}
const Button: FC<IProgress>= ({ text }) => {
    return (
        <>
            <button>
                {text}
            </button>
        </>
    )
}

export default Button;