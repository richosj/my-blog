"use client";


import { useRouter } from 'next/navigation';
import React from 'react';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // 토큰 삭제
    localStorage.removeItem('token');
    // 로그아웃 후 메인 페이지로 이동
    router.replace('/');
  };

  return (
    <button onClick={handleLogout}>로그아웃</button>
  );
};

export default LogoutButton;
