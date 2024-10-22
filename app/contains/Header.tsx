import Image from 'next/image';
import Link from 'next/link';
import Navigation from "../data/Navigation";
import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="hgroup">
                <Link href="/" className='logo flex justify-center items-center'>
                    <Image
                    src="/images/logo.png"
                    alt="OSJ"
                    width={200}
                    height={200}
                    priority
                    />
                </Link>
                <div className="search-bar flex items-center justify-center p-2">
                    <input type="text" className='h-10 w-full px-2' placeholder="Search..." />
                    <button type='button' className='text-black h-10 w-20 text-lg bg-gray-300 leading-none	'>검색</button>
                </div>
            </div>
            <Navigation />
        </header>
    );
}