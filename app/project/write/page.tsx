"use client"; // 이 줄 추가

import React, { useState } from 'react';

const ProjectWrite = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

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
      const formData = new FormData();
      formData.append('image', image);

      try {
        const uploadResponse = await fetch('http://localhost:5000/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (uploadResponse.ok) {
          const uploadData = await uploadResponse.json();
          imageUrl = uploadData.imageUrl; // 업로드된 이미지의 URL
        } else {
          console.error('Failed to upload image');
          alert('이미지 업로드에 실패했습니다.');
          return;
        }
      } catch (err) {
        console.error('Error uploading image:', err);
        alert('서버와 이미지 업로드 연결하는 데 문제가 발생했습니다.');
        return;
      }
    }

    // 프로젝트 생성 요청
    try {
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, imageUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Project created:', data);
        // 성공적으로 저장된 후 입력 필드 초기화
        setTitle('');
        setDescription('');
        setImage(null);
        alert('프로젝트가 성공적으로 저장되었습니다!');
      } else {
        console.error('Failed to create project');
        alert('프로젝트 저장에 실패했습니다.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('서버와 연결하는 데 문제가 발생했습니다.');
    }
  };

  return (
    <div>
      <h1>Write a New Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectWrite;
