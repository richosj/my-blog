"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProjectById } from "../../api/projects"; // API 함수 임포트
import "./read.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  year: string;
  categories: string[];
  comprehensive: string;
  role: string;
  period: string;
  link: string;
};

const ProjectDetail = () => {
  const { id } = useParams(); // useParams를 사용하여 URL에서 'id' 파라미터 가져오기
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가


  useEffect(() => {
    if (id) {
      const getProject = async () => {
        try {
          const data = await fetchProjectById(id); // API 함수 호출
          console.log(data)
          setProject(data);
        } catch (err) {
          console.error("Failed to fetch project details");
        } finally {
          setIsLoading(false);
        }
      };

      getProject();
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="read">
      {/* <Link href="/" className="back">
        BACK
      </Link>
      <h2 className="read-title">{project.title}</h2>

      <section className="flex read-detail">
        <div className="d-if">
          <dl>
            <dt>제작기간</dt>
            <dd>{project.period}</dd>
          </dl>
          <dl>
            <dt>역할</dt>
            <dd>{project.role}</dd>
          </dl>
          <dl>
            <dt>Link</dt>
            <dd>
              <Link href={project.link} className="link-vist">
                Visit Site
              </Link>
            </dd>
          </dl>
        </div>
        <div className="t-ls">
          {project.categories.map((category, idx) => (
            <div key={idx}>
              <span>{category}</span>
            </div>
          ))}
        </div>
        <div className="sd-c">{project.description}</div>
      </section> */}
    </div>
  );
};

export default ProjectDetail;
