// project/write/page.tsx
"use client"; // 이 줄 추가

import React, { useState } from 'react';

const ProjectWrite = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 글쓰기 처리 로직 추가
    console.log('Title:', title, 'Description:', description);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectWrite;
