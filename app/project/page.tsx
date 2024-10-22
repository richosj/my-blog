
"use client"; // 이 줄 추가
import Link from 'next/link';
import { useState } from 'react';
import "../styles/list.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  year: string;
  categories: string[];
};



const ProjectList = () => {

  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   // 백엔드에서 프로젝트 목록 가져오기
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/projects');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setProjects(data);
  //       } else {
  //         console.error('Failed to fetch projects');
  //       }
  //     } catch (err) {
  //       console.error('Error:', err);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "디지털 식품정보 플랫폼",
      description: "반응형 서비스로 식품 정보를 제공",
      image_url: "/uploads/dummy-image1.png",
      year: "2024",
      categories: ["React", "Next.js", "TypeScript"],
    },
    {
      id: 2,
      title: "스마트홈 관리 시스템",
      description: "스마트 홈을 관리하고 모니터링",
      image_url: "/uploads/dummy-image2.png",
      year: "2023",
      categories: ["Vue.js", "Firebase", "JavaScript"],
    },
  ]);


  
  return (
    <>
      <header className='page-top'>
        {/* <h1>U.re View Work</h1>
        <p><b>2024</b> / Current</p> */}
      </header>

      <div className="">
        <Link href={`/project/write`}>등록</Link>
      </div>

      <div className="page-title">프로젝트</div>

      <div className="container mx-auto px-10">
        <div className="posts-works">
          {projects.map((project, index) => (
            <Link href={`/project/${project.id}`} className="posts-work-group" key={project.id}>
            <div className="id">{index+1}</div>
            <div className="work-detail">
              <div className="work-summary">
                <span className="year">2024</span>
                {/* 인증 추가 서비스 */}
                <div>반응형</div>
                <div>전체 퍼블리싱</div>
                <div>웹접근성 마크 획득</div>
              </div>
              <div className="work-category">
                <span className="badge">React</span>
                <span className="badge">Next.js</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Java</span>
              </div>
            </div>
            <div className="work-title">디지털 식품정보 플랫폼</div>
            <div className="work-thumb"><img src="https://place-hold.it/240x240/666/fff" alt="" /></div>
          </Link>
          ))}
          
          {/* {projects.map((project) => (
            <Link href={`/project/${project.id}`} key={project.id} className='work-view'>
              <div className='desc'>
                <div className='subject'>{project.title}</div>
                <div className='summary'>{project.description}</div>
                <div className='date'>{project.description}</div>
              </div>
              <div className='categorys'>
                <span className="badge">React</span>
                <span className="badge">Mysql</span>
              </div>
              <div className="thumbnail"><img src={`http://localhost:5000${project.image_url}`} alt={project.name} /></div>
            </Link>
          ))} */}
        </div>
      </div>
    </>
    
  );
};

export default ProjectList;
