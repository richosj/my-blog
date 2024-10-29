"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProjectById } from "../../api/projects"; // API 함수 임포트
import "./read.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  exe_date: string;
  technologies: string[];
  comprehensive: string;
  role: string;
  period: string;
  link: string;
};

const ProjectDetail = () => {
  const params = useParams(); // useParams를 사용하여 URL에서 'id' 파라미터 가져오기
  const id = params?.id; // id를 안전하게 가져오기 위해 확인
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    if (id) {
      const getProject = async () => {
        try {
          const data = await fetchProjectById(id); // API 함수 호출
          console.log(data);
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
      <Link href="/" className="back">
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
              <Link href={project.link} className="link-visit">
                Visit Site
              </Link>
            </dd>
          </dl>
          <dl>
            <dt>기술</dt>
            <dd>{project.technologies}</dd>
          </dl>
        </div>
        <div className="t-ls">
          {project.technologies}
        </div>
        <div className="sd-c">{project.description}</div>
      </section>
    </div>
  );
};

export default ProjectDetail;
