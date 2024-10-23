
"use client"; // 이 줄 추가
import Link from 'next/link';
import { useState } from 'react';
//import Loadingbar from '../components/Loadingbar';
import Button from '../components/Button';
import Loader from '../components/Loader';
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
      year: "2024.12.12",
      categories: ["React", "Next.js", "TypeScript"],
      comprehensive: "반응형,웹접근성 마크 획득,전체 퍼블리싱"
    },
    {
      id: 2,
      title: "스마트홈 관리 시스템",
      description: "스마트 홈을 관리하고 모니터링",
      image_url: "/images/smacking-lips.jpg",
      year: "2024.12.12",
      categories: ["Vue.js", "Firebase", "JavaScript"],
      comprehensive: "반응형,웹접근성 마크 획득,전체 퍼블리싱"
    },
  ]);

  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  return (
    isLoading ? <Loader /> : (
    <>
      <div className=''>
        <Button text="Create" />
        <Link href={"/project/write"}>등록</Link>
      </div>

      <div className="page-title">프로젝트</div>

      <div className="container mx-auto px-10">
        <div className="posts-works">
          {projects.map((project, index) => (
            <Link href={`/project/${project.id}`} className="posts-work-group" key={project.id}>
            <div className="id">
              {index+1 < 10 ? `0${index+1}` : index+1}
            </div>
            <div className="work-detail">
              <div className="work-summary">
                <span className="year">
                  {project.year.split('.')[0]}
                </span>
                {/* 인증 추가 서비스 */}
                {project.comprehensive.split(',').map((item, index) => (
                  <>
                  <div key={index}>{item}</div>
                  </>
                ))}
              </div>
              <div className="work-category">
                {project.categories.map((category, index) => (
                  <span className="badge" key={index}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="work-title">{project.title}</div>
            <div className="work-thumb" data-url="http://localhost:5000">
              <img src={`${project.image_url}`} alt={project.title} />
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
