import Link from 'next/link';
import './header.scss';


export default function Header() {
    return (
        <header className="header ">
            <nav>
                <ul className="nav-links">
                    <li className="">
                        <Link href="/">홈</Link>
                        <Link href="/project">프로젝트</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}