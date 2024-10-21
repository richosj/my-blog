import Link from 'next/link';
import './index.scss';

export default function Home() {
  return (
    <main className='main'>
      <div className="gate">
        <h1>Welcome to My Blog</h1>
      </div>

      <section className="home-hero">
        <h2 className='home-title'>최신 글</h2>
        {/* Add latest posts */}
        <div className="posts">
          <ul className='posts-list'>
            <li>
              <Link href="/" className="flex">
                <div className="num">01</div>
                <div className="">
                  <div className='subject'>Design & development of the website’s 3 pages</div>
                  <div className='over'>
                    <span>요약 글</span>
                    <span className="date">2024.12.12</span>
                  </div>
                  <div className="categorys">
                    <span>Design</span>
                    <span>Design</span>
                  </div>
                  <div className="thumbnail">

                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-hero">
        <h2 className='home-title'>최신 작업</h2>
      </section>
      
    </main>
  );
}
