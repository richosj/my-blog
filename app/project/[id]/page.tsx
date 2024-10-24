"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import "./read.scss";


const ProjectDetail = () => {
  const { id } = useParams();  // useParams를 사용하여 URL에서 'id' 파라미터 가져오기
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가


  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/projects/${id}`);
          if (response.ok) {
            const data = await response.json();
            setProject(data);
          } else {
            console.error('Failed to fetch project details');
            //notFound();
          }
        } catch (err) {
          console.error('Error:', err);
          //notFound();
        } finally {
          setIsLoading(false);
        }
      };

      fetchProject();
    }
  }, [id]);

  if (!project) {
    //notFound()
  }
  return (
    <>
    <div className='read'>
      <Link href="/" className="back">BACK</Link>
      <h2 className='read-title'>24식품</h2>
      
      <section className='flex read-detail'>
        <div className='d-if'>
          <dl>
            <dt>제작기간</dt>
            <dd>7Month</dd>
          </dl>
          <dl>
            <dt>역할</dt>
            <dd>
              프론트 개발,
              전체 영역
            </dd>
          </dl>
          <dl>
            <dt>Link</dt>
            <dd><Link href={"/"} className="link-vist">Visit Site</Link></dd>
          </dl>
        </div>
        <div className='t-ls'>
          <div><span>React,</span></div>
          <div><span>React,</span></div>
          <div><span>React,</span></div>
          <div><span>React,</span></div>
          <div><span>React,</span></div>
          <div><span>React,</span></div>
          <div><span>React,</span></div>
        </div>
        <div className='sd-c'>
        Brightmark is at the forefront of transforming organic waste intoBrightmark is at the forefront of transforming organic waste intoBrightmark is at the forefront of transforming organic waste intoBrightmark is at the forefront of transforming organic waste intoBrightmark is at the forefront of transforming organic waste into
        </div>
      </section>

      <section>
        <h2>어려웠던 점</h2>
      </section>

    </div>
    </>
  );
};

export default ProjectDetail;
