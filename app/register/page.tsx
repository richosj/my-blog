"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    contact: '',
    role: '',
    department: '',
    team: '',
    company: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(`${process.env.API_BASE_URL}/api/auth/register`, formData);
      setSuccess(response.data.message);
      setTimeout(() => {
        router.replace('/');
      }, 2000);
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="register-page">
      <h2>회원가입</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="이름" value={formData.name} onChange={handleChange} required />
        <input type="text" name="position" placeholder="직급" value={formData.position} onChange={handleChange} />
        <input type="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="연락처" value={formData.contact} onChange={handleChange} />
        <input type="text" name="role" placeholder="권한" value={formData.role} onChange={handleChange} />
        <input type="text" name="department" placeholder="부서명" value={formData.department} onChange={handleChange} />
        <input type="text" name="team" placeholder="팀명" value={formData.team} onChange={handleChange} />
        <input type="text" name="company" placeholder="회사명" value={formData.company} onChange={handleChange} />
        <input type="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} required />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;







