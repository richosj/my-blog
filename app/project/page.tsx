
"use client"; // 이 줄 추가
import Link from 'next/link';
import { useEffect, useState } from 'react';
import "./list.scss";

const ProjectList = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // 백엔드에서 프로젝트 목록 가져오기
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error('Failed to fetch projects');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchProjects();
  }, []);
  
  return (
    <>
    
      <header className='page-top'>
        <h1>U.re View Work</h1>
        <p><b>2024</b> / Current</p>
      </header>

      {/* <div className="">
        <Link href={`/project/write`}>등록</Link>
      </div> */}

      <div className="frames">
        <div className="posts-work">
          {projects.map((project) => (
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
          ))}
        </div>
      </div>
    </>
    
  );
};

export default ProjectList;
