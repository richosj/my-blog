"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();  // useParams를 사용하여 URL에서 'id' 파라미터 가져오기
  const [project, setProject] = useState(null);

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
          }
        } catch (err) {
          console.error('Error:', err);
        }
      };

      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Created At: {new Date(project.created_at).toLocaleString()}</p>
    </div>
  );
};

export default ProjectDetail;
