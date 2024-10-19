
"use client"; // 이 줄 추가
import Link from 'next/link';
import { useEffect, useState } from 'react';


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
    <div>
      <h1>Project List</h1>
      <div className="">
        <Link href={`/project/write`}>등록</Link>
      </div>
      <div className="grid gap-4 grid-cols-4">
        {projects.map((project) => (
          <div className="wraps" key={project.id}>
            <Link href={`/project/${project.id}`}>
              <img src={`http://localhost:5000${project.image_url}`} alt={project.name} />
            </Link>
            <p>{project.title}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ProjectList;
