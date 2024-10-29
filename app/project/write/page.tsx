"use client"; // 이 줄 추가

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { createProject } from '../../api/projects'; // 프로젝트 생성 API 함수
import { uploadImage } from '../../api/upload'; // 이미지 업로드 API 함수

const ProjectWrite = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [period, setPeriod] = useState<string>(''); // 날짜 필드 추가
  const [exeDate, setExeDate] = useState(''); // 날짜 필드 추가
  const [technologies, setTechnologies] = useState(''); // 기술 필드 추가
  const [summary, setSummary] = useState(''); // 부가 내용 필드 추가
  const [role, setRole] = useState(''); // 역할 필드 추가
  const [link, setLink] = useState(''); // 링크 필드 추가
  const router = useRouter(); // 프로젝트 저장 후 페이지 이동을 위한 useRouter

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 이미지 파일이 선택된 경우 업로드 처리
    let imageUrl = '';
    if (image) {
      try {
        const uploadData = await uploadImage(image);
        imageUrl = uploadData.imageUrl; // 업로드된 이미지의 URL
      } catch (err) {
        console.error('Error uploading image:', err);
        alert('서버와 이미지 업로드 연결하는 데 문제가 발생했습니다.');
        return;
      }
    }

    // 프로젝트 생성 요청
    try {
      const projectData = {
        title,
        description,
        imageUrl,
        period,
        exeDate,
        technologies: technologies.split(','),
        summary,
        role,
        link,
      };

      const data = await createProject(projectData); // API 함수를 사용하여 프로젝트 생성
      console.log('Project created:', data);
      // 성공적으로 저장된 후 입력 필드 초기화
      setTitle('');
      setDescription('');
      setImage(null);
      setPeriod('');
      setExeDate('');
      setTechnologies('');
      setSummary('');
      setRole('');
      setLink('');
      alert('프로젝트가 성공적으로 저장되었습니다!');
      router.push('/project'); // 저장 후 목록 페이지로 이동
    } catch (err) {
      console.error('Error:', err);
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    }
  };

  return (
    <div className='container mx-auto px-10'>
      <div className="page-title">프로젝트 등록</div>
      <form onSubmit={handleSubmit} className='mx-auto w-2/4'>
        <input
          type="text"
          className='form-control block w-full mb-2'
          placeholder="프로젝트 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input 
          type="date"
          placeholder="프로젝트 일"
          className='form-control block w-full mb-2'
          value={exeDate}
          onChange={(e) => setExeDate(e.target.value)}
          required
        />
        <input 
          type="text"
          placeholder="제작 기간"
          className='form-control block w-full mb-2'
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder='기술 (쉼표로 구분)'
          className='form-control block w-full mb-2'
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder='부가내용'
          className='form-control block w-full mb-2'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="text"
          placeholder='역할'
          className='form-control block w-full mb-2'
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder='관련 링크'
          className='form-control block w-full mb-2'
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <textarea
          placeholder="상세 내용"
          className='form-control block w-full h-10 mb-2'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit"
          className="btn block w-full rounded-md text-white hover:bg-neutral-900 pt-4 pb-4 bg-neutral-700 mt-4 text-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectWrite;
