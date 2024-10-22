import Link from 'next/link';
import { FC } from 'react';
import "./navition.scss";

const Navigation: FC = () => {
    return (
        <nav className='nav'>
            <ul className="nav-links">
                <li>
                    <div className='nav-title'>프로젝트</div>
                    <ul className='nav-group'>
                        <li className='nav-item'>
                            <Link href="/project" className='nav-link'>프로젝트</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className='nav-title'>자료</div>
                    <ul className='nav-group'>
                        <li className='nav-item'>
                            <Link href="/" className='nav-link'>Javascript</Link>
                            <Link href="/" className='nav-link'>React</Link>
                            <Link href="/" className='nav-link'>Sql</Link>
                            <Link href="/" className='nav-link'>HTML+CSS</Link>
                            <Link href="/" className='nav-link'>기타</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className='nav-title'>일상</div>
                    <ul className='nav-group'>
                        <li className='nav-item'>
                            <Link href="/" className='nav-link'>취미</Link>
                            <Link href="/" className='nav-link'>독서</Link>
                            <Link href="/" className='nav-link'>생각</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;