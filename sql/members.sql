CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contact VARCHAR(20) NOT NULL,
    role VARCHAR(50) NOT NULL,
    department VARCHAR(100) NOT NULL,
    team VARCHAR(100) NOT NULL,
    company VARCHAR(100) NOT NULL,
    avatar_url TEXT, -- 아바타 이미지 URL
    created_at TIMESTAMP DEFAULT NOW() -- 회원 가입일
);
