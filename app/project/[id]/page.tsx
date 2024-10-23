"use client";
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


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
            notFound();
          }
        } catch (err) {
          console.error('Error:', err);
          notFound();
        } finally {
          setIsLoading(false);
        }
      };

      fetchProject();
    }
  }, [id]);

  if (!project) {
    notFound()
  }
  return (
    isLoading ? <Loadingbar /> : (
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>Created At: {new Date(project.created_at).toLocaleString()}</p>
      </div>
    )
  );
};

export default ProjectDetail;
