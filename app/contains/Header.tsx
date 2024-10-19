import Link from 'next/link';
import './header.scss';


export default function Header() {
    return (
        <header className="header">
            <div className="hgroup">
                <h1 className="logo">My Blog</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="">
                        <Link href="/">홈</Link>
                    </li>
                    <li className="">
                        <Link href="/project">프로젝트</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}