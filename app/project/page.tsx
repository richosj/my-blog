"use client"; // 이 줄 추가
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProjects } from "../api/projects"; // API 함수 임포트
import Button from "../components/Button";
import "../styles/list.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  year: string;
  categories: string[];
  comprehensive: string;
};

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  useEffect(() => {
    const getProjects = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProjects(); // API 함수 호출
        setProjects(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        console.error("Failed to fetch projects");
      } finally {
        setIsLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <div>
          <Button text="Create" />
          <Link href={"/project/write"}>등록</Link>
        </div>
        <div className="page-title">프로젝트</div>
        <div className="container mx-auto px-10">
          <div className="posts-works">
            {projects.map((project, index) => (
              <Link href={`/project/${project.id}`} className="posts-work-group" key={project.id}>
                <div className="id">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div className="work-detail">
                  <div className="work-summary">
                    <span className="year">
                      {/* {project.date.split(".")[0]} */}
                    </span>
                    {/* 인증 추가 서비스 */}
                    {/* {project.comprehensive.split(",").map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))} */}
                  </div>
                  <div className="work-category">
                    {/* {project.categories.map((category, idx) => (
                      <span className="badge" key={idx}>
                        {category}
                      </span>
                    ))} */}
                  </div>
                </div>
                <div className="work-title">{project.title}</div>
                <div className="work-thumb" data-url="http://localhost:5000">
                  <img src={`http://localhost:5000${project.image_url}`} alt={project.title} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default ProjectList;
