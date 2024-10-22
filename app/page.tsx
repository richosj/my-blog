import Link from 'next/link';
import './styles/index.scss';

export default function Home() {
  return (
    <main className='main'>
      <div className="gate">
        <h1>Welcome to My Blog</h1>
      </div>
      <div className="container mx-auto px-10">
        <section className="home-hero">
          <h2 className='home-title'>Featured</h2>
          <div className='post-featured'>
            <Link href="/" className="flex">
              <div className="post-thumb">
                <img src="https://place-hold.it/350x350/666/fff" alt="" />
              </div>
              <div className='post-detail flex-1'>
                <div className="post-date">2024.12.12</div>
                <div className='flex-1'>
                  <div className="post-title line-clamp-2 mb-7 pr-5">
                    Design & development of the website’s 3 pages
                    Design & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pagesDesign & development of the website’s 3 pages
                  </div>
                  <div className="post-summary line-clamp-5">
                    The most critical three learnings for testing frontend, from ten years helping lead frontend engineering atThe most critical three learnings for testing frontend, from ten years helping lead frontend engineering atThe most critical three learnings for testing frontend, from ten years helping lead frontend engineering atThe most critical three learnings for testing frontend, from ten years helping lead frontend engineering at
                  </div>
                </div>
                <div className="post-category flex flex-wrap items-center gap-4">
                  <span className='rounded bg-neutral-500 hover:bg-neutral-900 p-2 text-lg text-white transition-all	'>#Typescript</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
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
      </div>
      
    </main>
  );
}
