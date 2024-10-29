import Image from 'next/image';
import Link from 'next/link';
//import axios from 'axios';
//import { useState } from 'react';
import LogoutButton from "../components/LogoutButton";
import Navigation from "../data/Navigation";
import './header.scss';

export default function Header() {

    // const [searchTerm, setSearchTerm] = useState('');
    // const [results, setResults] = useState<any[]>([]);

    // const handleSearch = async () => {
    //     try {
    //     const response = await axios.get(`http://localhost:5000/api/projects?search=${encodeURIComponent(searchTerm)}`);
    //     setResults(response.data);
    //     } catch (error) {
    //     console.error('Error fetching search results:', error);
    //     }
    // };
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
                <div>
                <LogoutButton />
                </div>
                <div className="search-bar flex items-center justify-center p-2">
                <input
                    type="text"
                    //value={searchTerm}
                    //onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search projects..."
                />
                <button type='button'
                className='text-black h-10 w-20 text-lg bg-gray-300 leading-none'
                //onClick={handleSearch}
                >검색</button>
                </div>
            </div>
            <Navigation />
        </header>
    );
}