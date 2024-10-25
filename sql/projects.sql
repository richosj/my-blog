CREATE TABLE projects (
  id SERIAL PRIMARY KEY,              -- 고유 ID (자동 증가)
  title VARCHAR(255) NOT NULL,        -- 프로젝트 제목 (최대 255자)
  description TEXT NOT NULL,          -- 프로젝트 설명 (길이 제한 없음)
  image_url VARCHAR(255),             -- 이미지 URL (최대 255자)
  period VARCHAR(100),                -- 제작 기간 (최대 100자)
  role VARCHAR(100),                  -- 역할 (최대 100자)
  link VARCHAR(255),                  -- 프로젝트 관련 링크 (최대 255자)
  technologies TEXT,                  -- 사용된 기술 목록 (길이 제한 없음)
  summary TEXT,                       -- 간략한 설명 (길이 제한 없음)
  created_at TIMESTAMP DEFAULT NOW(), -- 등록일 (기본값은 현재 시간)
  updated_at TIMESTAMP DEFAULT NOW()  -- 수정일 (기본값은 현재 시간)
);
