// project/[id]/page.tsx
"use client"; // 클라이언트 컴포넌트로 선언

import { useParams } from 'next/navigation';

const ProjectDetail = () => {
  const { id } = useParams(); // 동적 라우트의 파라미터 받아오기

  return (
    <div>
      <h1>Project Detail</h1>
      <p>Project ID: {id}</p>
      {/* 프로젝트 세부 정보 로직 추가 */}
    </div>
  );
};

export default ProjectDetail;
